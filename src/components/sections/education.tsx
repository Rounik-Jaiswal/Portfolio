import { education } from "@/content/education";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/**
 * Education history as a set of cards. Data from content/education.ts.
 */
export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          subtitle="Strong fundamentals, consistent record."
        />

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {education.map((item, i) => (
            <Reveal key={item.institution} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-6">
                <div className="font-mono text-xs text-accent">{item.period}</div>
                <h3 className="mt-2 text-base font-bold leading-snug text-ink">
                  {item.qualification}
                </h3>
                <div className="mt-1 flex-1 text-sm text-ink-soft">
                  {item.institution}
                </div>
                <div className="mt-4 font-mono text-sm font-semibold text-ink">
                  {item.score}
                </div>
                {item.note && (
                  <div className="mt-1 text-xs text-ink-soft">{item.note}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
