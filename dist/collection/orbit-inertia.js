(() => {
  'use strict';
  const wrap = percent => ((percent % 100) + 100) % 100;
  function create({onChange, onState = () => {}}) {
    const decayMs = 310, speedLimit = .09, stopSpeed = .0015;
    let frame = null, phase = 'idle', value = 0, velocity = 0;
    let originX = 0, originValue = 0, sampleAt = 0, lastInputAt = 0;
    const setPhase = next => { if (phase !== next) { phase = next; onState(next); } };
    function cancel() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null; velocity = 0; setPhase('idle');
    }
    function begin(percent, x, now = performance.now()) {
      cancel(); value = percent; originValue = percent; originX = x;
      sampleAt = now; lastInputAt = now; setPhase('dragging');
    }
    function move(x, width, now = performance.now()) {
      if (phase !== 'dragging') return;
      const next = originValue + (x - originX) / Math.max(1, width) * 100;
      const elapsed = Math.max(1, now - sampleAt);
      const instantaneous = Math.max(-speedLimit, Math.min(speedLimit, (next - value) / elapsed));
      velocity = .55 * velocity + .45 * instantaneous;
      value = next; sampleAt = now; lastInputAt = now;
      onChange(wrap(value));
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
        value += velocity * decayMs * (1 - decay);
        velocity *= decay;
        onChange(wrap(value));
        if (Math.abs(velocity) < stopSpeed) { frame = null; velocity = 0; setPhase('idle'); return; }
        frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    }
    return Object.freeze({begin, move, end, cancel, destroy:cancel});
  }
  window.OrbitInertia = Object.freeze({create});
})();
