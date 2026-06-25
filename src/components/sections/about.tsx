import { about } from "@/content/about";
import { Reveal } from "@/components/ui/reveal";

/**
 * A short narrative intro. Sits between the hero and the stats band to give
 * recruiters context before the numbers. Availability and location render as
 * small badges; either is hidden if null in content/about.ts.
 */
export function About() {
  return (
    <section id="about" className="px-6 pt-16 pb-8">
      <div className="mx-auto max-w-content">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-[22px] bg-accent" />
              About
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 text-[clamp(17px,2.2vw,22px)] leading-relaxed text-ink">
              {about.blurb}
            </p>
          </Reveal>

          {(about.availability || about.location) && (
            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {about.availability && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 font-mono text-xs text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {about.availability}
                  </span>
                )}
                {about.location && (
                  <span className="rounded-full border border-line bg-bg-tile px-3.5 py-1.5 font-mono text-xs text-ink-soft">
                    {about.location}
                  </span>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
