import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CoordinateSystem from "./CoordinateSystem";
import Point3D from "./Point3D";
import type { Vector3Tuple } from "@/types/math";

interface HeroSceneProps {
  /** Called whenever the student drags the point, with its new coordinates. */
  onPointChange: (position: Vector3Tuple) => void;
}

/**
 * The homepage's hero visualization: an (x, y, z) coordinate space with one
 * draggable point. This is deliberately the *first* thing a visitor can
 * touch — before any explanation — because the whole product's promise is
 * that mathematics can be understood by manipulating it directly.
 */
export default function HeroScene({ onPointChange }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [5, 4, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#0A0E1A"]} />
      <fog attach="fog" args={["#0A0E1A", 8, 18]} />
      <Suspense fallback={null}>
        <CoordinateSystem size={3.2}>
          <Point3D
            initialPosition={[1.6, 1.2, 1.6]}
            color="#F2B84B"
            onPositionChange={onPointChange}
          />
        </CoordinateSystem>
      </Suspense>
      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={4}
        maxDistance={14}
      />
    </Canvas>
  );
}
