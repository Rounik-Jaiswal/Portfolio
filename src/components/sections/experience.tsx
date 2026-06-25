"use client";

import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { useScrollProgress } from "@/lib/hooks/use-scroll-progress";

/**
 * Experience timeline. A static rail runs down the left; an accent "progress"
 * line grows over it as the user scrolls through the section. Each role is a
 * reveal-on-scroll item. All data comes from content/experience.ts.
 */
export function Experience() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="From national disaster forecasting to consulting-grade visualization."
        />

        <div ref={ref} className="relative pl-9">
          {/* Static rail */}
          <div className="absolute left-[9px] top-1.5 bottom-1.5 w-0.5 bg-line" />
          {/* Progress overlay - height driven by scroll progress */}
          <div
            className="absolute left-[9px] top-1.5 w-0.5 bg-accent"
            style={{ height: `calc(${progress} * (100% - 12px))` }}
          />

          {experience.map((item) => (
            <Reveal key={`${item.org}-${item.period}`} className="relative pb-10 last:pb-0">
              {/* Node dot */}
              <span className="absolute left-[-30px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg shadow-[0_0_0_4px_var(--bg)]" />

              <div className="font-mono text-xs text-accent">{item.period}</div>
              <h3 className="mt-1 text-lg font-bold text-ink">{item.role}</h3>
              <div className="mb-2.5 text-sm text-ink-soft">
                {item.org} · {item.location}
              </div>
              <ul className="grid gap-1.5">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="relative pl-[18px] text-[14.5px] text-ink-soft"
                  >
                    <span className="absolute left-0 text-accent-2">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
