"use client";

import { useReveal } from "@/lib/hooks/use-reveal";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { Sparkline } from "@/components/charts/sparkline";
import type { Stat } from "@/lib/types";

/**
 * One KPI tile. Counts up to its value when scrolled into view and shows a
 * sparkline beneath the label.
 */
export function KpiTile({ stat }: { stat: Stat }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.5);
  const animated = useCountUp(stat.value, visible);
  const display = animated.toFixed(stat.decimals ?? 0);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-line bg-bg-tile p-5"
    >
      {/* Hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, var(--glow), transparent 40%)",
        }}
      />
      <div className="relative">
        <div className="text-[clamp(30px,4vw,42px)] font-extrabold leading-none tracking-tight text-ink">
          {display}
          {stat.suffix && (
            <span className="ml-0.5 text-[0.5em] font-bold text-accent">
              {stat.suffix}
            </span>
          )}
        </div>
        <div className="mt-2.5 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
          {stat.label}
        </div>
        <div className="mt-3.5">
          <Sparkline type={stat.spark} />
        </div>
      </div>
    </div>
  );
}
