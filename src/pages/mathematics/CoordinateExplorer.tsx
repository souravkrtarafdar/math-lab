import { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CoordinateSystem from "@/components/visualizations/CoordinateSystem";
import Point3D from "@/components/visualizations/Point3D";
import VisualizationControls from "@/components/ui/VisualizationControls";
import EquationDisplay from "@/components/ui/EquationDisplay";
import { formatCoordinate, formatNumber } from "@/utils/format";
import type { Vector3Tuple } from "@/types/math";

const START: [number, number, number] = [1.6, 1.2, 1.6];

/**
 * A full-page version of the hero visualization, plus the one derived
 * formula that falls naturally out of a 3D coordinate: the distance from
 * the origin (the vector's magnitude). This is the site's first example of
 * the intended learning sequence: see the point move → read the numbers →
 * see the formula that explains them.
 */
export default function CoordinateExplorer() {
  const [point, setPoint] = useState<Vector3Tuple>({
    x: START[0],
    y: START[1],
    z: START[2],
  });
  const [resetKey, setResetKey] = useState(0);

  const distance = useMemo(
    () => Math.sqrt(point.x ** 2 + point.y ** 2 + point.z ** 2),
    [point]
  );

  const handleReset = () => {
    setPoint({ x: START[0], y: START[1], z: START[2] });
    setResetKey((k) => k + 1);
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-signal-cyan">
        geometry · foundations
      </p>
      <h1 className="mt-3 font-display text-3xl text-lab-text sm:text-4xl">
        3D Coordinate Explorer
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-lab-muted">
        A coordinate is a position, not a formula. Drag the point along any
        of the colored arrows — each one moves exactly one of x, y, or z —
        and watch how that single position also determines its distance from
        the origin.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="aspect-square w-full overflow-hidden rounded-2xl border border-lab-border bg-lab-surface">
          <Canvas
            key={resetKey}
            camera={{ position: [5.5, 4.5, 6.5], fov: 45 }}
            dpr={[1, 2]}
          >
            <color attach="background" args={["#0A0E1A"]} />
            <fog attach="fog" args={["#0A0E1A", 9, 20]} />
            <Suspense fallback={null}>
              <CoordinateSystem size={3.2}>
                <Point3D
                  initialPosition={START}
                  color="#F2B84B"
                  onPositionChange={setPoint}
                />
              </CoordinateSystem>
            </Suspense>
            <OrbitControls
              makeDefault
              enableDamping
              dampingFactor={0.08}
              minDistance={4}
              maxDistance={16}
            />
          </Canvas>
        </div>

        <div className="flex flex-col gap-6">
          <VisualizationControls
            onReset={handleReset}
            hint="Drag an arrow to move the point · drag the background to rotate"
          />

          <div className="rounded-xl border border-lab-border bg-lab-surface p-5">
            <p className="text-sm text-lab-muted">Position</p>
            <p className="mt-1 font-mono text-lg text-signal-amber">
              {formatCoordinate(point.x, point.y, point.z)}
            </p>
          </div>

          <div className="rounded-xl border border-lab-border bg-lab-surface p-5">
            <p className="text-sm text-lab-muted">
              Distance from the origin
            </p>
            <div className="mt-2">
              <EquationDisplay latex="d = \sqrt{x^2 + y^2 + z^2}" block />
            </div>
            <p className="mt-2 font-mono text-lg text-signal-cyan">
              d = {formatNumber(distance, 3)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
