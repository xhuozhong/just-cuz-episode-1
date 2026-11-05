(() => {
  'use strict';
  // Only reviewed deployment origins in the retained configuration can receive
  // public frame requests. Neither URL parameters nor remote replies add hosts.
  const config = window.COMIC_DELIVERY_CONFIG;
  const sha = value => typeof value === 'string' && /^[a-f0-9]{64}$/i.test(value);
  const relative = value => typeof value === 'string' && !/[:?#%\\\u0000-\u0020]/.test(value)
    && value.split('/').every(part => part && part !== '.' && part !== '..');
  const externalHd = !!(config && config.schemaVersion === 1 && config.externalHd === true);
  const local = new URL('.', location.href).href;
  const raw = url => url.hostname === 'raw.githubusercontent.com'
    && /^\/xhuozhong\/just-cuz-episode-1\/[a-f0-9]{40}\/dist\/(?:collection\/)?$/.test(url.pathname);
  const bases = [local];
  if (config && config.schemaVersion === 1 && Array.isArray(config.mirrors)) for (const value of config.mirrors) {
    try {
      const url = new URL(value);
      if (url.protocol === 'https:' && url.username === '' && url.password === '' && !url.search && !url.hash
        && (url.pathname === '/' && url.hostname.endsWith('.workers.dev') || raw(url)) && !bases.includes(url.href)) bases.push(url.href);
    } catch (_) {}
  }
  // Until a bounded measurement succeeds, preserve the published GitHub route.
  // Small previews never wait for route selection or trigger probes.
  const externalBases = bases.filter(base => base !== local)
    .sort((a, b) => Number(raw(new URL(b))) - Number(raw(new URL(a))));
  const disabled = new Set(), responses = new WeakMap();
  const sampled = new Set(), transferStats = new Map(), packetRoutes = new Map();
  const routeCandidates = externalHd ? externalBases : bases;
  let selected = externalHd ? (externalBases[0] || null) : local;
  let settled = routeCandidates.length <= 1, started = 0, routing = null, generation = 0;
  let probeControllers = new Map(), finishRouting = null;
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
  const canProbe = routeCandidates.length > 1 && config && config.probe && relative(config.probe.source)
    && config.probe.source === 'delivery-probe.bin' && config.probe.byteLength === 16384 && sha(config.probe.sha256)
    && window.crypto && window.crypto.subtle && typeof window.crypto.subtle.digest === 'function';
  function beginRouting() {
    if (routing) return routing;
    if (!canProbe) { settled = true; return Promise.resolve(); }
    const candidates = routeCandidates.filter(base => !disabled.has(base)).slice(0, 4);
    if (candidates.length < 2) { settled = true; return Promise.resolve(); }
    started = performance.now(); settled = false;
    const epoch = ++generation, controllers = new Map();
    probeControllers = controllers;
    routing = new Promise(resolve => {
      let pending = candidates.length, done = false;
      const finish = () => {
        if (done) return;
        done = true;
        for (const controller of controllers.values()) controller.abort();
        if (epoch === generation) { settled = true; finishRouting = null; }
        resolve();
      };
      finishRouting = finish;
      for (const base of candidates) {
        const controller = new AbortController(); controllers.set(base, controller);
        probe(base, controller).then(winner => {
          if (done || epoch !== generation) return;
          if (disabled.has(winner)) { if (--pending === 0) finish(); return; }
          selected = winner;
          finish();
        }).catch(() => { if (--pending === 0) finish(); });
      }
    });
    return routing;
  }
  if (!externalHd) void beginRouting();
  async function waitForRouting(signal) {
    const ready = beginRouting();
    if (settled) return;
    const remaining = Math.max(0, 1200 - (performance.now() - started));
    if (!remaining) return;
    let timer, abort;
    try {
      await Promise.race([ready, new Promise(resolve => {
        timer = setTimeout(resolve, remaining);
        abort = resolve;
        if (signal) {
          signal.addEventListener('abort', abort, {once:true});
          if (signal.aborted) resolve();
        }
      })]);
    } finally {
      clearTimeout(timer);
      if (signal && abort) signal.removeEventListener('abort', abort);
    }
  }
  // The first required HD packets sample the existing origins once each.
  // These are already-demanded packets, not extra synthetic speed downloads.
  function hdRoute(checksum) {
    const eligible = externalBases.filter(base => !disabled.has(base));
    if (!eligible.length) return null;
    // Panels can share identical packets. Preserve the same URL so the browser
    // can coalesce concurrent transfers and reuse its existing HTTP cache.
    const retained = packetRoutes.get(checksum);
    if (retained && eligible.includes(retained)) return retained;
    let choice = selected && eligible.includes(selected) ? selected : eligible[0];
    if (sampled.size) choice = eligible.find(base => !sampled.has(base)) || choice;
    sampled.add(choice);
    packetRoutes.set(checksum, choice);
    if (packetRoutes.size > 512) packetRoutes.delete(packetRoutes.keys().next().value);
    return choice;
  }
  // The frame cache calls this only after the complete packet SHA has passed.
  // Do not score previews, corrupt, cancelled, stale or near-instant cached reads.
  function recordVerified(response, bytes) {
    const entry = responses.get(response);
    if (!entry || entry.epoch !== generation || entry.reported || disabled.has(entry.base)
      || !entry.source.startsWith('frame-packs/') || !Number.isSafeInteger(bytes)
      || bytes < 65536 || bytes > 25 * 1024 * 1024) return;
    entry.reported = true;
    const elapsed = performance.now() - entry.started;
    if (elapsed < 250 || elapsed > 300000) return;
    const rate = bytes * 1000 / elapsed, prior = transferStats.get(entry.base);
    transferStats.set(entry.base, {samples:(prior ? prior.samples : 0) + 1,
      bytesPerSecond:prior ? prior.bytesPerSecond * 0.5 + rate * 0.5 : rate});
    const eligible = externalBases.filter(base => !disabled.has(base));
    // Compare completed, verified transfers on every currently eligible origin.
    if (eligible.length < 2 || eligible.some(base => !transferStats.has(base))) return;
    const best = eligible.reduce((a, b) => transferStats.get(a).bytesPerSecond >= transferStats.get(b).bytesPerSecond ? a : b);
    const current = transferStats.get(selected);
    if (!current || best !== selected && transferStats.get(best).bytesPerSecond > current.bytesPerSecond * 1.25) selected = best;
  }
  async function requestFrom(base, source, checksum, init) {
    const controller = new AbortController(), signal = init.signal;
    const entry = {base, source, epoch:generation, started:performance.now(), reported:false};
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
      responses.set(response, entry);
      return response;
    } catch (error) {
      if (signal) signal.removeEventListener('abort', abort);
      throw error;
    } finally { clearTimeout(timer); }
  }
  async function fetchAsset(source, checksum, init = {}) {
    if (!relative(source) || !/^(?:preview-packs|frame-packs)\/.+\.orbf$/.test(source) || !sha(checksum)) throw new Error('Invalid bound asset request');
    if (init.signal && init.signal.aborted) throw cancelled();
    if (!externalHd || source.startsWith('frame-packs/')) await waitForRouting(init.signal);
    const candidates = externalHd
      ? (source.startsWith('frame-packs/') ? [hdRoute(checksum.toLowerCase()), ...externalBases] : [local, selected, ...externalBases])
      : [selected, local, ...bases];
    const order = [...new Set(candidates)].filter(base => base && (!disabled.has(base) || base === local));
    let last;
    for (const base of order) {
      if (init.signal && init.signal.aborted) throw cancelled();
      try { return await requestFrom(base, source, checksum.toLowerCase(), init); }
      catch (error) {
        if (init.signal && init.signal.aborted) throw cancelled();
        last = error;
        if (base !== local) disable(base);
      }
    }
    throw last || new Error('No asset delivery route available');
  }
  function disable(base) {
    disabled.add(base);
    const probing = probeControllers.get(base);
    if (probing) probing.abort();
    if (selected === base) selected = externalHd ? (externalBases.find(candidate => !disabled.has(candidate)) || null) : local;
  }
  function markFailed(response) {
    const entry = responses.get(response);
    if (entry && entry.epoch === generation && entry.base !== local) disable(entry.base);
  }
  // Explicit reader retry starts a new attempt. Hash verification still happens
  // in the frame cache; no failed payload is accepted by clearing route state.
  function retryFailed() {
    generation++;
    if (finishRouting) finishRouting();
    for (const controller of probeControllers.values()) controller.abort();
    probeControllers = new Map(); finishRouting = null; routing = null;
    disabled.clear(); sampled.clear(); transferStats.clear(); packetRoutes.clear();
    selected = externalHd ? (externalBases[0] || null) : local;
    settled = routeCandidates.length <= 1;
    if (!externalHd) void beginRouting();
  }
  window.ComicAssetDelivery = Object.freeze({fetch:fetchAsset, markFailed, retryFailed, recordVerified,
    get state() { return Object.freeze({selected, settled, candidateCount:bases.length, disabledCount:disabled.size,
      transferSamples:Object.freeze(Array.from(transferStats, ([base, value]) => Object.freeze({base, ...value})))}); }});
})();
