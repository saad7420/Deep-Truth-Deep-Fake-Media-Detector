"""Multi-checkpoint ensemble for the video model.

Policy:
    face_avg     = mean P(fake) across face-aware checkpoints
    genvideo     = P(fake) from the genvideo (full-frame) checkpoint
    trusted      = (n_face_detected >= MIN_FACE_FRAMES) and face_avg is not None

    if trusted and genvideo present:
        ensemble = max(face_avg, genvideo)        # any specialist alarm wins
    elif trusted:
        ensemble = face_avg
    elif genvideo present:
        ensemble = genvideo
    else:
        ensemble = NaN

Confidence (independent of verdict):
    If at least 2 checkpoints scored, confidence = max(0, 1 - 2*std(scores)).
    Low std means models agree; high std flags "needs human review".
"""
from __future__ import annotations
import statistics

from .config import FACE_CHECKPOINT_NAMES, MIN_FACE_FRAMES


def ensemble_decide(per_ckpt: dict[str, float], n_face_detected: int) -> dict:
    face_scores = {n: s for n, s in per_ckpt.items() if n in FACE_CHECKPOINT_NAMES}
    gv_score = per_ckpt.get("genvideo")

    face_avg = (sum(face_scores.values()) / len(face_scores)
                if face_scores else None)
    face_trusted = (n_face_detected >= MIN_FACE_FRAMES) and (face_avg is not None)

    if face_trusted and gv_score is not None:
        ensemble = max(face_avg, gv_score)
        rationale = (f"face detected {n_face_detected}/16; "
                     f"max(face_avg={face_avg:.3f}, genvideo={gv_score:.3f})")
    elif face_trusted:
        ensemble = face_avg
        rationale = (f"face detected {n_face_detected}/16; "
                     f"genvideo unavailable, using face_avg")
    elif gv_score is not None:
        ensemble = gv_score
        rationale = (f"face detected {n_face_detected}/16 "
                     f"(<{MIN_FACE_FRAMES}); using genvideo only")
    else:
        ensemble = float("nan")
        rationale = "no usable checkpoint outputs"

    all_scores = list(per_ckpt.values())
    if len(all_scores) >= 2:
        std = statistics.pstdev(all_scores)
        confidence = max(0.0, min(1.0, 1.0 - 2.0 * std))
    elif len(all_scores) == 1:
        confidence = 0.5
    else:
        confidence = 0.0

    return {
        "face_avg":       face_avg,
        "genvideo_score": gv_score,
        "ensemble":       ensemble,
        "face_trusted":   face_trusted,
        "confidence":     confidence,
        "rationale":      rationale,
    }
