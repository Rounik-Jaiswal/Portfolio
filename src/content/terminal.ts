import type { TerminalCommand } from "@/lib/types";
import { projects } from "./projects";
import { profile } from "./profile";

/**
 * Commands for the hidden terminal (bottom-right button).
 * `output` can be a string, a function returning a string (for dynamic
 * content), or null to clear the screen. Simple HTML is allowed in output
 * for coloring - use the classes: .cmd (accent), .amber, .dim.
 *
 * `help` and `clear` are handled by the component, but `help` lists every
 * command here whose `listed` is true.
 */
export const terminalCommands: TerminalCommand[] = [
  {
    name: "about",
    listed: true,
    output:
      'CS undergrad @ VIT (CGPA 9.08). Analyst Intern at Bain Capability Network - Visualization CoE. I bridge <span class="amber">consulting analytics</span> and <span class="amber">engineering</span>.',
  },
  {
    name: "skills",
    listed: true,
    output:
      "consulting: survey analysis, data cuts, dashboarding · bi: excel, tableau, alteryx, think-cell · code: python, sql, react, fastapi",
  },
  {
    name: "projects",
    listed: true,
    output: () =>
      projects
        .map(
          (p) =>
            `• <span class="cmd">${p.name}</span> <span class="dim">[${p.stack
              .slice(0, 3)
              .join(", ")}]</span>`,
        )
        .join("<br>"),
  },
  {
    name: "experience",
    listed: true,
    output:
      "Bain Capability Network - Analyst Intern, Viz CoE (Jan 2026 - July 2026)<br>CDMM, VIT - AI Model Developer Intern (Summer 2025)",
  },
  {
    name: "contact",
    listed: true,
    output: () =>
      `email: <span class="amber">${profile.email}</span><br>` +
      profile.socials
        .map((s) => `${s.label.toLowerCase()}: ${s.href}`)
        .join(" · "),
  },
  {
    name: "resume",
    listed: true,
    output: () =>
      `<span class="dim">opening résumé…</span> <a href="${profile.resumePath}" target="_blank" rel="noopener noreferrer" class="cmd" style="text-decoration:underline">${profile.resumePath}</a>`,
  },
  // Fun extras (not listed in help):
  { name: "whoami", listed: false, output: "rounik - but you already knew that ;)" },
  { name: "ls", listed: false, output: "about/  projects/  skills/  experience/  secrets/" },
  {
    name: "cd secrets",
    listed: false,
    output: "<span class='amber'>nice try.</span> you actually tried 'cd secrets'? that's exactly the kind of curiosity I'd want on a team. let's talk → rounikjaiswal2502@gmail.com",
  },
];