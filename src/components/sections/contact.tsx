import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";

/**
 * Contact section. Big call-to-action, email, and social links — all pulled
 * from content/profile.ts. The Footer (separate component) sits below this.
 */
export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line-soft px-6 py-24 text-center"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <span className="inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-[22px] bg-accent" />
            Let&apos;s talk
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-3 text-[clamp(30px,5vw,52px)] font-extrabold tracking-tight text-ink">
            Build something with me.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block font-mono text-[clamp(15px,2.4vw,22px)] text-accent hover:underline"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="rounded-[10px] border border-line px-[18px] py-2.5 text-[13.5px] text-ink-soft transition-colors hover:border-accent hover:text-accent"
              >
                {social.label} {social.external ? "↗" : ""}
              </a>
            ))}
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="rounded-[10px] border border-line px-[18px] py-2.5 text-[13.5px] text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              {profile.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
