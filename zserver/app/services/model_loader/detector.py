"""
detector.py  —  Ensemble deepfake detector.

Loads ALL available LoRA checkpoints into memory as independent merged models
that share the same ViViT-B/16x2 backbone.  At inference time every model
runs on the clip and their fake-probability scores are averaged (with optional
per-dataset weights).

Directory layout expected inside  <server_root>/model/ :
    celebdf_v2_lora_best/        adapter_config.json + adapter_model.safetensors
    dfdc_lora_best/
    ffpp_lora_best/
    deeperforensics_lora_best/
    wilddeepfake_lora_best/
    genvideo_lora_best/
    genvideo_lora_best_warm/
    genvideo_lora_last_warm/

Any folder that exists and has adapter_config.json is loaded automatically —
missing folders are skipped with a warning, not an error, so you can add
checkpoints incrementally.
"""

from __future__ import annotations

import copy
import os
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional

import torch
import torch.nn as nn
from peft import PeftModel
from transformers import AutoModelForVideoClassification, VivitImageProcessor

# ─────────────────────────────────────────────────────────────────────────────
# PATHS & CONSTANTS
# ─────────────────────────────────────────────────────────────────────────────

_THIS_DIR    = Path(__file__).resolve().parent          # model_loader/
_SERVER_ROOT = _THIS_DIR.parents[2]                     # server/
MODEL_ROOT   = Path(os.getenv("MODEL_DIR", str(_SERVER_ROOT / "model")))

BASE_MODEL = "google/vivit-b-16x2-kinetics400"
NUM_FRAMES = 32   # must match training config

# Ordered list of checkpoints (folder name → display label).
# Weight is the confidence multiplier used in weighted averaging (all 1.0 by
# default — set higher for checkpoints you trust more).
CHECKPOINTS: list[dict] = [
    {"folder": "celebdf_v2_lora_best",      "label": "CelebDF-v2",       "weight": 90},
    {"folder": "dfdc_lora_best",            "label": "DFDC",             "weight": 87},
    {"folder": "ffpp_lora_best",            "label": "FF++",             "weight": 72},
    {"folder": "deeperforensics_lora_best", "label": "DeeperForensics",  "weight": 99},
    {"folder": "wilddeepfake_lora_best",    "label": "WildDeepfake",     "weight": 80},
    {"folder": "genvideo_lora_best",        "label": "GenVideo",         "weight": 0.7},
    {"folder": "genvideo_lora_best_warm",   "label": "GenVideo-Warm",    "weight": 0.8},
]


# ─────────────────────────────────────────────────────────────────────────────
# DATA CLASSES
# ─────────────────────────────────────────────────────────────────────────────

@dataclass
class CheckpointModel:
    """One merged (LoRA-fused) model for a single dataset checkpoint."""
    label:     str
    folder:    str
    weight:    float
    backbone:  nn.Module
    classifier: nn.Linear


@dataclass
class EnsembleDetector:
    """Collection of all loaded checkpoint models + shared processor."""
    processor:  VivitImageProcessor
    models:     list[CheckpointModel] = field(default_factory=list)
    num_frames: int = NUM_FRAMES
    device:     torch.device = field(default_factory=lambda: torch.device("cpu"))

    def is_empty(self) -> bool:
        return len(self.models) == 0


# ─────────────────────────────────────────────────────────────────────────────
# INTERNALS
# ─────────────────────────────────────────────────────────────────────────────

def _load_base_model(device: torch.device) -> nn.Module:
    """Load the ViViT backbone with a fresh 2-class head (no LoRA yet)."""
    print(f"[Detector] Loading base model: {BASE_MODEL}")
    model = AutoModelForVideoClassification.from_pretrained(
        BASE_MODEL,
        num_labels=2,
        ignore_mismatched_sizes=True,
        local_files_only=True,
    )
    model.to(device)
    model.eval()
    return model


def _apply_and_merge(base_model: nn.Module, adapter_path: str, device: torch.device) -> nn.Module:
    """
    Apply a LoRA adapter to a COPY of base_model, merge the weights, and
    return a plain nn.Module (no PEFT wrapper).
    """
    # Deep-copy so each checkpoint gets its own weight tensor
    model_copy = copy.deepcopy(base_model)

    peft_model = PeftModel.from_pretrained(
        model_copy,
        adapter_path,
        local_files_only=True,
    )
    # merge_and_unload folds LoRA into the linear layers → plain nn.Module
    merged = peft_model.merge_and_unload()
    merged.to(device)
    merged.eval()
    return merged


