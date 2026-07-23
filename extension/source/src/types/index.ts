export interface MediaAnalysisResult {
  taskId: string;
  mediaUrl: string;
  mediaHash: string;
  mediaType: 'VIDEO' | 'AUDIO' | 'IMAGE';
  status: 'QUEUED' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  trustScore?: number; // 0.0 to 1.0. High = Fake/Manipulated (>0.65), Low = Authentic (<0.35)
  verdict?: 'Authentic' | 'Suspicious' | 'FAKE';
  confidence?: number; // percentage e.g. 94.5
  explanation?: string;
  timestamp: number;
}

export interface ExtensionSettings {
  isEnabled: boolean;
  apiUrl: string;
  isSimulatedMode: boolean;
}

export interface RuntimeMessage {
  type: string;
  payload?: any;
}