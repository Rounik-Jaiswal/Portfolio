"use client";

import { useState } from "react";
import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SkillBars } from "@/components/ui/skill-bars";
import { RadarChart } from "@/components/charts/radar-chart";

/**
 * Skills section. Left column: category toggle chips + animated proficiency
 * bars (filtered by the active chip). Right column: the D3 radar chart (always
 * shows the full picture). All data from content/skills.ts.
 */
export function Skills() {
  // Active category - defaults to the first one in the content file.
  const [active, setActive] = useState(skills.categories[0]?.id ?? "");

  const visibleBars = skills.bars.filter((bar) => bar.category === active);

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills, visualized"
          subtitle="Grouped by how I actually use them - consulting analytics and engineering."
        />

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-10">
          <Reveal>
            <div className="mb-6 flex flex-wrap gap-2">
              {skills.categories.map((cat) => {
                const isActive = cat.id === active;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActive(cat.id)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-3 py-1.5 font-mono text-[11px] transition-colors ${
                      isActive
                        ? "border-accent text-accent"
                        : "border-line text-ink-soft hover:border-ink-soft hover:text-ink"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
            {/* key forces a re-mount on category change so bars re-animate */}
            <SkillBars key={active} bars={visibleBars} />
          </Reveal>

          <Reveal delay={0.1}>
            <RadarChart data={skills.radar} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}