def _unwrap_backbone_and_head(merged: nn.Module) -> tuple[nn.Module, nn.Linear]:
    """
    Split merged model into:
        backbone   — VivitModel  (outputs pooled / last_hidden_state)
        classifier — nn.Linear(hidden_size, 2)
    """
    # Handle ModulesToSaveWrapper around the classifier
    clf_raw = merged.classifier
    if hasattr(clf_raw, "modules_to_save"):
        # PEFT wraps the trained head; unwrap it
        clf = next(iter(clf_raw.modules_to_save.values()))
        print(f"[Detector]   unwrapped modules_to_save → classifier")
    elif hasattr(clf_raw, "original_module"):
        clf = clf_raw.original_module
    else:
        clf = clf_raw

    backbone = merged.vivit  # VivitModel
    return backbone, clf


def _load_checkpoint(
    base_model: nn.Module,
    cfg: dict,
    device: torch.device,
) -> Optional[CheckpointModel]:
    """
    Try to load one checkpoint.  Returns None (with a warning) if the folder
    doesn't exist or is missing adapter_config.json.
    """
    folder   = cfg["folder"]
    label    = cfg["label"]
    weight   = cfg["weight"]
    ckpt_dir = MODEL_ROOT / folder

    if not (ckpt_dir / "adapter_config.json").is_file():
        print(f"[Detector]   ⚠  Skipping '{folder}' — adapter_config.json not found")
        return None

    print(f"[Detector]   Loading '{label}' from {ckpt_dir.name}/ …")
    merged   = _apply_and_merge(base_model, str(ckpt_dir), device)
    backbone, clf = _unwrap_backbone_and_head(merged)

    return CheckpointModel(
        label=label,
        folder=folder,
        weight=weight,
        backbone=backbone,
        classifier=clf,
    )


# ─────────────────────────────────────────────────────────────────────────────
# PUBLIC — build the ensemble
# ─────────────────────────────────────────────────────────────────────────────

def build_ensemble() -> EnsembleDetector:
    """
    Load the processor and all available checkpoints.
    Called once at startup (lazy singleton below).
    """
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"\n[Detector] ─── Building ensemble ────────────────────────────────")
    print(f"[Detector] Device      : {device}")
    print(f"[Detector] Model root  : {MODEL_ROOT}")
    print(f"[Detector] Checkpoints : {len(CHECKPOINTS)} configured")

    # Processor (shared — loaded once from HF cache)
    print("[Detector] Loading VivitImageProcessor …")
    processor = VivitImageProcessor.from_pretrained(
        BASE_MODEL,
        local_files_only=True,
    )

    # Base model (shared template — deep-copied per checkpoint)
    base_model = _load_base_model(device)

    # Load each checkpoint
    loaded: list[CheckpointModel] = []
    for cfg in CHECKPOINTS:
        ckpt = _load_checkpoint(base_model, cfg, device)
        if ckpt is not None:
            loaded.append(ckpt)

    if not loaded:
        raise RuntimeError(
            f"[Detector] No checkpoints found under {MODEL_ROOT}. "
            f"Make sure at least one adapter folder exists with adapter_config.json."
        )

    # Free the template base_model — no longer needed
    del base_model
    if device.type == "cuda":
        torch.cuda.empty_cache()

    print(f"[Detector] ✅ Ensemble ready — {len(loaded)}/{len(CHECKPOINTS)} models loaded\n")

    return EnsembleDetector(
        processor=processor,
        models=loaded,
        num_frames=NUM_FRAMES,
        device=device,
    )


# ─────────────────────────────────────────────────────────────────────────────
# LAZY SINGLETON
# ─────────────────────────────────────────────────────────────────────────────

_ensemble: Optional[EnsembleDetector] = None


def get_ensemble() -> EnsembleDetector:
    """
    Return the shared EnsembleDetector, initialising it on the first call.
    Thread-safe for read access; Python GIL protects the one-time write.
    """
    global _ensemble
    if _ensemble is None:
        _ensemble = build_ensemble()
    return _ensemble


# ─────────────────────────────────────────────────────────────────────────────
# BACKWARDS COMPAT — old code calls get_detector()
# ─────────────────────────────────────────────────────────────────────────────

def get_detector():
    """Alias kept so any existing imports don't break."""
    return get_ensemble()
