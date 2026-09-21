import { ReactNode } from "react";
import Axis from "./Axis";
import GridPlane from "./GridPlane";

interface CoordinateSystemProps {
  /** Half-length of each axis, and the size of the reference grid. */
  size?: number;
  /** Show the reference grid on the XZ (ground) plane. */
  showGrid?: boolean;
  /** Show a small sphere marking (0, 0, 0). */
  showOrigin?: boolean;
  /** Include a basic light rig so this works as a drop-in, self-lit scene. */
  withLights?: boolean;
  /** Any visualization content placed inside this coordinate space — a
   *  Point3D, a curve, a vector arrow, a surface, etc. */
  children?: ReactNode;
}

const AXIS_COLORS = {
  x: "#F26D8D", // rose
  y: "#5FE3E0", // cyan
  z: "#9B8CFF", // violet
};

/**
 * The foundational 3D building block for this entire site: a labeled
 * (x, y, z) coordinate space. Nearly every visualization we build later
 * (vectors, surfaces, gradient descent, parametric curves...) will be
 * placed inside one of these, so this component stays deliberately
 * minimal and un-opinionated about what it contains.
 */
export default function CoordinateSystem({
  size = 4,
  showGrid = true,
  showOrigin = true,
  withLights = true,
  children,
}: CoordinateSystemProps) {
  return (
    <group>
      {withLights && (
        <>
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 6, 4]} intensity={1.1} />
          <directionalLight position={[-4, -2, -4]} intensity={0.25} />
        </>
      )}

      {showGrid && <GridPlane size={size * 2} divisions={size * 4} />}

      <Axis direction="x" length={size} color={AXIS_COLORS.x} label="x" />
      <Axis direction="y" length={size} color={AXIS_COLORS.y} label="y" />
      <Axis direction="z" length={size} color={AXIS_COLORS.z} label="z" />

      {showOrigin && (
        <mesh>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#E9EDF7" />
        </mesh>
      )}

      {children}
    </group>
  );
}
