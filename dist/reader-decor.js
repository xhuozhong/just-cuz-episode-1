(() => {
  'use strict';
  let scheduled = false, complete = false;
  function currentPageReady() {
    const hosts = Array.from(document.querySelectorAll('.panel-host')).filter(host => host.dataset.backgroundOnly !== 'true');
    return hosts.length > 0 && hosts.every(host => host.dataset.interactionState === 'ready'
      && host.dataset.anglePending !== 'true' && (host.dataset.renderMode !== 'frames'
        || Number(host.dataset.loadedFrames) === Number(host.dataset.totalFrames)));
  }
  function prepareDecor() {
    if (complete || scheduled || navigator.connection && navigator.connection.saveData) return;
    if (!currentPageReady()) return;
    scheduled = true;
    const paint = () => {
      scheduled = false;
      if (!currentPageReady()) return;
      complete = true;
      document.body.classList.add('reader-art-ready');
    };
    if (typeof requestIdleCallback === 'function') requestIdleCallback(paint, {timeout:1500});
    else setTimeout(paint, 300);
  }
  document.addEventListener('comic-panel-status', () => Promise.resolve().then(prepareDecor));
  prepareDecor();
})();
