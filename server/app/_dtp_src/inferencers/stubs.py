"""Audio and image inferencer stubs.

Replace .predict() with real model code once those models are trained.
The supports() and modality fields let the registry route correctly today.
"""
from __future__ import annotations

from .base import Inferencer, InferenceResult


class AudioInferencer(Inferencer):
    modality = "audio"

    def supports(self, media_kind: str) -> bool:
        return media_kind == "audio"

    def predict(self, media_key, preprocessed, **opts) -> InferenceResult:
        raise NotImplementedError(
            "AudioInferencer not yet implemented. "
            "Wire in your fine-tuned WavLM here."
        )


class ImageInferencer(Inferencer):
    modality = "image"

    def supports(self, media_kind: str) -> bool:
        return media_kind == "image"

    def predict(self, media_key, preprocessed, **opts) -> InferenceResult:
        raise NotImplementedError(
            "ImageInferencer not yet implemented."
        )
