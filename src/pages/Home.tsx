import { useState } from "react";
import { Link } from "react-router-dom";
import HeroScene from "@/components/visualizations/HeroScene";
import TopicCard from "@/components/ui/TopicCard";
import EquationDisplay from "@/components/ui/EquationDisplay";
import { MATH_TOPICS, FEATURED_SIMULATIONS } from "@/data/topics";
import { formatCoordinate } from "@/utils/format";
import type { Vector3Tuple } from "@/types/math";

const INITIAL_POINT: Vector3Tuple = { x: 1.6, y: 1.2, z: 1.6 };

export default function Home() {
  const [point, setPoint] = useState<Vector3Tuple>(INITIAL_POINT);

  return (
    <>
      <HeroSection point={point} onPointChange={setPoint} />
      <IntroSection />
      <ExploreSection />
      <FeaturedSimulationsSection />
    </>
  );
}

function HeroSection({
  point,
  onPointChange,
}: {
  point: Vector3Tuple;
  onPointChange: (p: Vector3Tuple) => void;
}) {
  return (
    <section className="relative overflow-hidden bg-grid-fade">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pt-20">
        <div className="animate-fade-up">
          <p className="font-mono text-xs uppercase tracking-widest text-signal-cyan">
            an interactive mathematics laboratory
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] text-lab-text sm:text-5xl lg:text-[3.4rem]">
            See mathematics.
            <br />
            Move mathematics.
            <br />
            <span className="text-signal-cyan">Understand</span> mathematics.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-lab-muted">
            Most math is taught as symbols on a page. Here, it's something you
            reach into. Drag the point on the right — that's a coordinate:
            not a pair of numbers to memorize, but an actual position in
            space.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#explore"
              className="rounded-lg bg-signal-cyan px-5 py-2.5 text-sm font-medium text-lab-bg transition-transform hover:scale-[1.03]"
            >
              Explore Mathematics
            </a>
            <a
              href="#simulations"
              className="rounded-lg border border-lab-border px-5 py-2.5 text-sm font-medium text-lab-text transition-colors hover:border-signal-cyan hover:text-signal-cyan"
            >
              See a simulation
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-lab-border bg-lab-surface shadow-[0_0_60px_-15px_rgba(95,227,224,0.25)]">
            <HeroScene onPointChange={onPointChange} />
          </div>

          {/* Coordinate HUD, overlaid on the 3D viewport */}
          <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-lab-border bg-lab-bg/80 px-4 py-3 backdrop-blur">
            <span className="text-xs text-lab-muted">
              Drag the gold point · rotate the scene by dragging the
              background
            </span>
            <span className="font-mono text-sm text-signal-amber">
              {formatCoordinate(point.x, point.y, point.z)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="border-y border-lab-border/80 bg-lab-surface/40">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8">
        <EquationDisplay
          latex="f(x) = \text{something you can touch, not just read}"
          block
          className="text-lg text-lab-muted sm:text-xl"
        />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-lab-muted">
          A formula is a compressed description of something visual. A
          derivative is the slope of a line you can watch tighten onto a
          curve. An eigenvector is a direction a transformation refuses to
          rotate. Math Lab exists to decompress those ideas — you see the
          shape first, play with it, and the formula arrives as a natural
          summary of what you already understand.
        </p>
      </div>
    </section>
  );
}

function ExploreSection() {
  return (
    <section id="explore" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl text-lab-text sm:text-4xl">
          Explore Mathematics
        </h2>
        <p className="mt-3 text-base leading-relaxed text-lab-muted">
          Every branch below will become its own interactive laboratory. Start
          with the coordinate system in the hero above — everything else is
          built on that same idea of direct manipulation.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MATH_TOPICS.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
    </section>
  );
}

function FeaturedSimulationsSection() {
  return (
    <section
      id="simulations"
      className="border-t border-lab-border/80 bg-lab-surface/40"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-lab-text sm:text-4xl">
            Featured Simulations
          </h2>
          <p className="mt-3 text-base leading-relaxed text-lab-muted">
            Fully working interactive labs, ready to open right now.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {FEATURED_SIMULATIONS.map((sim) => (
            <Link
              key={sim.slug}
              to={`/mathematics/${sim.topicSlug}`}
              className="group flex flex-col justify-between rounded-2xl border border-lab-border bg-lab-surface p-7 transition-colors hover:border-signal-cyan/60"
            >
              <div>
                <h3 className="font-display text-xl text-lab-text">
                  {sim.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-lab-muted">
                  {sim.description}
                </p>
              </div>
              <span className="mt-6 text-sm font-medium text-signal-cyan">
                Open simulation
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
