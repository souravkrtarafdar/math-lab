import { ReactNode } from "react";

interface VisualizationControlsProps {
  isPlaying?: boolean;
  onTogglePlay?: () => void;
  onReset?: () => void;
  /** A short hint shown to the right, e.g. "Drag to rotate · Scroll to zoom". */
  hint?: string;
  /** Extra controls (sliders, toggles) rendered below the button row. */
  children?: ReactNode;
}

/**
 * A small toolbar sitting under (or beside) a visualization: play/pause,
 * reset, an interaction hint, and a slot for any parameter sliders that
 * visualization needs. Reused across every simulation on the site so
 * controls always look and behave the same way.
 */
export default function VisualizationControls({
  isPlaying,
  onTogglePlay,
  onReset,
  hint,
  children,
}: VisualizationControlsProps) {
  const hasPlayback = onTogglePlay !== undefined;
  const hasReset = onReset !== undefined;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-lab-border bg-lab-surface/80 p-4 backdrop-blur">
      {(hasPlayback || hasReset || hint) && (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {hasPlayback && (
              <button
                type="button"
                onClick={onTogglePlay}
                className="rounded-lg border border-lab-border bg-lab-surfaceRaised px-3 py-1.5 text-sm font-medium text-lab-text transition-colors hover:border-signal-cyan hover:text-signal-cyan"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            )}
            {hasReset && (
              <button
                type="button"
                onClick={onReset}
                className="rounded-lg border border-lab-border bg-lab-surfaceRaised px-3 py-1.5 text-sm font-medium text-lab-text transition-colors hover:border-signal-amber hover:text-signal-amber"
              >
                Reset
              </button>
            )}
          </div>
          {hint && <p className="text-xs text-lab-muted">{hint}</p>}
        </div>
      )}
      {children && <div className="flex flex-col gap-4">{children}</div>}
    </div>
  );
}
