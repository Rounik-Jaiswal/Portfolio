import type { Stat } from "@/lib/types";

/**
 * KPI tiles in the "At a glance" dashboard band.
 * Each tile counts up to `value` and shows a small sparkline.
 * Add or remove tiles freely - the grid adapts.
 *
 * These are intentionally self-evident at a glance (no project-specific
 * metrics that need a footnote to understand).
 */
export const stats: Stat[] = [
  {
    value: 9.08,
    decimals: 2,
    label: "CGPA / 10",
    spark: "up",
  },
  {
    value: 6,
    suffix: "+",
    label: "Projects shipped",
    spark: "up",
  },
  {
    value: 2,
    label: "Internships",
    spark: "flat",
  },
  {
    value: 10,
    suffix: "+",
    label: "Tools & languages",
    spark: "wave",
  },
];