console.log('[Deep-Truth] Active deepfake protection active on page');

const isContextValid = (): boolean => {
  return typeof chrome !== 'undefined' && chrome.runtime && !!chrome.runtime.id;
};

// Global map to avoid duplicate inject overlay bindings on target media nodes
const injectedElements = new Map<HTMLElement, HTMLElement>();
let observer: MutationObserver | null = null;
let scanInterval: NodeJS.Timeout | null = null;
let isScanningEnabled = true;

// Pre-defined protected streaming services list
const getIsDrmRestricted = (): boolean => {
  const host = window.location.hostname;
  return host.includes('netflix.com') || host.includes('spotify.com');
};

const hashMediaUrl = async (url: string): Promise<string> => {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(url);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } catch (err) {
    // Robust fallback
    return 'shafallback_' + Math.random().toString(36).substring(2, 15);
  }
};

const handleRequestAnalysis = async (
  element: HTMLElement,
  mediaUrl: string,
  mediaType: 'VIDEO' | 'AUDIO' | 'IMAGE',
  badge: HTMLElement,
  container: HTMLElement
) => {
  if (!isContextValid()) return;
  
  // Transition Badge to Yellow processing spinner
  badge.innerHTML = `
    <span class="flex items-center gap-1.5">
      <svg class="animate-spin h-3 w-3 text-amber-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
      <span class="font-bold tracking-wider">PROCESSING...</span>
    </span>
  `;
  badge.style.backgroundColor = 'rgba(245, 158, 11, 0.2)';
  badge.style.borderColor = '#f59e0b';
  container.style.border = '2.5px solid #f59e0b';

  const mediaHash = await hashMediaUrl(mediaUrl);

  chrome.runtime.sendMessage({
    type: 'START_ANALYSIS',
    payload: {
      mediaUrl,
      mediaHash,
      mediaType
    }
  }, (response) => {
    if (chrome.runtime.lastError) {
      console.warn('[Deep-Truth] Analysis failed', chrome.runtime.lastError.message);
      // Revert to ready on error
      resetBadge(badge, container);
      return;
    }
    
    // Polling is managed by service worker. Listen to update notifications
  });
};

const resetBadge = (badge: HTMLElement, container: HTMLElement) => {
  badge.innerHTML = '⚡ DEEP-TRUTH: VERIFY';
  badge.style.backgroundColor = 'rgba(99, 102, 241, 0.15)';
  badge.style.borderColor = '#6366f1';
  container.style.border = '2px dashed #6366f1';
};

const updateUIWithPayload = (badge: HTMLElement, container: HTMLElement, payload: any) => {
  const trustScore = payload.trustScore ?? 0;
  let label = 'VERIFIED AUTHENTIC';
  let badgeColor = '';
  let borderColor = '';
  let bgColor = '';

  if (trustScore < 0.35) {
    // Green Border / Badge: Authentic Content
    label = '🛡️ AUTHENTIC';
    badgeColor = '#10b981';
    borderColor = '#10b981';
    bgColor = 'rgba(16, 185, 129, 0.2)';
    container.style.border = '2.5px solid #10b981';
  } else if (trustScore <= 0.65) {
    // Yellow Border / Badge: Suspicious Content
    label = '⚠️ SUSPICIOUS';
    badgeColor = '#f59e0b';
    borderColor = '#f59e0b';
    bgColor = 'rgba(245, 158, 11, 0.2)';
    container.style.border = '2.5px solid #f59e0b';
  } else {
    // Red Border / Badge: Deepfake / Manipulated
    label = '🚨 DEEPFAKE DETECTED';
    badgeColor = '#f43f5e';
    borderColor = '#f43f5e';
    bgColor = 'rgba(244, 63, 94, 0.25)';
    container.style.border = '2.5px solid #f43f5e';
  }

  badge.innerHTML = `<span class="font-bold tracking-wider">${label} (${Math.round(trustScore * 100)}%)</span>`;
  badge.style.borderColor = borderColor;
  badge.style.backgroundColor = bgColor;
  badge.style.color = '#ffffff';
};

