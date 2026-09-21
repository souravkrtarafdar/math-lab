import { useMemo } from "react";
import katex from "katex";
import clsx from "clsx";

interface EquationDisplayProps {
  /** A LaTeX string, e.g. "f(x) = x^2" or "\\frac{dy}{dx}". */
  latex: string;
  /** Render as a centered block equation instead of inline text. */
  block?: boolean;
  /** Extra classes for sizing/color from the parent. */
  className?: string;
}

/**
 * Renders LaTeX using KaTeX. Kept as its own component so every place we
 * need to show a formula — a card, a control panel, a step in a derivation —
 * does it the same way, and KaTeX's (non-React) DOM output stays contained
 * in one place rather than scattered through the app.
 */
export default function EquationDisplay({
  latex,
  block = false,
  className,
}: EquationDisplayProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        throwOnError: false,
        displayMode: block,
      });
    } catch {
      return latex;
    }
  }, [latex, block]);

  return (
    <span
      className={clsx("text-lab-text", className)}
      // KaTeX produces sanitized, static markup from a LaTeX string we
      // control ourselves (not raw user input), so this is safe here.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
