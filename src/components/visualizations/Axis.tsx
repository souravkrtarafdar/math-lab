import { useMemo } from "react";
import { Line, Text } from "@react-three/drei";
import * as THREE from "three";

export type AxisDirection = "x" | "y" | "z";

interface AxisProps {
  /** Which of the three axes this represents. */
  direction: AxisDirection;
  /** How far the axis extends in each direction from the origin. */
  length: number;
  /** Line, arrowhead, and label color for this axis. */
  color: string;
  /** Text shown at the positive end of the axis, e.g. "x". */
  label: string;
  /** Line thickness in pixels. */
  lineWidth?: number;
}

const UNIT_VECTORS: Record<AxisDirection, [number, number, number]> = {
  x: [1, 0, 0],
  y: [0, 1, 0],
  z: [0, 0, 1],
};

// A cone's default orientation in three.js points along +Y. To make it point
// along +X or +Z instead, we rotate it onto that axis.
const CONE_ROTATIONS: Record<AxisDirection, [number, number, number]> = {
  x: [0, 0, -Math.PI / 2],
  y: [0, 0, 0],
  z: [Math.PI / 2, 0, 0],
};

/**
 * Draws one labeled axis through the origin: a line from -length to +length,
 * an arrowhead marking the positive direction, and a text label past the tip.
 *
 * This is a building block for <CoordinateSystem />. It is intentionally
 * ignorant of the other two axes so it can be reused anywhere a single
 * labeled direction is needed (e.g. a 1D number line visualization later).
 */
export default function Axis({
  direction,
  length,
  color,
  label,
  lineWidth = 2,
}: AxisProps) {
  const unit = UNIT_VECTORS[direction];

  const { start, end, labelPosition } = useMemo(() => {
    const endVec = new THREE.Vector3(...unit).multiplyScalar(length);
    const startVec = endVec.clone().multiplyScalar(-1);
    const labelVec = endVec.clone().multiplyScalar(1 + 0.35 / length);
    return {
      start: [startVec.x, startVec.y, startVec.z] as [number, number, number],
      end: [endVec.x, endVec.y, endVec.z] as [number, number, number],
      labelPosition: [labelVec.x, labelVec.y, labelVec.z] as [
        number,
        number,
        number
      ],
    };
  }, [unit, length]);

  return (
    <group>
      <Line points={[start, end]} color={color} lineWidth={lineWidth} />
      <mesh position={end} rotation={CONE_ROTATIONS[direction]}>
        <coneGeometry args={[0.07, 0.22, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
      <Text
        position={labelPosition}
        fontSize={0.32}
        color={color}
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {label}
      </Text>
    </group>
  );
}
