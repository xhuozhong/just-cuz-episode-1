(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.OrbitSeek = api;
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  function validRanges(ranges) {
    return Array.isArray(ranges) ? ranges.filter(r => Array.isArray(r) && Number.isFinite(r[0]) && Number.isFinite(r[1]) && r[0] >= 0 && r[1] > r[0]) : [];
  }
  function hasFullSeekRange(ranges, duration) {
    if (!Number.isFinite(duration) || duration <= 0) return false;
    const tolerance = Math.min(.04, duration * .01);
    return validRanges(ranges).some(([start, end]) => start <= tolerance && end >= duration - tolerance);
  }
  function canSeekTo(ranges, duration, target) {
    if (!Number.isFinite(duration) || duration <= 0 || !Number.isFinite(target) || target < 0 || target >= duration) return false;
    const tolerance = Math.min(.02, duration * .005);
    return validRanges(ranges).some(([start, end]) => start <= target + tolerance && end >= target - tolerance);
  }
  return Object.freeze({hasFullSeekRange, canSeekTo});
});
