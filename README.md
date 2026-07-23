# Deep-Truth — Module Architecture & Interface Design (v1)

Target stack: **Postgres + Redis**, matching the FYP report exactly.
Owner map: **Ramish → M3, M4, M5, M7, M9**. **Saad → M1, M2** (extension).
M6 (AudioFakeNet) and M8 (SRM) and M10 (dashboard) are owned by
whoever picks them up next — this doc exists so they can build against
a contract without waiting on anyone.

---

## 1. What already exists vs. what's net-new

From `deeptruth_pipeline.zip` and `server.zip` (analyzed earlier):

| Report module | Status | Source |
|---|---|---|
| M3 Unified API Gateway | Partial — `cases.py` router exists but has no rate limiting, no media-hash cache lookup, and a routing bug (looks up by internal `id` instead of `case_id`) | `server/app/routers/cases.py` |
| M4 Smart De-multiplexer | Partial — frame extraction exists (`frame_extractor.py`), but no audio-track separation, no informative-frame scoring (currently uniform sampling) | `server/app/services/preprocess/` |
| M5 Async Task Orchestration | **Missing** — currently just `FastAPI BackgroundTasks`, no queue, no workers, no retry | — |
| M6 AudioFakeNet | **Missing** in `server`. A real WavLM inferencer exists in `deeptruth_pipeline/inferencers/audio.py` but isn't wired into anything | `deeptruth_pipeline/inferencers/audio.py` |
| M7 Visual Forensics | Working but buggy — ViViT+LoRA ensemble exists, but checkpoint weights are inconsistently scaled (some 0–100, some 0–1), and there's no GradCAM/heatmap output | `server/app/services/model_loader/detector.py` |
| M8 SRM Noise Analysis | **Missing entirely** | — |
| M9 Multi-Modal Fusion | Wrong shape — current fusion averages *video checkpoints only*; the report's fusion is *audio + visual + SRM* across modalities. These are two different fusion steps that got conflated | `server/app/services/inference/predictor.py` |
| M1/M2 Extension | **Missing** — no browser extension code in either zip | — |
| M10 Dashboard | **Missing** — no React frontend in either zip, only the API | — |

So M7 has real work behind it; M3/M4 need extending; M5/M9 need to be
built close to from scratch; M6/M8/M1/M2/M10 are empty slots that need
contracts, not code, from you right now.

---

## 2. Layered architecture (per report Fig. 12), with ownership

```
CLIENT LAYER            Browser Extension (M1/M2, Saad)   Web Dashboard (M10, TBD)
                                    │                              │
API LAYER                Unified API Gateway & Validation (M3, Ramish)
                                    │
PROCESSING LAYER    Smart De-mux & Preprocessing (M4) ──▶ Async Task Orchestrator (M5)
                                                                    │  [Ramish owns both]
                          ┌─────────────────────┬─────────────────┴────────────┐
AI ENGINE LAYER    AudioFakeNet (M6, TBD)   Visual Forensics (M7, Ramish)   SRM Noise (M8, TBD)
                          └─────────────────────┴─────────────────┬────────────┘
INTELLIGENCE LAYER              Multi-Modal Fusion Logic Layer (M9, Ramish)
                                    │
DATA LAYER                  PostgreSQL  +  Redis (cache + queue)
                                    │
PRESENTATION LAYER          Forensic Reporting Dashboard (M10, TBD)
```

The three AI engines (M6/M7/M8) are peers — they never call each
other, never share code, and each returns the exact same result shape
(§4). That's what makes M6 and M8 buildable by someone else in
parallel without touching your code at all.

---

## 3. Repo structure

One monorepo, one FastAPI app, engines as swappable plugins — mirrors
the `Registry` pattern already used in `deeptruth_pipeline`, extended
to cover audio/SRM too.

```
deeptruth/
├── app/
│   ├── main.py
│   ├── core.py                      # app factory, CORS, lifespan
│   ├── database.py                  # Postgres (asyncpg/SQLAlchemy)
│   ├── redis_client.py              # Redis connection + cache helpers
│   ├── models.py                    # Pydantic schemas (already close to report's ERD)
│   │
│   ├── routers/
│   │   ├── cases.py                 # M3 — Ramish
│   │   ├── health.py
│   │   └── admin.py                 # AdminConfig endpoints (weights, thresholds)
│   │
│   ├── orchestration/               # M5 — Ramish
│   │   ├── queue.py                 # Redis-backed task queue (Celery or RQ)
│   │   ├── worker.py                # worker entrypoint, dispatches to engines
│   │   └── retry.py                 # exponential backoff, max 3 (per STD-01)
│   │
│   ├── preprocess/                  # M4 — Ramish
│   │   ├── demux.py                 # ffmpeg: split audio track + frames
│   │   ├── frame_sampler.py         # informative frame sampling (IFS)
│   │   └── media_probe.py           # kind detection, DRM check
│   │
│   ├── engines/                     # M6, M7, M8 — all implement engines/base.py
│   │   ├── base.py                  # ABSTRACT CONTRACT — §4. Ramish writes this.
│   │   ├── visual/                  # M7 — Ramish (built on server/detector.py)
│   │   │   ├── detector.py
│   │   │   ├── gradcam.py
│   │   │   └── predictor.py
│   │   ├── audio/                   # M6 — STUB ONLY, Ramish writes the stub
│   │   │   └── stub.py
│   │   └── srm/                     # M8 — STUB ONLY, Ramish writes the stub
│   │       └── stub.py
│   │
│   ├── fusion/                      # M9 — Ramish
│   │   ├── fusion_engine.py         # weighted fusion: 0.45·audio + 0.40·visual + 0.15·srm
│   │   └── classify.py              # manipulation-type classification
│   │
│   └── registry.py                  # wires engines/base.py implementations to modalities
│
├── extension/                       # M1/M2 — Saad, separate build, talks only to M3's REST API
├── dashboard/                       # M10 — TBD, separate build, talks only to M3's REST API
└── alembic/                         # Postgres migrations
```

