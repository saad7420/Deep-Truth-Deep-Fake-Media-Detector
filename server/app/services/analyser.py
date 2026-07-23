"""
analyser.py — Forensic analysis pipeline.

Video now goes through app.registry's EngineRegistry (M7's fixed
VisualForensicsEngine, built on deeptruth_pipeline) instead of the old
app/services/inference/predictor.py + model_loader/detector.py, which
had the checkpoint-weight-scaling bug and the frame-count/position-
embedding architecture mismatch (see app/engines/visual/engine.py's
docstring for the full explanation).

Image analysis is NOT migrated yet — deeptruth_pipeline's ImageInferencer
is still an unimplemented stub, and the old image path shared the same
buggy detector.py the video path used, so rather than silently keep
serving degraded results, this returns an explicit
"inconclusive / not yet implemented" result until a real image engine
exists.
"""

from __future__ import annotations

import asyncio
import json
import uuid
import os
from typing import Tuple

from app.engines.base import EngineInput, EngineResult
from app.registry import get_registry

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


def _checkpoint_rows(case_id: str, per_checkpoint: dict | None) -> list[dict]:
    """One DB row per individual LoRA checkpoint, for the bar-chart
    breakdown the dashboard shows (report FR10.1)."""
    rows = []
    for name, score in (per_checkpoint or {}).items():
        rows.append({
            "id":         str(uuid.uuid4()),
            "case_id":    case_id,
            "model_name": name,
            "confidence": round(float(score) * 100, 2),
            "label":      "SYNTHETIC" if score >= 0.5 else "AUTHENTIC",
            "details":    json.dumps({"fake_prob": round(float(score), 4)}),
        })
    return rows


def _engine_result_row(case_id: str, label: str, result: EngineResult) -> dict:
    """Summary row for a whole-modality EngineResult (visual/audio/srm)."""
    details = {
        "fake_prob":  round(result.fake_prob, 4),
        "real_prob":  round(result.real_prob, 4),
        "confidence": result.confidence,
        "model_version": result.model_version,
        **{k: v for k, v in result.evidence.items() if k != "per_checkpoint"},
    }
    if result.error:
        details["error"] = result.error
    return {
        "id":         str(uuid.uuid4()),
        "case_id":    case_id,
        "model_name": label,
        "confidence": round(result.fake_prob * 100, 2),
        "label":      "SYNTHETIC" if result.fake_prob >= 0.5 else "AUTHENTIC",
        "details":    json.dumps(details),
    }


# ─────────────────────────────────────────────────────────────────────────────
# MAIN ENTRY POINT
# ─────────────────────────────────────────────────────────────────────────────

async def run_analysis(
    case_db_id: str,
    media_type: str,
    file_path: str,
) -> AnalysisTuple:
    """
    Full detection pipeline. Returns:
        (risk_score, synthetic_likelihood, status, analysis_results)
    """
    await asyncio.sleep(0)   # yield so FastAPI stays responsive

    if media_type == "video":
        return await _analyse_video(case_db_id, file_path)
    elif media_type == "image":
        return await _analyse_image(case_db_id, file_path)
    elif media_type == "audio":
        return await _analyse_audio(case_db_id, file_path)

    return (0.0, 0.0, "failed", [])


# ─────────────────────────────────────────────────────────────────────────────
# VIDEO — M7, real engine
# ─────────────────────────────────────────────────────────────────────────────

async def _analyse_video(case_db_id: str, file_path: str) -> AnalysisTuple:
    registry = get_registry()
    engine = registry.get("visual")

    try:
        result: EngineResult = await asyncio.get_event_loop().run_in_executor(
            None,
            engine.analyze,
            EngineInput(media_key=case_db_id, modality="visual",
                        artifact_path=file_path, task_id=case_db_id),
        )
    except Exception as exc:
        print(f"[Analyser] Visual engine raised unexpectedly: {exc}")
        return (0.0, 0.0, "failed", [])

    rows = _checkpoint_rows(case_db_id, result.evidence.get("per_checkpoint"))
    rows.append(_engine_result_row(case_db_id, "Ensemble (fused)", result))

    risk = round(result.fake_prob * 100, 2)
    status = _status(result.fake_prob) if result.confidence > 0 else "inconclusive"

    print(f"[Analyser] Video done — risk={risk:.1f}%  status={status}  "
          f"confidence={result.confidence:.2f}  "
          f"checkpoints={len(result.evidence.get('per_checkpoint') or {})}")
    return (risk, risk, status, rows)


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE — not yet migrated (deeptruth_pipeline's ImageInferencer is a stub)
# ─────────────────────────────────────────────────────────────────────────────

async def _analyse_image(case_db_id: str, file_path: str) -> AnalysisTuple:
    row = {
        "id":         str(uuid.uuid4()),
        "case_id":    case_db_id,
        "model_name": "Visual Forensics Engine",
        "confidence": 0.0,
        "label":      "AUTHENTIC",
        "details":    json.dumps({
            "note": "Image inference not yet implemented — deeptruth_pipeline's "
                     "ImageInferencer is still a stub. The old image path shared "
                     "the same buggy detector.py the video path used, so it was "
                     "removed rather than kept serving degraded results.",
        }),
    }
    print(f"[Analyser] Image analysis skipped (not yet implemented) — case={case_db_id}")
    return (50.0, 50.0, "inconclusive", [row])


# ─────────────────────────────────────────────────────────────────────────────
# AUDIO — M6, stub (see app/engines/audio/stub.py)
# ─────────────────────────────────────────────────────────────────────────────

async def _analyse_audio(case_db_id: str, file_path: str) -> AnalysisTuple:
    registry = get_registry()
    engine = registry.get("audio")

    result: EngineResult = await asyncio.get_event_loop().run_in_executor(
        None,
        engine.analyze,
        EngineInput(media_key=case_db_id, modality="audio",
                    artifact_path=file_path, task_id=case_db_id),
    )
    row = _engine_result_row(case_db_id, "AudioFakeNet (stub)", result)
    return (50.0, 50.0, "inconclusive", [row])


# ─────────────────────────────────────────────────────────────────────────────
# FILE VALIDATION  (called by cases.py router) — unchanged
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
