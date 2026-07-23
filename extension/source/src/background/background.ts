import { MediaAnalysisResult } from '../types';

console.log('[Deep-Truth] Background Service Worker initiated');

// Cache polling task intervals locally
const activePollers = new Map<string, any>();

chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.get(['isEnabled', 'apiUrl', 'isSimulatedMode', 'scanHistory'], (res) => {
    chrome.storage.local.set({
      isEnabled: res.isEnabled !== undefined ? res.isEnabled : true,
      apiUrl: res.apiUrl || 'https://api.deep-truth.ai',
      isSimulatedMode: res.isSimulatedMode !== undefined ? res.isSimulatedMode : true,
      scanHistory: res.scanHistory || []
    });
  });
});

// Mock simulation engine for offline developer onboarding
const runSimulationPayload = (mediaUrl: string, mediaHash: string, mediaType: 'VIDEO' | 'AUDIO' | 'IMAGE'): MediaAnalysisResult => {
  // Generate beautiful randomized authentic/suspicious/fake classifications
  const rand = Math.random();
  let trustScore = 0.12;
  let verdict: 'Authentic' | 'Suspicious' | 'FAKE' = 'Authentic';
  let explanation = 'Perfect continuous biometric and lighting consistency. Noise matching indicates unified optical compression.';
  let confidence = Math.floor(95 + Math.random() * 4);

  if (rand > 0.65) {
    trustScore = 0.88;
    verdict = 'FAKE';
    explanation = 'Frequency domain analysis reveals artificial synthesizer modulation patterns. Eye blink coordination shows neural mismatch.';
    confidence = Math.floor(92 + Math.random() * 6);
  } else if (rand > 0.35) {
    trustScore = 0.49;
    verdict = 'Suspicious';
    explanation = 'Minor anomalies inside edge compression boundaries. Audio path presents localized frequency phase disparity.';
    confidence = Math.floor(75 + Math.random() * 12);
  }

  return {
    taskId: 'dt_sim_' + Math.random().toString(36).substring(2, 9),
    mediaUrl,
    mediaHash,
    mediaType,
    status: 'COMPLETED',
    trustScore,
    verdict,
    confidence,
    explanation,
    timestamp: Date.now()
  };
};

const initiateApiPolling = (
  taskId: string, 
  mediaUrl: string, 
  mediaHash: string, 
  mediaType: 'VIDEO' | 'AUDIO' | 'IMAGE', 
  apiUrl: string
) => {
  if (activePollers.has(taskId)) return;

  const pollInterval = setInterval(async () => {
    try {
      const targetEndpoint = `${apiUrl}/api/v1/task/${taskId}/status`;
      const response = await fetch(targetEndpoint);

      if (response.status === 429) {
        console.warn('[Deep-Truth] Server rate limiting matched. Will retry polling shortly.');
        return;
      }

      if (response.ok) {
        const data = await response.json();
        
        if (data.status === 'COMPLETED') {
          clearInterval(pollInterval);
          activePollers.delete(taskId);

          const result: MediaAnalysisResult = {
            taskId,
            mediaUrl,
            mediaHash,
            mediaType,
            status: 'COMPLETED',
            trustScore: data.trustScore, // float between 0.0 & 1.0
            verdict: data.verdict, // 'Authentic' | 'Suspicious' | 'FAKE'
            confidence: data.confidence || 88.4,
            explanation: data.explanation || 'Verified classification provided by forensic verification sequence.',
            timestamp: Date.now()
          };

          saveResultToHistory(result);
        } else if (data.status === 'FAILED') {
          clearInterval(pollInterval);
          activePollers.delete(taskId);
          console.error('[Deep-Truth] Backend reports forensic pipeline failure');
        }
      }
    } catch (err) {
      console.error('[Deep-Truth] Network anomaly during validation polling sequence', err);
    }
  }, 2000); // Polling loop query every 2 seconds

  activePollers.set(taskId, pollInterval);
};

const saveResultToHistory = (result: MediaAnalysisResult) => {
  chrome.storage.local.get(['scanHistory'], (res) => {
    const history = res.scanHistory || [];
    const updated = [result, ...history].slice(0, 50); // Store last 50 analyses securely
    chrome.storage.local.set({ scanHistory: updated }, () => {
      // Broadcast to tabs and popup
      chrome.runtime.sendMessage({ type: 'ANALYSIS_UPDATED', payload: result });
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          if (tab.id) {
            chrome.tabs.sendMessage(tab.id, { type: 'POLL_COMPLETE', payload: result }).catch(() => {});
          }
        });
      });
    });
  });
};

// Dispatch Request Interception Handler
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'START_ANALYSIS') {
    const { mediaUrl, mediaHash, mediaType } = message.payload;
    
    chrome.storage.local.get(['apiUrl', 'isSimulatedMode'], async (res) => {
      const isSimulated = res.isSimulatedMode !== false;
      const apiUrl = res.apiUrl || 'https://api.deep-truth.ai';

      if (isSimulated) {
        // Run simulator delay loop
        setTimeout(() => {
          const result = runSimulationPayload(mediaUrl, mediaHash, mediaType);
          saveResultToHistory(result);
        }, 1500);
        sendResponse({ success: true, simulated: true });
      } else {
        // Trigger live production ingestion pipeline
        try {
          const response = await fetch(`${apiUrl}/api/v1/analyze`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mediaUrl, mediaHash, mediaType })
          });

          if (response.status === 202) {
            const data = await response.json(); // { taskId, status: "QUEUED" }
            initiateApiPolling(data.taskId, mediaUrl, mediaHash, mediaType, apiUrl);
            sendResponse({ success: true, taskId: data.taskId });
          } else {
            sendResponse({ success: false, error: 'Ingestion node response mismatch' });
          }
        } catch (err: any) {
          console.error('[Deep-Truth] API ingest failure', err);
          sendResponse({ success: false, error: err.message });
        }
      }
    });

    return true; // Keeps sendResponse channel open for async feedback
  }
});

export {};