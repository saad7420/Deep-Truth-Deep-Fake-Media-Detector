import React, { useState, useEffect } from 'react';
import './Popup.css';

interface MediaAnalysisResult {
  taskId: string;
  mediaUrl: string;
  mediaHash: string;
  mediaType: 'VIDEO' | 'AUDIO' | 'IMAGE';
  status: 'QUEUED' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  trustScore?: number;
  verdict?: 'Authentic' | 'Suspicious' | 'FAKE';
  confidence?: number;
  explanation?: string;
  timestamp: number;
}

interface ExtensionSettings {
  isEnabled: boolean;
  apiUrl: string;
  isSimulatedMode: boolean;
}

const Popup: React.FC = () => {
  const [settings, setSettings] = useState<ExtensionSettings>({
    isEnabled: true,
    apiUrl: 'https://api.deep-truth.ai',
    isSimulatedMode: true,
  });

  const [scanHistory, setScanHistory] = useState<MediaAnalysisResult[]>([]);
  const [activeTabUrl, setActiveTabUrl] = useState<string>('');
  const [customKey, setCustomKey] = useState<string>('');
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');

  useEffect(() => {
    // Fetch state from extension local storage
    chrome.storage.local.get(['isEnabled', 'apiUrl', 'isSimulatedMode', 'scanHistory'], (res) => {
      setSettings({
        isEnabled: res.isEnabled !== undefined ? res.isEnabled : true,
        apiUrl: res.apiUrl || 'https://api.deep-truth.ai',
        isSimulatedMode: res.isSimulatedMode !== undefined ? res.isSimulatedMode : true,
      });
      if (res.scanHistory) {
        setScanHistory(res.scanHistory);
      }
    });

    // Get current tab URL to display relevant details
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.url) {
        setActiveTabUrl(tabs[0].url);
      }
    });

    // Listen for real-time background results to refresh history feed
    const handleMessage = (msg: any) => {
      if (msg.type === 'ANALYSIS_UPDATED' || msg.type === 'STATE_CHANGE') {
        chrome.storage.local.get(['scanHistory'], (res) => {
          if (res.scanHistory) {
            setScanHistory(res.scanHistory);
          }
        });
      }
    };

    chrome.runtime.onMessage.addListener(handleMessage);
    return () => chrome.runtime.onMessage.removeListener(handleMessage);
  }, []);

  const togglePower = () => {
    const nextState = !settings.isEnabled;
    const newSettings = { ...settings, isEnabled: nextState };
    setSettings(newSettings);
    chrome.storage.local.set({ isEnabled: nextState }, () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          chrome.tabs.sendMessage(tabs[0].id, { type: 'TOGGLE_SCANNING', enabled: nextState }).catch(() => {});
        }
      });
    });
  };

  const saveSettings = () => {
    chrome.storage.local.set({
      apiUrl: settings.apiUrl,
      isSimulatedMode: settings.isSimulatedMode,
    }, () => {
      setStatusMessage('Settings updated successfully!');
      setTimeout(() => setStatusMessage(''), 3000);
    });
  };

  const clearHistory = () => {
    chrome.storage.local.set({ scanHistory: [] }, () => {
      setScanHistory([]);
      setStatusMessage('History cleared.');
      setTimeout(() => setStatusMessage(''), 2500);
    });
  };

  const getVerdictBadgeStyles = (verdict?: string) => {
    switch (verdict) {
      case 'Authentic':
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30';
      case 'Suspicious':
        return 'bg-amber-500/10 text-amber-400 border border-amber-500/30';
      case 'FAKE':
        return 'bg-rose-500/10 text-rose-400 border border-rose-500/30';
      default:
        return 'bg-slate-800 text-slate-400 border border-slate-700';
    }
  };

  const getVerdictLabel = (verdict?: string) => {
    if (!verdict) return 'UNKNOWN';
    if (verdict === 'FAKE') return 'MANIPULATED / FAKE';
    return verdict.toUpperCase();
  };

  const getPercentageColor = (score?: number) => {
    if (score === undefined) return 'text-slate-400';
    if (score < 0.35) return 'text-emerald-400';
    if (score <= 0.65) return 'text-amber-400';
    return 'text-rose-400';
  };

  const getScoreDescription = (score?: number) => {
    if (score === undefined) return 'Unknown';
    if (score < 0.35) return 'Clear / Low Risk';
    if (score <= 0.65) return 'Anomalous Patterns Detected';
    return 'Critical Deepfake Probability';
  };

  // Determine current active page status
  const getPageDomainName = (urlStr: string) => {
    try {
      const hostname = new URL(urlStr).hostname;
      return hostname.replace('www.', '');
    } catch {
      return '';
    }
  };

  const pageDomain = getPageDomainName(activeTabUrl);
  const isSupportedDomain = ['twitter.com', 'x.com', 'instagram.com', 'youtube.com'].some(domain => pageDomain.includes(domain));
  const isProtectedDomain = ['netflix.com', 'spotify.com'].some(domain => pageDomain.includes(domain));

  return (
    <div className="popup-container bg-slate-950 text-slate-100 flex flex-col min-h-[550px] relative select-none">
      
      {/* HEADER SECTION */}
      <header className="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className={`w-3 h-3 rounded-full ${settings.isEnabled ? 'bg-indigo-500 animate-ping absolute' : ''}`}></div>
            <div className={`w-3 h-3 rounded-full relative z-10 ${settings.isEnabled ? 'bg-indigo-500' : 'bg-slate-600'}`}></div>
          </div>
          <div>
            <h1 className="text-sm font-bold uppercase tracking-wider text-white">Deep-Truth</h1>
            <p className="text-[10px] text-slate-400 font-mono">ACTIVE SECURITY v1.0.0</p>
          </div>
        </div>

        {/* Master ON/OFF Switch */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold font-mono tracking-tighter text-slate-400">
            {settings.isEnabled ? 'GUARD ACTIVE' : 'SUSPENDED'}
          </span>
          <button 
            onClick={togglePower}
            className={`w-12 h-6 rounded-full transition-all duration-300 relative ${settings.isEnabled ? 'bg-indigo-600 shadow-indigo-500/20' : 'bg-slate-800'}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-md absolute top-0.5 transition-all duration-300 ${settings.isEnabled ? 'left-6' : 'left-1'}`}></div>
          </button>
        </div>
      </header>

      {/* CORE CONTROL AREA */}
      <main className="flex-1 p-4 overflow-y-auto space-y-4">
        
        {/* Connection status and settings toggle */}
        <div className="flex items-center justify-between bg-slate-900 p-2.5 rounded-lg border border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs text-slate-300 font-mono">
              {settings.isSimulatedMode ? 'Simulator Active' : 'API Node Connected'}
            </span>
          </div>
          <button 
            onClick={() => setShowConfig(!showConfig)}
            className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-mono transition-colors"
          >
            {showConfig ? 'Close Settings' : 'Settings ⚙️'}
          </button>
        </div>

        {/* SETTINGS PANEL (CONDITIONAL) */}
        {showConfig && (
          <div className="bg-slate-900 border border-indigo-500/20 rounded-lg p-3 space-y-3 animate-fadeIn">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Backend API URL</label>
              <input 
                type="text" 
                value={settings.apiUrl}
                onChange={(e) => setSettings({ ...settings, apiUrl: e.target.value })}
                className="w-full text-xs bg-slate-950 border border-slate-800 p-2 rounded text-slate-100 font-mono focus:border-indigo-500 focus:outline-none"
                placeholder="https://api.deep-truth.ai"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-slate-200">Simulation Engine</span>
                <span className="text-[9px] text-slate-400">Test verification patterns mock-up</span>
              </div>
              <input 
                type="checkbox" 
                checked={settings.isSimulatedMode}
                onChange={(e) => setSettings({ ...settings, isSimulatedMode: e.target.checked })}
                className="w-4 h-4 text-indigo-600 bg-slate-950 border-slate-800 rounded focus:ring-indigo-500"
              />
            </div>

            <div className="flex justify-between gap-2 pt-2">
              <button 
                onClick={clearHistory}
                className="flex-1 py-1 px-2 border border-rose-500/20 text-rose-400 text-xs rounded hover:bg-rose-500/5 transition-all font-mono"
              >
                Clear History
              </button>
              <button 
                onClick={saveSettings}
                className="flex-1 py-1 px-2 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-500 transition-all font-mono font-bold"
              >
                Save Config
              </button>
            </div>
            {statusMessage && (
              <div className="text-[10px] text-emerald-400 font-mono text-center">{statusMessage}</div>
            )}
          </div>
        )}

        {/* SCANNER CONTEXT STATUS */}
        <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800/80 flex items-start justify-between">
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Current DOM Watcher</div>
            <div className="text-xs font-bold text-slate-200 truncate max-w-[200px]" title={activeTabUrl}>
              {pageDomain ? pageDomain : 'No Active Browser Tab'}
            </div>
          </div>
          <div>
            {isProtectedDomain ? (
              <span className="px-1.5 py-0.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 rounded text-[9px] font-bold font-mono">
                DRM RESTRICTED
              </span>
            ) : isSupportedDomain ? (
              <span className="px-1.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded text-[9px] font-bold font-mono">
                MONITORED
              </span>
            ) : (
              <span className="px-1.5 py-0.5 bg-slate-800 text-slate-400 border border-slate-700 rounded text-[9px] font-mono">
                PASSIVE SCAN
              </span>
            )}
          </div>
        </div>

        {/* LATEST SCAN REPORT HEADER */}
        {scanHistory.length > 0 ? (
          <div className="space-y-3">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono border-b border-slate-800 pb-1">
              Active Session Inspection
            </div>

            {/* MAIN CARD: MOST RECENT VERIFICATION */}
            {(() => {
              const latest = scanHistory[0];
              const scorePercent = latest.trustScore !== undefined ? Math.round(latest.trustScore * 100) : 0;
              return (
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-4 shadow-xl space-y-3 relative overflow-hidden">
                  
                  {/* Subtle decorative background scanning line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse" />
                  
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[9px] px-1.5 py-0.5 bg-slate-800 text-slate-300 font-mono rounded">
                        {latest.mediaType} RESOURCE
                      </span>
                      <h3 className="text-xs font-semibold text-slate-300 mt-1.5 font-mono truncate max-w-[210px]" title={latest.mediaHash}>
                        SHA256: {latest.mediaHash.substring(0, 16)}...
                      </h3>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-bold font-mono ${getVerdictBadgeStyles(latest.verdict)}`}>
                      {getVerdictLabel(latest.verdict)}
                    </div>
                  </div>

                  {latest.status === 'COMPLETED' ? (
                    <div className="grid grid-cols-2 gap-3 py-1 border-t border-b border-slate-800/80">
                      <div>
                        <div className="text-[10px] text-slate-500 font-mono uppercase">Trust Deviation</div>
                        <div className={`text-xl font-bold font-mono ${getPercentageColor(latest.trustScore)}`}>
                          {scorePercent}%
                        </div>
                        <div className="text-[9px] text-slate-400">{getScoreDescription(latest.trustScore)}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 font-mono uppercase">Confidence AI</div>
                        <div className="text-xl font-bold font-mono text-indigo-400">
                          {latest.confidence ? `${latest.confidence}%` : 'N/A'}
                        </div>
                        <div className="text-[9px] text-slate-400">Forensic confidence</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 py-4">
                      <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xs text-slate-400 font-mono">Awaiting polling sequence...</span>
                    </div>
                  )}

                  {latest.explanation && (
                    <p className="text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded border border-slate-800/40 font-mono leading-relaxed">
                      {latest.explanation}
                    </p>
                  )}

                  {latest.status === 'COMPLETED' && (
                    <a
                      href={`https://deep-truth.example.com/reports/${latest.taskId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-center rounded-lg text-xs font-bold font-mono tracking-wider transition-all shadow-md hover:shadow-indigo-500/20 active:scale-[0.98]"
                    >
                      VIEW FULL FORENSIC REPORT ↗
                    </a>
                  )}
                </div>
              );
            })()}

            {/* SCANNING TIMELINE LIST */}
            {scanHistory.length > 1 && (
              <div className="space-y-2 pt-2">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                  Analysis Timeline History
                </div>
                <div className="max-h-[140px] overflow-y-auto space-y-1.5 pr-1 border-l border-slate-800 pl-2">
                  {scanHistory.slice(1).map((item, index) => {
                    const pct = item.trustScore !== undefined ? Math.round(item.trustScore * 100) : 0;
                    return (
                      <div key={index} className="flex items-center justify-between text-xs py-1.5 px-2 bg-slate-900/40 rounded border border-slate-800 hover:border-slate-700 transition-all">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            item.verdict === 'Authentic' ? 'bg-emerald-400' :
                            item.verdict === 'Suspicious' ? 'bg-amber-400' : 'bg-rose-400'
                          }`}></span>
                          <span className="font-mono text-slate-400 uppercase text-[10px]">{item.mediaType}</span>
                          <span className="font-mono text-slate-200 truncate max-w-[120px]">{item.mediaHash.slice(0, 12)}</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono">
                          <span className={`${getPercentageColor(item.trustScore)} font-bold`}>{pct}%</span>
                          <span className="text-[10px] text-slate-500">
                            {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* EMPTY SCAN STATE */
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-dashed border-slate-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-300">Passive Defense Active</h3>
              <p className="text-xs text-slate-500 max-w-[280px] mt-1 mx-auto leading-relaxed">
                Deep-Truth is continuously scanning the background DOM for media feeds on social networks. Direct clicks on verification badges on-page will surface analytics here.
              </p>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER CO-ORDINATOR STATUS */}
      <footer className="p-3 border-t border-slate-900 bg-slate-950 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <div>
          SHA-256 CONTEXT ENCRYPTED
        </div>
        <div>
          POLICIES OK
        </div>
      </footer>
    </div>
  );
};

export default Popup;