const injectForensicOverlay = (element: HTMLVideoElement | HTMLImageElement | HTMLAudioElement) => {
  if (injectedElements.has(element)) return;

  // Filter tiny decorative elements, icons, profile pics (less than 100x100px)
  const rect = element.getBoundingClientRect();
  if (element.tagName === 'IMG' && (rect.width < 100 || rect.height < 100)) {
    return;
  }

  // Create absolute positioning container anchor wrapper
  const container = document.createElement('div');
  container.className = 'deep-truth-container-wrapper';
  container.style.position = 'absolute';
  container.style.pointerEvents = 'none';
  container.style.boxSizing = 'border-box';
  container.style.zIndex = '99999';
  container.style.borderRadius = '6px';
  container.style.transition = 'all 0.3s ease';
  
  // Set default Verification border style
  container.style.border = '2px dashed #6366f1';

  // Construct top left float badge overlay UI
  const badge = document.createElement('div');
  badge.className = 'deep-truth-overlay-badge';
  badge.style.position = 'absolute';
  badge.style.top = '8px';
  badge.style.left = '8px';
  badge.style.pointerEvents = 'auto';
  badge.style.cursor = 'pointer';
  badge.style.backgroundColor = 'rgba(99, 102, 241, 0.85)';
  badge.style.backdropFilter = 'blur(4px)';
  badge.style.border = '1px solid #6366f1';
  badge.style.color = '#ffffff';
  badge.style.fontFamily = "'Space Grotesk', system-ui, sans-serif";
  badge.style.fontSize = '10px';
  badge.style.fontWeight = 'bold';
  badge.style.letterSpacing = '0.5px';
  badge.style.padding = '4px 8px';
  badge.style.borderRadius = '4px';
  badge.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
  badge.style.zIndex = '100000';
  badge.style.transition = 'all 0.2s ease';

  // Is DRM Restricted checking
  const isDrm = getIsDrmRestricted();

  if (isDrm) {
    badge.innerText = '🛡️ DRM RESTRICTED';
    badge.style.backgroundColor = 'rgba(148, 163, 184, 0.2)';
    badge.style.borderColor = '#94a3b8';
    badge.style.cursor = 'not-allowed';
    container.style.border = '1.5px solid #64748b';
  } else {
    badge.innerText = '⚡ VERIFY DEEP-TRUTH';
    
    // Add interactions
    badge.addEventListener('mouseenter', () => {
      badge.style.transform = 'scale(1.04)';
      badge.style.boxShadow = '0 4px 16px rgba(99, 102, 241, 0.4)';
    });

    badge.addEventListener('mouseleave', () => {
      badge.style.transform = 'scale(1)';
      badge.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
    });

    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      
      let mediaType: 'VIDEO' | 'AUDIO' | 'IMAGE' = 'IMAGE';
      if (element.tagName === 'VIDEO') mediaType = 'VIDEO';
      if (element.tagName === 'AUDIO') mediaType = 'AUDIO';
      
      // Extract DOM source URL securely
      const src = (element as HTMLImageElement).src || (element as HTMLVideoElement).currentSrc || element.getAttribute('src') || '';
      if (src) {
        handleRequestAnalysis(element, src, mediaType, badge, container);
      }
    });
  }

  // Inject Overlay container next to the element, matching size and position
  container.appendChild(badge);
  
  // Attach position tracker mechanism
  const updatePosition = () => {
    if (!element.isConnected) {
      container.remove();
      injectedElements.delete(element);
      return;
    }
    const bounds = element.getBoundingClientRect();
    const offsetParent = element.offsetParent;
    
    if (offsetParent) {
      const parentBounds = offsetParent.getBoundingClientRect();
      container.style.left = `${bounds.left - parentBounds.left + offsetParent.scrollLeft}px`;
      container.style.top = `${bounds.top - parentBounds.top + offsetParent.scrollTop}px`;
    } else {
      container.style.left = `${bounds.left + window.scrollX}px`;
      container.style.top = `${bounds.top + window.scrollY}px`;
    }
    container.style.width = `${bounds.width}px`;
    container.style.height = `${bounds.height}px`;
  };

  // Run position calculation
  updatePosition();
  
  // Append container to document or element parent securely
  const parent = element.parentElement || document.body;
  parent.appendChild(container);

  // Cache details
  injectedElements.set(element, container);

  // Monitor element dimension changes via ResizeObserver
  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => {
      if (isContextValid()) {
        updatePosition();
      }
    });
    ro.observe(element);
  }
};

const scanDOMForMedia = () => {
  if (!isScanningEnabled) {
    clearAllOverlays();
    return;
  }

  const videos = document.getElementsByTagName('video');
  const images = document.getElementsByTagName('img');
  const audios = document.getElementsByTagName('audio');

  Array.from(videos).forEach(video => injectForensicOverlay(video));
  Array.from(images).forEach(img => injectForensicOverlay(img));
  Array.from(audios).forEach(audio => injectForensicOverlay(audio));
};

const clearAllOverlays = () => {
  injectedElements.forEach((container) => {
    try {
      container.remove();
    } catch {}
  });
  injectedElements.clear();
};

const init = () => {
  if (!isContextValid()) return;

  // Retrieve current active status setting
  chrome.storage.local.get(['isEnabled'], (res) => {
    isScanningEnabled = res.isEnabled !== undefined ? res.isEnabled : true;
    if (isScanningEnabled) {
      scanDOMForMedia();
      
      // Start dynamic DOM mutation observation
      observer = new MutationObserver(() => {
        if (isContextValid()) scanDOMForMedia();
      });
      observer.observe(document.body, { childList: true, subtree: true });

      // Fallback polling for layout updates
      scanInterval = setInterval(() => {
        if (isContextValid()) scanDOMForMedia();
      }, 3000);
    }
  });

  // Listen for configuration toggles in real-time
  chrome.runtime.onMessage.addListener((msg) => {
    if (!isContextValid()) return;
    
    if (msg.type === 'TOGGLE_SCANNING') {
      isScanningEnabled = msg.enabled;
      if (isScanningEnabled) {
        scanDOMForMedia();
      } else {
        clearAllOverlays();
        if (observer) observer.disconnect();
        if (scanInterval) clearInterval(scanInterval);
      }
    } else if (msg.type === 'POLL_COMPLETE') {
      // Find the specific DOM node being updated
      const payload = msg.payload;
      injectedElements.forEach((container, el) => {
        const src = (el as HTMLImageElement).src || (el as HTMLVideoElement).currentSrc || el.getAttribute('src') || '';
        if (src === payload.mediaUrl) {
          const badge = container.querySelector('.deep-truth-overlay-badge') as HTMLElement;
          if (badge) {
            updateUIWithPayload(badge, container, payload);
          }
        }
      });
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export {};