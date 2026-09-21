import { useCallback, useRef } from "react";
import { PivotControls } from "@react-three/drei";
import * as THREE from "three";
import type { Vector3Tuple } from "@/types/math";

interface Point3DProps {
  /** Where the point starts. Also the origin the drag gizmo is anchored to. */
  initialPosition: [number, number, number];
  /** Sphere and gizmo color. */
  color?: string;
  /** Sphere radius. */
  radius?: number;
  /** Called continuously while the student drags the point. */
  onPositionChange?: (position: Vector3Tuple) => void;
  /** Overall size of the drag gizmo (arrows), relative to the scene scale. */
  gizmoScale?: number;
}

/**
 * A point in 3D space the student can grab and drag along any single axis,
 * or across a plane, using an on-screen gizmo (arrows + plane handles).
 *
 * Why a gizmo instead of free dragging? Free-dragging a point on a 2D
 * screen is mathematically ambiguous — the mouse has no concept of depth.
 * A gizmo makes the ambiguity explicit and teaches something on its own:
 * moving along the red arrow changes only x, the cyan arrow only y, and
 * so on. That is the core intuition this component exists to build.
 */
export default function Point3D({
  initialPosition,
  color = "#F2B84B",
  radius = 0.14,
  onPositionChange,
  gizmoScale = 0.75,
}: Point3DProps) {
  // The drag delta arrives as a matrix relative to where the drag started,
  // so we add it to the point's fixed starting position to get its
  // absolute location in the scene.
  const origin = useRef(new THREE.Vector3(...initialPosition));

  const handleDrag = useCallback(
    (local: THREE.Matrix4) => {
      const delta = new THREE.Vector3().setFromMatrixPosition(local);
      const absolute = origin.current.clone().add(delta);
      onPositionChange?.({ x: absolute.x, y: absolute.y, z: absolute.z });
    },
    [onPositionChange]
  );

  return (
    <group position={initialPosition}>
      <PivotControls
        scale={gizmoScale}
        disableRotations
        disableScaling
        depthTest={false}
        lineWidth={2.5}
        fixed={false}
        onDrag={handleDrag}
      >
        <mesh>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.6}
          />
        </mesh>
      </PivotControls>
    </group>
  );
}
