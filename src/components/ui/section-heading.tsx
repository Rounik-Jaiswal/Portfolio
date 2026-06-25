import { Reveal } from "./reveal";

/**
 * Standard section header: a mono eyebrow with a leading rule, a large title,
 * and an optional subtitle. Used across all sections for consistency.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <Reveal>
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          <span className="h-px w-[22px] bg-accent" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3.5 text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-ink">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-2 max-w-xl text-ink-soft">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
