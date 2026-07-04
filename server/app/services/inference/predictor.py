"""
predictor.py  —  Ensemble inference.

Runs each loaded checkpoint on the same video clip and returns:
  - per-model results  (for the bar chart / analysis_results table)
  - weighted-average ensemble score  (for riskScore / syntheticLikelihood)
"""

from __future__ import annotations

import torch
import torch.nn.functional as F
from PIL import Image

from app.services.model_loader.detector import (
    CheckpointModel,
    EnsembleDetector,
    get_ensemble,
)

# ─────────────────────────────────────────────────────────────────────────────
# TYPES
# ─────────────────────────────────────────────────────────────────────────────

class ModelResult:
    """Result from one checkpoint."""
    def __init__(self, label: str, folder: str, fake_prob: float, weight: float):
        self.label      = label
        self.folder     = folder
        self.fake_prob  = fake_prob
        self.real_prob  = 1.0 - fake_prob
        self.weight     = weight
        self.confidence = round(fake_prob * 100, 2)   # 0–100
        self.verdict    = "SYNTHETIC" if fake_prob >= 0.5 else "AUTHENTIC"


class EnsembleResult:
    """Fused result across all checkpoints."""
    def __init__(self, per_model: list[ModelResult]):
        self.per_model = per_model

        if not per_model:
            self.fake_prob  = 0.5
            self.real_prob  = 0.5
            self.confidence = 50.0
            self.verdict    = "AUTHENTIC"
            return

        total_weight = sum(r.weight for r in per_model)
        weighted_sum = sum(r.fake_prob * r.weight for r in per_model)
        self.fake_prob  = weighted_sum / total_weight
        self.real_prob  = 1.0 - self.fake_prob
        self.confidence = round(self.fake_prob * 100, 2)
        self.verdict    = "SYNTHETIC" if self.fake_prob >= 0.5 else "AUTHENTIC"


# ─────────────────────────────────────────────────────────────────────────────
# PREPROCESSING
# ─────────────────────────────────────────────────────────────────────────────

def _preprocess_frames(
    frames: list[Image.Image],
    ensemble: EnsembleDetector,
) -> torch.Tensor:
    """
    Convert PIL frames → pixel_values tensor (1, num_frames, C, H, W).
    Forces 224×224 so ViViT positional embeddings match exactly — no
    interpolation needed or used.
    """
    n     = ensemble.num_frames
    total = len(frames)

    if total == 0:
        raise ValueError("No frames provided to preprocessor.")

    # Uniformly sample exactly n frames
    if total >= n:
        indices = [round(i * (total - 1) / (n - 1)) for i in range(n)]
        sampled = [frames[i] for i in indices]
    else:
        sampled = (frames * ((n // total) + 1))[:n]

    # Force 224×224 — must match what the model was trained on
    sampled = [f.resize((224, 224), Image.BILINEAR) for f in sampled]

    inputs = ensemble.processor(
        images=sampled,
        return_tensors="pt",
        do_resize=False,      # already resized above — skip processor resize
        do_rescale=True,
        do_normalize=True,
    )

    # VivitImageProcessor returns (1, num_frames, C, H, W) — batch dim included
    pv = inputs["pixel_values"]
    return pv.to(ensemble.device)


# ─────────────────────────────────────────────────────────────────────────────
# CORE FORWARD PASS
# ─────────────────────────────────────────────────────────────────────────────

def _run_one_model(
    ckpt: CheckpointModel,
    pixel_values: torch.Tensor,
) -> ModelResult:
    """
    Run a single checkpoint on pre-processed pixel_values.
    pixel_values shape: (1, num_frames, C, H, W)

    NOTE: interpolate_pos_encoding is NOT passed — frames are already
    224×224 so the positional embedding dimensions match exactly.
    """
    with torch.no_grad():
        out = ckpt.backbone(pixel_values=pixel_values)
        cls_token = out.last_hidden_state[:, 0, :]   # (1, hidden_size)
        logits    = ckpt.classifier(cls_token)        # (1, 2)
        probs     = F.softmax(logits, dim=-1)         # (1, 2)
        # class 0 = real, class 1 = fake
        fake_prob = probs[0, 1].item()

    return ModelResult(
        label     = ckpt.label,
        folder    = ckpt.folder,
        fake_prob = fake_prob,
        weight    = ckpt.weight,
    )


# ─────────────────────────────────────────────────────────────────────────────
# PUBLIC API
# ─────────────────────────────────────────────────────────────────────────────

def predict_frames(frames: list[Image.Image]) -> EnsembleResult:
    """
    Run all loaded checkpoints on a list of PIL Images (video frames).
    Returns EnsembleResult with per-model breakdown + fused score.
    """
    ensemble     = get_ensemble()
    pixel_values = _preprocess_frames(frames, ensemble)

    per_model: list[ModelResult] = []
    for ckpt in ensemble.models:
        result = _run_one_model(ckpt, pixel_values)
        per_model.append(result)
        print(f"[Predictor]   {ckpt.label:<25} → fake={result.fake_prob*100:5.1f}%  [{result.verdict}]")

    fused = EnsembleResult(per_model)
    print(f"[Predictor] Ensemble → fake={fused.fake_prob*100:.1f}%  [{fused.verdict}]")
    return fused


def predict_video_frames(frame_paths: list[str]) -> EnsembleResult:
    """Load frame paths as PIL images then run ensemble."""
    frames = [Image.open(p).convert("RGB") for p in frame_paths]
    return predict_frames(frames)


def predict_image(image_path: str) -> EnsembleResult:
    """Replicate single image across num_frames → run ensemble."""
    ensemble = get_ensemble()
    img      = Image.open(image_path).convert("RGB")
    frames   = [img] * ensemble.num_frames
    return predict_frames(frames)