Everything under `extension/` and `dashboard/` only ever talks to the
REST API in `routers/`. Nobody working on those needs to see your
Python code, and you never need to touch JS/React.

---

## 4. The contract that makes parallel work possible

This is the one file worth writing first: `app/engines/base.py`.
Every AI engine — yours (M7) and the ones you don't own (M6, M8) —
implements the same interface and returns the same result shape.

```python
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import Any

@dataclass
class EngineInput:
    media_key: str
    modality: str                    # "audio" | "visual" | "srm"
    artifact_path: str               # wav path, frame dir, or raw frame dir (srm reuses frames)
    extra: dict[str, Any] = field(default_factory=dict)

@dataclass
class EngineResult:
    modality: str
    fake_prob: float                 # 0..1 — REQUIRED, this is what M9 fuses
    real_prob: float                 # 1 - fake_prob
    confidence: float                # 0..1, engine's own certainty (agreement/quality signal)
    evidence: dict[str, Any]         # heatmap path, spectrogram path, noise map, segments, etc.
    model_version: str
    processed_at: str

class Engine(ABC):
    modality: str

    @abstractmethod
    def analyze(self, inp: EngineInput) -> EngineResult: ...
```

**Why this matters for you specifically:** M9 (fusion) only ever reads
`EngineResult.fake_prob` + `.confidence` + `.evidence`. It never needs
to know *how* M6's WavLM model or M8's SRM filters work internally.
Whoever builds M6/M8 can hand you a class that satisfies this contract
and your fusion code doesn't change. Write `EngineResult`-shaped stubs
today (returning a fixed 0.5/low-confidence placeholder) so M5 and M9
are fully testable before M6/M8 exist:

```python
class AudioFakeNetStub(Engine):
    modality = "audio"
    def analyze(self, inp): 
        return EngineResult("audio", 0.5, 0.5, 0.0, {"note": "stub"}, "stub-0", now_iso())

class SRMStub(Engine):
    modality = "srm"
    def analyze(self, inp):
        return EngineResult("srm", 0.5, 0.5, 0.0, {"note": "stub"}, "stub-0", now_iso())
```

This is exactly the pattern `deeptruth_pipeline/inferencers/stubs.py`
already uses — reuse it rather than reinventing it.

---

## 5. Module-by-module notes (your five)

### M3 — Unified API Gateway & Validation
- Fix the routing bug first: `GET/PATCH/DELETE /cases/{case_id}` must
  query `WHERE case_id = ?`, not `WHERE id = ?` (the frontend only
  ever sees the human-facing `CASE-XXXXXXXX` string).
- Add: media-hash computation on upload → Redis `GET cache:{hash}` →
  if hit, return cached `FusionResult` immediately (skip the whole
  pipeline, per STD-02). If miss, `POST` continues to M5.
- Add: rate limiting (`rate_limit:{ip}` in Redis, sliding window).
- Keep the multipart upload + Pydantic validation logic from
  `cases.py` — it's solid, just extend it.

### M4 — Smart De-multiplexer & Preprocessing
- Reuse `frame_extractor.py`'s OpenCV sampling as the fallback path.
- Add real audio-track extraction via ffmpeg (`-vn -ac 1 -ar 16000`,
  same command `deeptruth_pipeline/demux.py` already has — copy it).
- Add informative-frame scoring: rank frames by scene-change /motion
  score, keep top-K instead of uniform stride (report calls this IFS).
  This single change is what turns "1-2 FPS sampling" from a vague
  claim into an actual implemented FR (FR-2 under M4).
- Output: one audio WAV path + one keyframe directory, dispatched to
  M6 and (M7 + M8) respectively — both branches read from the same
  decode pass, matching the report's Fig. 15.

### M5 — Asynchronous Task Orchestration
- Redis-backed queue. Given the team's timeline, **Celery** is the
  pragmatic choice over raw Redis lists — you get retry/backoff for
  free instead of hand-rolling STD-01's exponential backoff.
