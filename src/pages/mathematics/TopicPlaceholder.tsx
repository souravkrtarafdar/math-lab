import { Link, useParams } from "react-router-dom";
import { MATH_TOPICS } from "@/data/topics";

/**
 * Fallback page for any topic slug that doesn't have a dedicated page yet.
 * Keeps every link on the site pointing somewhere real instead of 404-ing,
 * while being honest that the visualization isn't built yet.
 */
export default function TopicPlaceholder() {
  const { slug } = useParams<{ slug: string }>();
  const topic = MATH_TOPICS.find((t) => t.slug === slug);

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-start px-5 py-24 sm:px-8">
      <span className="font-display text-5xl text-signal-cyan">
        {topic?.symbol ?? "?"}
      </span>
      <h1 className="mt-6 font-display text-3xl text-lab-text">
        {topic?.title ?? "Topic not found"}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-lab-muted">
        This laboratory is still being built. The coordinate-system
        foundation is ready — everything else follows the same
        visualize-first approach.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-lg border border-lab-border px-5 py-2.5 text-sm font-medium text-lab-text transition-colors hover:border-signal-cyan hover:text-signal-cyan"
      >
        Back to homepage
      </Link>
    </section>
  );
}
