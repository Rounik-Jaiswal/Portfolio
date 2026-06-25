import { profile } from "@/content/profile";

/**
 * Site footer. Sits below all sections. The terminal hint nods to the
 * easter egg added in a later phase.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft py-8 text-center font-mono text-[12.5px] text-ink-faint">
      <p>
        designed &amp; built by {profile.name.toLowerCase()} · {year}
        <span className="text-accent">
          {" "}
          - press the terminal to explore
        </span>
      </p>
    </footer>
  );
}
