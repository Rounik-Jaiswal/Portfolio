import { profile } from "@/content/profile";
import { TypedText } from "@/components/ui/typed-text";
import { LiveClock } from "@/components/ui/live-clock";

/**
 * Hero — the signature element. Frames the intro inside a "control panel"
 * (terminal-style window) to ground the page in the analytics/data world.
 * All copy comes from `content/profile.ts`.
 *
 * The entrance uses a CSS animation (`.hero-rise`) rather than a JS-driven one,
 * so this critical above-the-fold content is visible even if JS is slow or
 * disabled. Reduced-motion users skip the animation (handled in globals.css).
 */
export function Hero() {
  return (
    <header id="top" className="relative px-6 pb-16 pt-40">
      {/* Soft accent glow behind the panel. */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-16 h-[520px] w-[520px] rounded-full blur-2xl"
        style={{
          background: "radial-gradient(circle, var(--glow), transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-content">
        <div className="hero-rise overflow-hidden rounded-2xl border border-line bg-bg-elev shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)]">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-line-soft px-4 py-3 font-mono text-xs text-ink-faint">
            <span className="flex gap-1.5">
              <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" />
            </span>
            <span className="ml-2">~/portfolio — rounik@bain-cn</span>
            <span className="ml-auto">
              <LiveClock />
            </span>
          </div>

          {/* Body */}
          <div className="px-6 py-9 sm:px-9">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-[22px] bg-accent" />
              {profile.eyebrow}
            </span>

            <h1 className="mt-4 text-[clamp(36px,6.4vw,68px)] font-extrabold leading-[1.02] tracking-tight text-ink">
              {profile.firstName}{" "}
              <span className="text-accent">{profile.lastName}</span>
            </h1>

            <div className="mt-3.5 font-mono text-[clamp(13px,1.6vw,16px)] text-ink-soft">
              <TypedText phrases={profile.typedPhrases} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {profile.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-bg-tile px-3.5 py-1.5 font-mono text-xs text-ink-soft"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-5 py-3 text-sm font-semibold text-[#04201D] transition-transform hover:-translate-y-0.5"
              >
                View work →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[10px] border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
              {profile.resumePath && (
                <a
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Résumé ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
