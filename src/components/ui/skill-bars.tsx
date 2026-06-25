"use client";

import { useReveal } from "@/lib/hooks/use-reveal";
import type { SkillBar } from "@/lib/types";

/**
 * Animated proficiency bars. Each fill grows to its value once the group
 * scrolls into view. Data comes from content/skills.ts (bars).
 */
export function SkillBars({ bars }: { bars: SkillBar[] }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="grid gap-[18px]">
      {bars.map((bar) => (
        <div key={bar.name}>
          <div className="mb-1.5 flex items-center justify-between text-[13.5px]">
            <span className="text-ink">{bar.name}</span>
            <span className="font-mono text-xs text-ink-faint">{bar.level}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full border border-line-soft bg-bg-tile">
            <div
              className="h-full rounded-full transition-[width] duration-1000 ease-out"
              style={{
                width: visible ? `${bar.value}%` : "0%",
                background:
                  "linear-gradient(90deg, var(--accent), var(--accent-3))",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
