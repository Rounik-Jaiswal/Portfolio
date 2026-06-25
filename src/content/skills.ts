import type { SkillsContent } from "@/lib/types";

/**
 * Skills section data.
 * - `bars`:   the animated proficiency bars (value 0-100). Each bar has a
 *             `category` matching one of the `categories` ids below; the
 *             category chips filter which bars are shown.
 * - `radar`:  the D3 radar chart axes (value 0-1). Always shows everything.
 * - `categories`: the toggle chips above the bars.
 *
 * Note: `level` labels and bar/radar values are self-assessed estimates -
 * adjust them to match how you'd describe yourself.
 */
export const skills: SkillsContent = {
  categories: [
    { id: "consulting", label: "Consulting Analytics" },
    { id: "programming", label: "Programming" },
  ],

  bars: [
    { name: "Survey Analysis & Data Cuts", level: "Advanced", value: 90, category: "consulting" },
    { name: "Dashboarding & Viz", level: "Advanced", value: 95, category: "consulting" },
    { name: "Advanced Excel & think-cell", level: "Strong", value: 88, category: "consulting" },
    { name: "Python · Pandas · Numpy", level: "Strong", value: 85, category: "programming" },
    { name: "SQL · Alteryx", level: "Proficient", value: 80, category: "programming" },
    { name: "React · Tailwind · FastAPI", level: "Strong", value: 92, category: "programming" },
  ],

  radar: [
    { axis: "Analytics", value: 0.92 },
    { axis: "Viz/BI", value: 0.85 },
    { axis: "Excel", value: 0.88 },
    { axis: "Python/ML", value: 0.85 },
    { axis: "Web Dev", value: 0.9 },
    { axis: "SQL/Data", value: 0.85 },
  ],
};