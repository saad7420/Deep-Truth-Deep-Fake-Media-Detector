"""
M7 — Visual Forensics Engine (real implementation).

This replaces server's old app/services/model_loader/detector.py +
app/services/inference/predictor.py entirely, rather than patching
them, because those had two compounding bugs:

  1. Checkpoint ensemble weights were on inconsistent scales (face
     checkpoints 0-100, genvideo 0-1), silencing genvideo in the
     weighted average.
  2. Architecturally more serious: the base model was built at
     NUM_FRAMES=32 with no temporal position-embedding resize, but
     the LoRA checkpoints were trained at NUM_FRAMES=16 *after*
     resizing those position embeddings (see
     deeptruth_train.py::_resize_temporal_pos_embed). The resize
     touches base-model weights that aren't part of the LoRA adapter
     file, so server's checkpoints were being evaluated on a model
     with different position embeddings than the ones they were
     trained against.

`deeptruth_pipeline` (app/_dtp_src) already gets both of these right:
  - `ensemble.py` does max(face_avg, genvideo) with a face-frame trust
    gate instead of a naively-weighted average.
  - `train_bridge.py` rebuilds the model through the *actual training
    script* (`_build_model`, which calls `_resize_temporal_pos_embed`
    before LoRA is applied), guaranteeing train/inference parity.

Note this engine does its own preprocessing internally (frame decode +
MTCNN face crop, via deeptruth_pipeline's VideoPreprocessor) rather
than consuming pre-extracted frames from M4. `inp.artifact_path` here
is the *original video file path*, not a frame directory — M4's job
for the video branch is reduced to handing this engine the raw file
(after DRM checks / format validation); M4's real preprocessing work
(audio extraction, informative frame sampling) matters for M6, not M7.
"""
from __future__ import annotations

import logging
from pathlib import Path

from ..base import Engine, EngineInput, EngineResult, neutral_result

log = logging.getLogger(__name__)

_pipeline = None  # lazy singleton — loads checkpoints once, reused across requests


def _get_pipeline():
    """Build (once) the deeptruth_pipeline.Pipeline wired to server/model/
    and the uploaded training script. Import is deferred so importing this
    module doesn't require torch/transformers unless the engine is used."""
    global _pipeline
    if _pipeline is not None:
        return _pipeline

    import os
    from pathlib import Path as _Path

    # server/model/ has the *_lora_best/ checkpoint folders already.
    here = _Path(__file__).resolve()
    server_root = here.parents[3]                       # app/engines/visual/engine.py -> server/
    os.environ.setdefault("DEEPTRUTH_CHECKPOINTS", str(server_root / "model"))
    os.environ.setdefault("DEEPTRUTH_TRAIN_PIPELINE",
                           str(server_root / "train_pipeline" / "deeptruth_train.py"))
    os.environ.setdefault("DEEPTRUTH_CACHE", str(server_root / "_dtp_cache"))
    os.environ.setdefault("DEEPTRUTH_LOGS", str(server_root / "_dtp_logs"))

    from app._dtp_src import Pipeline, Registry
    from app._dtp_src.inferencers.video import VideoInferencer

    registry = Registry()
    registry.replace_inferencer("video", VideoInferencer())
    _pipeline = Pipeline(registry=registry)
    log.info("[M7] deeptruth_pipeline video engine ready "
             f"(checkpoints={os.environ['DEEPTRUTH_CHECKPOINTS']})")
    return _pipeline


class VisualForensicsEngine(Engine):
    modality = "visual"

    def analyze(self, inp: EngineInput) -> EngineResult:
        try:
            pipeline = _get_pipeline()
            result = pipeline.analyze(Path(inp.artifact_path), threshold=0.5)
        except Exception as e:
            log.exception("[M7] visual analysis failed")
            return neutral_result("visual", f"VisualForensicsEngine failed: {e}")

        ir = result.inferences.get("video")
        if ir is None:
            reason = "; ".join(result.warnings) or "no video inference produced"
            return neutral_result("visual", reason)

        trust = ir["trust_score"]
        if trust != trust:  # NaN check — ensemble_decide() returns NaN when unusable
            return neutral_result("visual", ir.get("rationale", "ensemble returned NaN"))

        return EngineResult(
            modality="visual",
            fake_prob=float(trust),
            real_prob=float(1.0 - trust),
            confidence=float(ir["confidence"]),
            evidence={
                "rationale":        ir.get("rationale"),
                "per_checkpoint":   ir.get("per_model"),
                "face_avg":         ir.get("face_avg"),
                "genvideo_score":   ir.get("genvideo_score"),
                "n_face_detected":  ir.get("n_face_detected"),
                # GradCAM heatmap not yet implemented — evidence slot reserved
                # for it (report FR7.3). Add it here once built, without
                # changing this engine's return shape.
                "heatmap_path": None,
            },
            model_version="vivit-lora-ensemble",
        )
