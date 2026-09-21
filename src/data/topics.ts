import type { FeaturedSimulation, MathTopic } from "@/types/math";

/**
 * The master list of topics shown in "Explore Mathematics". Only the
 * coordinate-system foundation is wired up so far, so every other topic is
 * marked "coming-soon" — flip a topic to "available" once its page exists.
 */
export const MATH_TOPICS: MathTopic[] = [
  {
    slug: "algebra",
    title: "Algebra",
    symbol: "x²",
    description: "See equations as shapes: what a solution actually is.",
    accent: "cyan",
    status: "coming-soon",
  },
  {
    slug: "geometry",
    title: "Geometry",
    symbol: "△",
    description: "Shapes, angles, and transformations you can reach into.",
    accent: "amber",
    status: "coming-soon",
  },
  {
    slug: "trigonometry",
    title: "Trigonometry",
    symbol: "sin θ",
    description: "The unit circle, unrolled into waves you can trace.",
    accent: "violet",
    status: "coming-soon",
  },
  {
    slug: "calculus",
    title: "Calculus",
    symbol: "∫",
    description: "From secant lines to tangents to area under a curve.",
    accent: "rose",
    status: "coming-soon",
  },
  {
    slug: "linear-algebra",
    title: "Linear Algebra",
    symbol: "⟦A⟧",
    description: "Vectors, matrices, and the transformations they encode.",
    accent: "cyan",
    status: "coming-soon",
  },
  {
    slug: "probability-statistics",
    title: "Probability & Statistics",
    symbol: "P(x)",
    description: "Distributions and uncertainty, shaped by data in real time.",
    accent: "amber",
    status: "coming-soon",
  },
  {
    slug: "multivariable-calculus",
    title: "Multivariable Calculus",
    symbol: "∇f",
    description: "Surfaces, gradients, and the slope of many-input functions.",
    accent: "violet",
    status: "coming-soon",
  },
  {
    slug: "optimization",
    title: "Optimization",
    symbol: "min f",
    description: "Walking downhill on a loss surface until it flattens out.",
    accent: "rose",
    status: "coming-soon",
  },
  {
    slug: "ml-mathematics",
    title: "Machine Learning Mathematics",
    symbol: "θ*",
    description: "Regression, gradient descent, and loss — built from scratch.",
    accent: "cyan",
    status: "coming-soon",
  },
];

/** Simulations featured on the homepage, independent of the topic grid above. */
export const FEATURED_SIMULATIONS: FeaturedSimulation[] = [
  {
    slug: "coordinate-explorer",
    title: "3D Coordinate Explorer",
    description:
      "Drag a point through space and watch (x, y, z) update live — the same scene as the hero above, in its own page.",
    topicSlug: "geometry",
  },
];
