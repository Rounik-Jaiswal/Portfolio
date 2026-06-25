import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SkillBars } from "@/components/ui/skill-bars";
import { RadarChart } from "@/components/charts/radar-chart";

/**
 * Skills section. Left column: category chips + animated proficiency bars.
 * Right column: the D3 radar chart. All data from content/skills.ts.
 */
export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills, visualized"
          subtitle="Grouped by how I actually use them — consulting analytics, BI tooling, and engineering."
        />

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-10">
          <Reveal>
            <div className="mb-6 flex flex-wrap gap-2">
              {skills.categories.map((cat, i) => (
                <span
                  key={cat.id}
                  className={`rounded-full border px-3 py-1.5 font-mono text-[11px] ${
                    i === 0
                      ? "border-accent text-accent"
                      : "border-line text-ink-soft"
                  }`}
                >
                  {cat.label}
                </span>
              ))}
            </div>
            <SkillBars bars={skills.bars} />
          </Reveal>

          <Reveal delay={0.1}>
            <RadarChart data={skills.radar} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
