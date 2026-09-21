interface GridPlaneProps {
  /** Total width/depth the grid covers (it is centered on the origin). */
  size?: number;
  /** How many cells the grid is divided into. */
  divisions?: number;
  /** Color of the grid lines away from the center. */
  color?: string;
  /** Color of the two lines that cross through the origin. */
  centerColor?: string;
}

/**
 * A flat reference grid on the XZ plane (the "floor" in three.js's
 * Y-up convention). Seeing the grid is what makes a 3D scene read as
 * a coordinate space rather than objects floating in a void — it gives
 * the eye a stable sense of scale and distance.
 */
export default function GridPlane({
  size = 10,
  divisions = 20,
  color = "#232B45",
  centerColor = "#3A4468",
}: GridPlaneProps) {
  return (
    <gridHelper args={[size, divisions, centerColor, color]} />
  );
}
