# DeepTruth pipeline (30% slice)

Modular preprocessing + inference for the DeepTruth deepfake detection system.
Currently wires up the **video** modality end-to-end. Audio and image are
stubbed — the interfaces are in place, swap in real code once those models
are trained.

## Layout

```
deeptruth_pipeline/
├── config.py              paths and constants (env-var overridable)
├── train_bridge.py        one-time import of deeptruth_train.py
├── storage.py             cache layout: <CACHE>/<media_key>/{video,audio,image}/
├── demux.py               ffprobe + ffmpeg audio extraction
├── ensemble.py            video ensemble logic (MIN_FACE_FRAMES, confidence)
├── registry.py            binds preprocessor + inferencer per modality
├── pipeline.py            top-level Pipeline.analyze()
├── task_queue.py          Task, TaskQueue, InMemoryQueue
├── cli.py                 command-line entrypoint
├── preprocessors/
│   ├── base.py            abstract Preprocessor
│   ├── video.py           face + full-frame branches (MTCNN, resize)
│   └── stubs.py           AudioPreprocessor (real wav extract), ImagePreprocessor
└── inferencers/
    ├── base.py            abstract Inferencer + InferenceResult
    ├── video.py           ViViT + LoRA ensemble
    └── stubs.py           AudioInferencer / ImageInferencer placeholders
```

## Environment variables

| Var | Default | What |
|---|---|---|
| `DEEPTRUTH_ROOT` | `/data/deeptruth` | Root dir |
| `DEEPTRUTH_CHECKPOINTS` | `$ROOT/checkpoints` | Where `*_lora_best/` live |
| `DEEPTRUTH_CACHE` | `$ROOT/preprocessed` | Preprocessed-artifact cache |
| `DEEPTRUTH_LOGS` | `$ROOT/logs` | Log files |
| `DEEPTRUTH_TRAIN_PIPELINE` | `~/deeptruth_train.py` | Training script (reused for decode/crop/build/load) |

## Run from the command line

```bash
# single video
python -m deeptruth_pipeline.cli /path/to/clip.mp4

# folder of mixed media
python -m deeptruth_pipeline.cli /videos/ --threshold 0.5

# force re-preprocessing (ignore cache)
python -m deeptruth_pipeline.cli /videos/ --force

# CPU-only run (auto-detects CUDA otherwise)
python -m deeptruth_pipeline.cli /videos/ --device cpu

# route through the task queue with N worker threads
python -m deeptruth_pipeline.cli /videos/ --queue-workers 2

# save full results
python -m deeptruth_pipeline.cli /videos/ --json out.json
```

## Use as a library

```python
from deeptruth_pipeline import Pipeline

pipeline = Pipeline()                # builds default registry
result = pipeline.analyze("clip.mp4", threshold=0.5)

print(result.media_key)
print(result.inferences["video"]["verdict"])      # FAKE / REAL / UNKNOWN
print(result.inferences["video"]["trust_score"])  # P(fake) in [0,1]
print(result.inferences["video"]["confidence"])   # 0..1, model agreement
print(result.inferences["video"]["per_model"])    # {checkpoint: P(fake)}
```

## Use through the task queue

```python
from deeptruth_pipeline import Pipeline, Task, make_queue

pipeline = Pipeline()
queue = make_queue(pipeline, async_workers=2)     # 0 = synchronous

tid = queue.submit(Task(media_path="clip.mp4",
                        options={"threshold": 0.5}))
task = queue.get(tid)
print(task.status, task.result)
```

`InMemoryQueue` is the demo backend. The `TaskQueue` interface
(`submit`, `get`) is the contract — drop in a Celery- or Redis-backed
implementation later without touching the rest of the codebase.

## Cache layout

```
<DEEPTRUTH_CACHE>/<media_key>/
    meta.json                    source path, kind, completed map
    video/
        face_frames.npy          (16, 224, 224, 3) uint8, MTCNN crop
        full_frames.npy          (16, 224, 224, 3) uint8, center crop
        stats.json               n_face_detected, has_face_branch, ...
    audio/
        audio_16k.wav            mono PCM 16 kHz
        stats.json
    image/
        image_224.npy            uint8 (224, 224, 3)
        stats.json
```

`media_key` = `mk_<sha256(file_bytes)[:32]>`. The same file uploaded twice
deduplicates automatically. Pass `force=True` to re-run preprocessing.

## How it routes media

```
   file in
      │
      ▼
   probe()                   ← ffprobe + extension fallback
      │
      ├── kind=video → VideoPreprocessor → VideoInferencer
      ├── kind=audio → AudioPreprocessor (wav extract) → AudioInferencer (stub)
      └── kind=image → ImagePreprocessor (resize)      → ImageInferencer (stub)
```

When the audio model is ready, swap in your trained inferencer:

```python
from deeptruth_pipeline import Registry, Pipeline
from my_audio_pkg import WavLMInferencer

registry = Registry()
registry.replace_inferencer("audio", WavLMInferencer())
pipeline = Pipeline(registry=registry)
```

For video files with audio tracks to be analyzed by both modalities, also
edit `Pipeline._default_modalities` to return `["video", "audio"]` for
`info.kind == "video" and info.has_audio`. The cache, queue, and result
shape already support multi-modality output.

## Video ensemble policy

```
face_avg  = mean P(fake) across face checkpoints (celebdf_v2, ffpp, dfdc,
            wilddeepfake, deeperforensics)
genvideo  = P(fake) from the genvideo checkpoint
trusted   = (n_face_detected >= 6) and face_avg is not None

if trusted and genvideo present:  ensemble = max(face_avg, genvideo)
elif trusted:                     ensemble = face_avg
elif genvideo present:            ensemble = genvideo
else:                             ensemble = NaN

verdict   = FAKE if ensemble >= threshold else REAL  (UNKNOWN if NaN)
confidence = max(0, 1 - 2*std(per_checkpoint_scores))    # 0..1
```

`MIN_FACE_FRAMES = 6` (was 8). Lowered after the syntx_ai clip with 7/16
face frames and unanimous face-checkpoint scream-FAKE was incorrectly
overruled by genvideo's confident REAL.

`confidence` is independent of verdict: low confidence means models
disagreed, flag for human review.

## Performance

- GPU autodetected; falls back to CPU.
- FP16 autocast on CUDA (matches training-time precision).
- Loaded checkpoints stay in GPU memory across `predict()` calls
  (`keep_models_loaded=True` by default). Call `inferencer.unload()` to
  free. Set `keep_models_loaded=False` to unload after each call (lower
  memory, slower).
- A single video decode produces both face and full-frame branches.
- Preprocessed artifacts are cached and skipped on re-run.

## Dependencies

```
torch  transformers  numpy  pillow  facenet-pytorch (or whatever the training
script uses for MTCNN)  ffmpeg  ffprobe
```

Same versions as the training environment. The bridge imports
`deeptruth_train.py` so anything available there is available here.