- Worker pool dispatches M6 + M7 + M8 **in parallel** (they're
  independent per §4), collects all three `EngineResult`s, then calls
  M9 once all three are in (or timeout → partial fusion with a
  "missing engine" flag, per Fig. 19's timeout branch).
- Task states: `QUEUED → PROCESSING → COMPLETED/FAILED`, persisted to
  Postgres `analysis_tasks`, matching STD-01 exactly.

### M7 — Visual Forensics Engine
- **Fix the weight bug before anything else**: in the current
  `CHECKPOINTS` list, face-checkpoint weights are 0–100 while genvideo
  weights are 0–1, so genvideo is mathematically silenced in the
  average. Either rescale everything to one range, or better — pull in
  `deeptruth_pipeline/ensemble.py`'s `max(face_avg, genvideo)` policy
  with the face-frame-count trust gate, which is a real, already-built
  fix for this exact problem.
- Add GradCAM: hook the last ViViT attention/conv layer, produce a
  heatmap PNG per clip, put its path in `EngineResult.evidence`. This
  is FR7.3 in the report and currently doesn't exist anywhere.
- This module's *internal* checkpoint ensemble (face vs. genvideo) is
  a different fusion step from M9's cross-modal fusion — don't
  collapse them. M7 outputs one `fake_prob` for the whole visual
  modality; M9 never sees individual checkpoints.

### M9 — Multi-Modal Fusion Logic Layer
- Waits for `EngineResult`s from M6, M7, M8 (§4 makes this trivial —
  same shape regardless of who wrote the engine).
- Weighted fusion per the report's own sequence diagram (Fig. 19):
  `trust_score = 0.45·audio + 0.40·visual + 0.15·srm`, weights
  configurable via `AdminConfig` (don't hardcode — the report's class
  diagram already models this as admin-editable).
- Degraded-mode fusion when an engine is missing/stubbed (e.g. audio
  and SRM still return stub 0.5/confidence-0.0 results early on): use
  confidence-weighted fusion so a stub's 0.0 confidence contributes
  ~nothing, rather than dragging every real score toward 0.5. This
  also means you can wire M9 end-to-end and get sane results *before*
  M6/M8 are real — same trick M7's weight bug should have used.
- Output `FusionResult{trust_score, verdict, manipulation_type}` →
  Postgres `fusion_results` + Redis cache write (TTL 24h, per STD-02).

---

## 6. Postgres schema (adjusted from the report's ERD to match engine outputs)

```sql
-- one row per uploaded case (report's `cases` + `media_uploads` merged)
cases(id, case_id, title, media_type, status, file_url, file_size,
      user_id, created_at, updated_at)

-- one row per case, per task attempt (M5 owns this)
analysis_tasks(id, case_id, status, retry_count, created_at, completed_at, error_message)

-- one row per engine result (M6/M7/M8 all write here — same shape)
engine_results(id, task_id, modality, fake_prob, real_prob, confidence,
                evidence JSONB, model_version, created_at)

-- one row per fused verdict (M9 owns this)
fusion_results(id, task_id, trust_score, audio_weight, visual_weight,
               srm_weight, manipulation_type, verdict, fused_at)

admin_config(id, audio_weight, visual_weight, srm_weight,
             max_file_size_mb, rate_limit_per_min, maintenance_mode, updated_at)
```

`engine_results` being one generic table (rather than separate
`audio_results`/`visual_results` tables like the report's Fig. 21
class diagram) is the one deliberate deviation — it means M6 and M8
literally write to the same table your M7 code writes to, using the
same insert function, so there's zero schema coordination needed when
someone else's engine lands.

---

## 7. Redis key patterns

| Key | Type | Owner | Purpose |
|---|---|---|---|
| `cache:{media_hash}` | JSON | M3 | Cached `FusionResult`, TTL 24h |
| `task_queue` | Celery-managed | M5 | Pending analysis tasks |
| `rate_limit:{ip}` | Integer | M3 | Sliding-window request counter |
| `task:{task_id}:status` | String | M5 | Live status for polling clients |

---

## 8. Suggested build order for you

1. `engines/base.py` + both stubs (M6, M8) — unblocks everyone else
   immediately, takes under an hour.
2. M3 fixes (routing bug, cache lookup, rate limit) — small, isolated.
3. M4 (audio extraction + IFS scoring) — needed before M5 has anything
   real to dispatch.
4. M5 (Celery + Redis queue + worker dispatch) — wire it to call
   engines through the M4 output and the `Engine` interface.
5. M7 fixes (weight bug, GradCAM) — can happen in parallel with 3–4
   since it's self-contained.
6. M9 (fusion) — last, since it needs M5 dispatching and at least
   stub results from all three engines to test against.

Once M6/M8 land for real from teammates, nothing in M3/M4/M5/M9 should
need to change — that's the point of §4.

---

Say the word and I'll start on step 1 (`engines/base.py` + stubs) and
step 2 (M3 fixes) — those are the two that unblock the rest of the
team fastest.