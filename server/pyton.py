from app.services.model_loader.detector import get_detector
d = get_detector()
print('Model loaded OK, device:', d.device)