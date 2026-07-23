"""Wires preprocessors and inferencers to media kinds.

Default registry has video implemented end-to-end and audio/image stubbed.
Replace components with .replace_preprocessor() / .replace_inferencer() once
the audio and image models are trained.
"""
from __future__ import annotations

from .preprocessors.base import Preprocessor
from .preprocessors.video import VideoPreprocessor
from .preprocessors.stubs import AudioPreprocessor, ImagePreprocessor
from .inferencers.base import Inferencer
from .inferencers.video import VideoInferencer
from .inferencers.stubs import AudioInferencer, ImageInferencer
from .storage import CacheStore


class Registry:
    def __init__(self, store: CacheStore | None = None,
                 video_inferencer: Inferencer | None = None):
        self.store = store or CacheStore()
        self._preprocessors: dict[str, Preprocessor] = {
            "video": VideoPreprocessor(store=self.store),
            "audio": AudioPreprocessor(store=self.store),
            "image": ImagePreprocessor(store=self.store),
        }
        self._inferencers: dict[str, Inferencer] = {
            "video": video_inferencer or VideoInferencer(),
            "audio": AudioInferencer(),
            "image": ImageInferencer(),
        }

    def preprocessor_for(self, media_kind: str) -> Preprocessor | None:
        return self._preprocessors.get(media_kind)

    def inferencer_for(self, media_kind: str) -> Inferencer | None:
        return self._inferencers.get(media_kind)

    def replace_preprocessor(self, media_kind: str, p: Preprocessor) -> None:
        self._preprocessors[media_kind] = p

    def replace_inferencer(self, media_kind: str, i: Inferencer) -> None:
        self._inferencers[media_kind] = i
