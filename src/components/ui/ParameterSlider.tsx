import { CSSProperties, useId } from "react";
import { formatNumber } from "@/utils/format";

interface ParameterSliderProps {
  /** Human-readable name shown above the slider, e.g. "Slope (m)". */
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  /** How many decimals to show in the live value readout. */
  decimals?: number;
  /** Optional unit or symbol shown after the value, e.g. "rad". */
  suffix?: string;
}

/**
 * A single parameter control: label, live numeric readout, and a styled
 * range input. This is the one control every interactive visualization on
 * the site will reuse for "drag this number and watch the math change."
 */
export default function ParameterSlider({
  label,
  value,
  min,
  max,
  step = 0.01,
  onChange,
  decimals = 2,
  suffix,
}: ParameterSliderProps) {
  const id = useId();
  const fillPercent = ((value - min) / (max - min)) * 100;
  const style = { "--range-fill": `${fillPercent}%` } as CSSProperties;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm text-lab-muted">
          {label}
        </label>
        <span className="font-mono text-sm text-signal-cyan">
          {formatNumber(value, decimals)}
          {suffix ?? ""}
        </span>
      </div>
      <input
        id={id}
        type="range"
        className="lab-slider"
        style={style}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
