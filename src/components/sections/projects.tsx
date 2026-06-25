import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";

/**
 * Projects grid. Two columns on desktop, one on mobile. Each card reveals on
 * scroll with a slight stagger. Data comes from content/projects.ts.
 */
export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects & case work"
          subtitle="A mix of consulting deliverables and engineering builds."
        />

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.08}>
              <div className="h-full">
                <ProjectCard project={project} index={i} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
