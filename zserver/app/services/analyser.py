"""
analyser.py  —  Forensic analysis pipeline (ensemble edition).

Orchestrates:
  1. Frame extraction  (video)  or  direct image load  (image)
  2. Ensemble ViViT inference  →  EnsembleResult
  3. DB-ready rows for each checkpoint + ensemble summary
"""

from __future__ import annotations

import asyncio
import json
import uuid
import os
from typing import Tuple

from app.services.preprocess.frame_extractor import extract_frames
from app.services.inference.predictor import (
    predict_video_frames,
    predict_image,
    EnsembleResult,
    ModelResult,
)

# ─────────────────────────────────────────────────────────────────────────────
# TYPES
# ─────────────────────────────────────────────────────────────────────────────

# (risk_score, synthetic_likelihood, status, analysis_results_rows)
AnalysisTuple = Tuple[float, float, str, list[dict]]


# ─────────────────────────────────────────────────────────────────────────────
# HELPERS
# ─────────────────────────────────────────────────────────────────────────────

def _status(fake_prob_0_to_1: float) -> str:
    pct = fake_prob_0_to_1 * 100
    if pct >= 65:  
        return "manipulated"
    if pct <= 35:
        return "authentic"
    return "inconclusive"


def _model_row(case_id: str, r: ModelResult, extra: dict | None = None) -> dict:
    """Build one analysis_results DB row from a per-model ModelResult."""
    details: dict = {
        "fake_prob": round(r.fake_prob, 4),
        "real_prob": round(r.real_prob, 4),
        "weight":    r.weight,
        "folder":    r.folder,
    }
    if extra:
        details.update(extra)

    return {
        "id":         str(uuid.uuid4()),
        "case_id":    case_id,
        "model_name": r.label,
        "confidence": r.confidence,
        "label":      r.verdict,       # "SYNTHETIC" | "AUTHENTIC"
        "details":    json.dumps(details),
    }


def _ensemble_row(case_id: str, result: EnsembleResult, extra: dict | None = None) -> dict:
    """Build a summary row for the ensemble fused score."""
    details: dict = {
        "fake_prob":   round(result.fake_prob, 4),
        "real_prob":   round(result.real_prob, 4),
        "models_used": len(result.per_model),
        "model_labels": [r.label for r in result.per_model],
    }
    if extra:
        details.update(extra)

    return {
        "id":         str(uuid.uuid4()),
        "case_id":    case_id,
        "model_name": "Ensemble (fused)",
        "confidence": result.confidence,
        "label":      result.verdict,
        "details":    json.dumps(details),
    }


def _build_rows(case_id: str, result: EnsembleResult, extra: dict | None = None) -> list[dict]:
    """
    Build the full list of DB rows:
      - one row per individual checkpoint (for bar chart breakdown)
      - one summary row for the fused ensemble score
    """
    rows = [_model_row(case_id, r, extra) for r in result.per_model]
    rows.append(_ensemble_row(case_id, result, extra))
    return rows


# ─────────────────────────────────────────────────────────────────────────────
# MAIN ENTRY POINT
# ─────────────────────────────────────────────────────────────────────────────

async def run_analysis(
    case_db_id: str,
    media_type: str,
    file_path: str,
) -> AnalysisTuple:
    """
    Full detection pipeline.  Returns:
        (risk_score, synthetic_likelihood, status, analysis_results)
    """
    await asyncio.sleep(0)   # yield so FastAPI stays responsive

    if media_type == "video":
        return await _analyse_video(case_db_id, file_path)
    elif media_type == "image":
        return await _analyse_image(case_db_id, file_path)
    elif media_type == "audio":
        # Audio model not yet integrated — return inconclusive
        return (50.0, 50.0, "inconclusive", [])

    return (0.0, 0.0, "failed", [])


# ─────────────────────────────────────────────────────────────────────────────
# VIDEO
# ─────────────────────────────────────────────────────────────────────────────

async def _analyse_video(case_db_id: str, file_path: str) -> AnalysisTuple:
    # Frame extraction (I/O bound — run in thread)
    try:
        frame_paths = await asyncio.get_event_loop().run_in_executor(
            None, extract_frames, file_path
        )
    except RuntimeError as exc:
        print(f"[Analyser] Frame extraction failed: {exc}")
        return (0.0, 0.0, "failed", [])

    if not frame_paths:
        return (0.0, 0.0, "failed", [])

    # Ensemble inference (CPU-bound — run in thread)
    result: EnsembleResult = await asyncio.get_event_loop().run_in_executor(
        None, predict_video_frames, frame_paths
    )

    extra    = {"frames_extracted": len(frame_paths), "file": file_path}
    rows     = _build_rows(case_db_id, result, extra)
    risk     = round(result.fake_prob * 100, 2)
    status   = _status(result.fake_prob)

    print(f"[Analyser] Video done — risk={risk:.1f}%  status={status}  models={len(result.per_model)}")
    return (risk, risk, status, rows)


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE
# ─────────────────────────────────────────────────────────────────────────────

async def _analyse_image(case_db_id: str, file_path: str) -> AnalysisTuple:
    result: EnsembleResult = await asyncio.get_event_loop().run_in_executor(
        None, predict_image, file_path
    )

    extra    = {"file": file_path}
    rows     = _build_rows(case_db_id, result, extra)
    risk     = round(result.fake_prob * 100, 2)
    status   = _status(result.fake_prob)

    print(f"[Analyser] Image done — risk={risk:.1f}%  status={status}  models={len(result.per_model)}")
    return (risk, risk, status, rows)

# ─────────────────────────────────────────────────────────────────────────────
# FILE VALIDATION  (called by cases.py router)
# ─────────────────────────────────────────────────────────────────────────────

ALLOWED_TYPES = {
    "image": ["image/jpeg", "image/png", "image/webp", "image/bmp", "image/tiff"],
    "video": ["video/mp4", "video/quicktime", "video/x-msvideo", "video/webm", "video/x-matroska"],
    "audio": ["audio/mpeg", "audio/wav", "audio/x-wav", "audio/flac", "audio/ogg", "audio/mp4"],
}

MAX_FILE_SIZE_MB = int(os.getenv("MAX_FILE_SIZE_MB", "500"))


def validate_file(
    media_type: str,
    content_type: str,
    file_size: int,
) -> str | None:
    """
    Returns an error message string if invalid, or None if OK.
    Called by the cases router before saving the file.
    """
    allowed = ALLOWED_TYPES.get(media_type)
    if allowed is None:
        return f"Unknown media_type '{media_type}'. Must be image, video, or audio."

    if content_type not in allowed:
        return (
            f"File type '{content_type}' is not allowed for {media_type}. "
            f"Allowed: {', '.join(allowed)}"
        )

    max_bytes = MAX_FILE_SIZE_MB * 1024 * 1024
    if file_size > max_bytes:
        return f"File too large ({file_size / 1e6:.1f} MB). Max is {MAX_FILE_SIZE_MB} MB."

    return None