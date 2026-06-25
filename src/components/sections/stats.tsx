import { stats } from "@/content/stats";
import { SectionHeading } from "@/components/ui/section-heading";
import { KpiTile } from "@/components/ui/kpi-tile";

/**
 * "At a glance" dashboard band. Renders the KPI tiles from content/stats.ts.
 * The grid adapts as you add or remove tiles.
 */
export function Stats() {
  return (
    <section id="stats" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="At a glance"
          title="The numbers"
          subtitle="A snapshot of outcomes across academics, ML modelling, and analytics work."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <KpiTile key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
