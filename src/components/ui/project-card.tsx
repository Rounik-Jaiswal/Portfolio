import type { Project } from "@/lib/types";

/**
 * A single project card. Shows an index, category type, name, description, and
 * the tech stack as tags. Renders repo/demo/link buttons only when present
 * (confidential cases have none).
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const links = [
    project.repo && { label: "Code ↗", href: project.repo },
    project.demo && { label: "Demo ↗", href: project.demo },
    project.link && { label: "View ↗", href: project.link },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-bg-elev p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent">
      <div className="font-mono text-xs text-ink-faint">
        P{String(index + 1).padStart(2, "0")}
      </div>
      <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-accent-2">
        {project.type}
      </div>
      <h3 className="mt-1 text-lg font-bold text-ink">{project.name}</h3>
      <p className="mt-3 flex-1 text-sm text-ink-soft">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-line bg-bg-tile px-2.5 py-1 font-mono text-[11px] text-ink-soft"
          >
            {tech}
          </span>
        ))}
      </div>

      {links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-soft transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
