(() => {
  'use strict';
  // Only reviewed deployment origins in the retained configuration can receive
  // public frame requests. Neither URL parameters nor remote replies add hosts.
  const config = window.COMIC_DELIVERY_CONFIG;
  const sha = value => typeof value === 'string' && /^[a-f0-9]{64}$/i.test(value);
  const relative = value => typeof value === 'string' && !/[:?#%\\\u0000-\u0020]/.test(value)
    && value.split('/').every(part => part && part !== '.' && part !== '..');
  const local = new URL('.', location.href).href;
  const raw = url => url.hostname === 'raw.githubusercontent.com'
    && /^\/xhuozhong\/just-cuz-episode-1\/[a-f0-9]{40}\/dist\/$/.test(url.pathname);
  const bases = [local];
  if (config && config.schemaVersion === 1 && Array.isArray(config.mirrors)) for (const value of config.mirrors) {
    try {
      const url = new URL(value);
      if (url.protocol === 'https:' && url.username === '' && url.password === '' && !url.search && !url.hash
        && (url.pathname === '/' && url.hostname.endsWith('.workers.dev') || raw(url)) && !bases.includes(url.href)) bases.push(url.href);
    } catch (_) {}
  }
  const disabled = new Set(), responses = new WeakMap();
  const started = performance.now();
  let selected = local, settled = bases.length === 1;
  const cancelled = () => Object.assign(new Error('Asset request cancelled'), {name:'AbortError'});
  const stopBody = response => { try { if (response.body) void response.body.cancel().catch(() => {}); } catch (_) {} };
  async function probe(base, controller) {
    const timer = setTimeout(() => controller.abort(), 6000);
    try {
      const response = await fetch(new URL(config.probe.source + '?sha256=' + config.probe.sha256, base).href,
        {signal:controller.signal, cache:'no-store', credentials:'omit', mode:'cors'});
      if (!response.ok) { stopBody(response); throw new Error('Delivery probe HTTP error'); }
      const bytes = await response.arrayBuffer();
      if (bytes.byteLength !== config.probe.byteLength) throw new Error('Delivery probe size mismatch');
      const digest = await window.crypto.subtle.digest('SHA-256', bytes);
      const actual = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2,'0')).join('');
      if (actual !== config.probe.sha256) throw new Error('Delivery probe hash mismatch');
      return base;
    } finally { clearTimeout(timer); }
  }
  const canProbe = bases.length > 1 && config && config.probe && relative(config.probe.source)
    && config.probe.source === 'delivery-probe.bin' && config.probe.byteLength === 16384 && sha(config.probe.sha256)
    && window.crypto && window.crypto.subtle && typeof window.crypto.subtle.digest === 'function';
  const ready = canProbe ? new Promise(resolve => {
    const controllers = bases.map(() => new AbortController());
    let pending = bases.length, done = false;
    bases.forEach((base, index) => {
      probe(base, controllers[index]).then(winner => {
        if (done) return;
        done = true; selected = winner; settled = true;
        controllers.forEach((controller, other) => { if (other !== index) controller.abort(); });
        resolve();
      }).catch(() => {
        if (--pending === 0 && !done) { settled = true; resolve(); }
      });
    });
  }) : Promise.resolve().then(() => { settled = true; });
  async function requestFrom(base, source, checksum, init) {
    const controller = new AbortController(), signal = init.signal;
    if (signal && signal.aborted) throw cancelled();
    const abort = () => controller.abort();
    if (signal) signal.addEventListener('abort', abort, {once:true});
    // This timeout covers connection/headers only. Once streaming starts, slow
    // valid packets retain their existing lifecycle and caller cancellation.
    const timer = setTimeout(abort, 8000);
    try {
      const path = base === local || raw(new URL(base)) ? source : 'packets/' + checksum + '.orbf';
      const response = await fetch(new URL(path + '?sha256=' + checksum, base).href,
        {...init, signal:controller.signal, mode:'cors', credentials:'omit'});
      if (!response.ok) { stopBody(response); throw new Error('Asset delivery HTTP ' + response.status); }
      responses.set(response, base);
      return response;
    } catch (error) {
      if (signal) signal.removeEventListener('abort', abort);
      throw error;
    } finally { clearTimeout(timer); }
  }
  async function fetchAsset(source, checksum, init = {}) {
    if (!relative(source) || !/^(?:preview-packs|frame-packs)\/.+\.orbf$/.test(source) || !sha(checksum)) throw new Error('Invalid bound asset request');
    if (init.signal && init.signal.aborted) throw cancelled();
    if (!settled) {
      const remaining = Math.max(0, 1200 - (performance.now() - started));
      if (remaining) {
        let timer;
        await Promise.race([ready, new Promise(resolve => { timer = setTimeout(resolve, remaining); })]);
        clearTimeout(timer);
      }
    }
    const order = [...new Set([selected, local, ...bases])].filter(base => !disabled.has(base) || base === local);
    let last;
    for (const base of order) {
      if (init.signal && init.signal.aborted) throw cancelled();
      try { return await requestFrom(base, source, checksum.toLowerCase(), init); }
      catch (error) {
        if (init.signal && init.signal.aborted) throw cancelled();
        last = error;
        if (base !== local) { disabled.add(base); if (selected === base) selected = local; }
      }
    }
    throw last || new Error('No asset delivery route available');
  }
  function markFailed(response) {
    const base = responses.get(response);
    if (base && base !== local) { disabled.add(base); if (selected === base) selected = local; }
  }
  window.ComicAssetDelivery = Object.freeze({fetch:fetchAsset, markFailed,
    get state() { return Object.freeze({selected, settled, candidateCount:bases.length, disabledCount:disabled.size}); }});
})();
