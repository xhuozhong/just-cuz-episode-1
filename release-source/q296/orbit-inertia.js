(() => {
  'use strict';
  const wrap = percent => ((percent % 100) + 100) % 100;
  function create({onChange, onState = () => {}, loop = true}) {
    // Complete orbits retain their existing wrap. A reviewed partial clip can
    // opt into bounded motion, so its last real view never jumps to the first.
    const normalize = loop ? wrap : percent => Math.max(0,Math.min(100,percent));
    const decayMs = 310, speedLimit = .09, stopSpeed = .0015;
    let frame = null, phase = 'idle', value = 0, velocity = 0;
    let originX = 0, originValue = 0, sampleAt = 0, lastInputAt = 0;
    const setPhase = next => { if (phase !== next) { phase = next; onState(next); } };
    function cancel() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null; velocity = 0; setPhase('idle');
    }
    function begin(percent, x, now = performance.now()) {
      cancel(); value = loop ? percent : normalize(percent); originValue = value; originX = x;
      sampleAt = now; lastInputAt = now; setPhase('dragging');
    }
    function move(x, width, now = performance.now()) {
      if (phase !== 'dragging') return;
      const requested = originValue + (x - originX) / Math.max(1, width) * 100;
      const next = loop ? requested : normalize(requested);
      // Rebase the grab at a boundary so reversing direction is immediate.
      if (!loop && next !== requested) { originX = x; originValue = next; }
      const elapsed = Math.max(1, now - sampleAt);
      const instantaneous = Math.max(-speedLimit, Math.min(speedLimit, (next - value) / elapsed));
      velocity = .55 * velocity + .45 * instantaneous;
      if (!loop && (next === 0 || next === 100)) velocity = 0;
      value = next; sampleAt = now; lastInputAt = now;
      onChange(normalize(value));
    }
    function end(now = performance.now()) {
      if (phase !== 'dragging') return;
      const reducedMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion || now - lastInputAt > 100 || Math.abs(velocity) < stopSpeed) { cancel(); return; }
      setPhase('coasting');
      let previous = now;
      function tick(at) {
        if (phase !== 'coasting') return;
        const elapsed = Math.max(0, Math.min(64, at - previous));
        previous = at;
        const decay = Math.exp(-elapsed / decayMs);
        const requested = value + velocity * decayMs * (1 - decay);
        value = loop ? requested : normalize(requested);
        velocity *= decay;
        if (!loop && value !== requested) velocity = 0;
        onChange(normalize(value));
        if (Math.abs(velocity) < stopSpeed) { frame = null; velocity = 0; setPhase('idle'); return; }
        frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    }
    return Object.freeze({begin, move, end, cancel, destroy:cancel});
  }
  window.OrbitInertia = Object.freeze({create});
})();
