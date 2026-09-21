import { Link } from "react-router-dom";
import clsx from "clsx";
import type { MathTopic, TopicAccent } from "@/types/math";

const ACCENT_STYLES: Record<TopicAccent, { text: string; border: string; glow: string }> = {
  cyan: {
    text: "text-signal-cyan",
    border: "group-hover:border-signal-cyan/60",
    glow: "group-hover:shadow-[0_0_0_1px_rgba(95,227,224,0.25)]",
  },
  amber: {
    text: "text-signal-amber",
    border: "group-hover:border-signal-amber/60",
    glow: "group-hover:shadow-[0_0_0_1px_rgba(242,184,75,0.25)]",
  },
  violet: {
    text: "text-signal-violet",
    border: "group-hover:border-signal-violet/60",
    glow: "group-hover:shadow-[0_0_0_1px_rgba(155,140,255,0.25)]",
  },
  rose: {
    text: "text-signal-rose",
    border: "group-hover:border-signal-rose/60",
    glow: "group-hover:shadow-[0_0_0_1px_rgba(242,109,141,0.25)]",
  },
};

interface TopicCardProps {
  topic: MathTopic;
}

/**
 * One entry in the "Explore Mathematics" grid. Each card is anchored by a
 * mathematical symbol (∑, π, ∫...) rather than a generic icon, and topics
 * that aren't built yet are visibly marked "coming soon" instead of linking
 * to an empty page.
 */
export default function TopicCard({ topic }: TopicCardProps) {
  const accent = ACCENT_STYLES[topic.accent];
  const isAvailable = topic.status === "available";

  const content = (
    <div
      className={clsx(
        "group flex h-full flex-col justify-between rounded-2xl border border-lab-border bg-lab-surface p-6 transition-all duration-200",
        accent.border,
        accent.glow,
        isAvailable ? "cursor-pointer" : "opacity-70"
      )}
    >
      <div className="flex items-start justify-between">
        <span className={clsx("font-display text-4xl", accent.text)} aria-hidden>
          {topic.symbol}
        </span>
        {!isAvailable && (
          <span className="rounded-full border border-lab-border px-2.5 py-0.5 text-[11px] text-lab-muted">
            Coming soon
          </span>
        )}
      </div>
      <div className="mt-6">
        <h3 className="font-display text-lg text-lab-text">{topic.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-lab-muted">
          {topic.description}
        </p>
      </div>
    </div>
  );

  if (!isAvailable) {
    return <div>{content}</div>;
  }

  return (
    <Link to={`/mathematics/${topic.slug}`} className="block h-full">
      {content}
    </Link>
  );
}
