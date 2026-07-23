from statistics import mean

from app.services.preprocess.frame_extractor import (
    extract_frames,
)

from app.services.inference.predictor import (
    predict_frame,
)


def run_video_pipeline(video_path: str):

    frames = extract_frames(video_path)

    if not frames:
        return {
            "prediction": "NO_FRAMES",
            "confidence": 0
        }

    predictions = []

    for frame in frames[:10]:

        result = predict_frame(frame)

        predictions.append(result)

    fake_scores = []

    for item in predictions:

        if item["label"] == "FAKE":
            fake_scores.append(item["confidence"])

    average_fake_score = (
        mean(fake_scores)
        if fake_scores
        else 0
    )

    final_label = (
        "FAKE"
        if average_fake_score > 50
        else "REAL"
    )

    return {
        "prediction": final_label,
        "confidence": round(average_fake_score, 2),
        "frames_analyzed": len(predictions)
    }