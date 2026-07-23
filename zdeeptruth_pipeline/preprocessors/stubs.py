"""Audio and image preprocessor placeholders.

Audio: we already know the universal first step for audio inputs is to
normalise to a 16 kHz mono WAV, so we do that. The model-specific feature
extraction (mel spectrograms etc.) will live in the audio inferencer when
that model is trained.

Image: simple resize to 224x224 as a default. Replace with whatever
matches the future image deepfake model's training pipeline.
"""
from __future__ import annotations
import json
import logging
from pathlib import Path
from typing import Any

from .base import Preprocessor
from ..storage import CacheRecord
from ..demux import extract_audio_wav

log = logging.getLogger(__name__)


class AudioPreprocessor(Preprocessor):
    name = "audio"

    def supports(self, media_kind: str) -> bool:
        return media_kind == "audio"

    def run(self, source_path: Path, media_key: str,
            record: CacheRecord, *, force: bool = False) -> dict[str, Any]:
        out_dir = self.store.subdir(media_key, "audio")
        wav_path = out_dir / "audio_16k.wav"
        stats_path = out_dir / "stats.json"

        if not force and wav_path.exists() and stats_path.exists():
            stats = json.loads(stats_path.read_text())
            return {"audio_wav_path": str(wav_path), "cached": True, **stats}

        extract_audio_wav(source_path, wav_path, sr=16000)
        stats = {"sample_rate": 16000, "channels": 1}
        stats_path.write_text(json.dumps(stats, indent=2))

        record.completed["audio"] = True
        self.store.save(record)
        return {"audio_wav_path": str(wav_path), "cached": False, **stats}


class ImagePreprocessor(Preprocessor):
    name = "image"

    def supports(self, media_kind: str) -> bool:
        return media_kind == "image"

    def run(self, source_path: Path, media_key: str,
            record: CacheRecord, *, force: bool = False) -> dict[str, Any]:
        out_dir = self.store.subdir(media_key, "image")
        img_path = out_dir / "image_224.npy"
        stats_path = out_dir / "stats.json"

        if not force and img_path.exists() and stats_path.exists():
            stats = json.loads(stats_path.read_text())
            return {"image_path": str(img_path), "cached": True, **stats}

        from PIL import Image
        import numpy as np
        with Image.open(source_path) as im:
            im = im.convert("RGB")
            orig_w, orig_h = im.size
            im = im.resize((224, 224))
            arr = np.asarray(im, dtype=np.uint8)
        np.save(img_path, arr)

        stats = {"size": [224, 224], "orig_size": [orig_w, orig_h]}
        stats_path.write_text(json.dumps(stats, indent=2))

        record.completed["image"] = True
        self.store.save(record)
        return {"image_path": str(img_path), "cached": False, **stats}
