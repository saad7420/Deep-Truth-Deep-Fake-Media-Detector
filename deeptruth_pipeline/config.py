"""Paths and constants. Override with environment variables."""
from __future__ import annotations
import os
from pathlib import Path

DEEPTRUTH_ROOT = Path(os.environ.get("DEEPTRUTH_ROOT", "/data/deeptruth")).resolve()

CHECKPOINT_DIR = Path(os.environ.get(
    "DEEPTRUTH_CHECKPOINTS", DEEPTRUTH_ROOT / "checkpoints")).resolve()

CACHE_DIR = Path(os.environ.get(
    "DEEPTRUTH_CACHE", DEEPTRUTH_ROOT / "preprocessed")).resolve()

LOG_DIR = Path(os.environ.get(
    "DEEPTRUTH_LOGS", DEEPTRUTH_ROOT / "logs")).resolve()

TRAIN_PIPELINE = Path(os.environ.get(
    "DEEPTRUTH_TRAIN_PIPELINE", Path.home() / "deeptruth_train.py")).resolve()

VIDEO_EXTS = {".mp4", ".mov", ".avi", ".mkv", ".webm", ".m4v"}
AUDIO_EXTS = {".wav", ".mp3", ".flac", ".m4a", ".ogg", ".opus", ".aac"}
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".bmp"}

FACE_CHECKPOINT_NAMES = {"celebdf_v2", "ffpp", "dfdc", "wilddeepfake", "deeperforensics"}
FULL_FRAME_CHECKPOINT_NAMES = {"genvideo"}

# Lowered from 8 after the syntx_ai clip (7/16 face frames) was incorrectly
# trusted to genvideo while every face checkpoint flagged it as fake.
MIN_FACE_FRAMES = 6

DEFAULT_THRESHOLD = 0.5
USE_FP16 = True
