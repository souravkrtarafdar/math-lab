/**
 * Formats a number the way we want it to appear next to a visualization:
 * fixed decimal places, and "-0.00" normalized to "0.00" so students never
 * see a confusing negative-zero coordinate.
 */
export function formatNumber(value: number, decimals = 2): string {
  const fixed = value.toFixed(decimals);
  return fixed === `-${(0).toFixed(decimals)}` ? (0).toFixed(decimals) : fixed;
}

/** Formats a 3D coordinate as "(x, y, z)" for on-screen readouts. */
export function formatCoordinate(
  x: number,
  y: number,
  z: number,
  decimals = 2
): string {
  return `(${formatNumber(x, decimals)}, ${formatNumber(y, decimals)}, ${formatNumber(
    z,
    decimals
  )})`;
}

/** Clamps a value to a [min, max] range — used to keep draggable points on-grid. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
