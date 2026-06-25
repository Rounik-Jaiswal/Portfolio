import type { Stat } from "@/lib/types";

/**
 * KPI tiles in the "At a glance" dashboard band.
 * Each tile counts up to `value` and shows a small sparkline.
 * Add or remove tiles freely — the grid adapts.
 */
export const stats: Stat[] = [
  {
    value: 9.08,
    decimals: 2,
    label: "CGPA / 10",
    spark: "up",
  },
  {
    value: 98,
    suffix: "%",
    label: "Cyclone forecast accuracy",
    spark: "wave",
  },
  {
    value: 0.94,
    decimals: 2,
    label: "R² · price model",
    spark: "up",
  },
  {
    value: 35,
    suffix: "+",
    label: "Years of cyclone data modeled",
    spark: "flat",
  },
];
