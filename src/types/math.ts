/**
 * Shared types for mathematical visualizations.
 *
 * Keeping these in one place means every visualization component
 * (CoordinateSystem, Point3D, future graphs, etc.) agrees on the same
 * shape for a point, a range, or a topic — instead of every component
 * inventing its own slightly-different version.
 */

/** A point in 3D space, in "math" coordinates (x, y, z). */
export interface Vector3Tuple {
  x: number;
  y: number;
  z: number;
}

/** A closed numeric interval, e.g. the visible range of an axis. */
export interface NumericRange {
  min: number;
  max: number;
}

/** Metadata describing one branch of mathematics shown on the homepage. */
export interface MathTopic {
  slug: string;
  title: string;
  symbol: string; // a mathematical glyph used as the card's visual anchor
  description: string;
  accent: TopicAccent;
  status: "available" | "coming-soon";
}

/** A small, fixed palette of accent colors reused across topic cards. */
export type TopicAccent = "cyan" | "amber" | "violet" | "rose";

/** A featured, ready-to-open interactive simulation. */
export interface FeaturedSimulation {
  slug: string;
  title: string;
  description: string;
  topicSlug: string;
}
