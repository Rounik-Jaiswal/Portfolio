import type { SkillsContent } from "@/lib/types";

/**
 * Skills section data.
 * - `bars`:   the animated proficiency bars (value 0–100).
 * - `radar`:  the D3 radar chart axes (value 0–1).
 * - `categories`: the labels shown as chips above the bars.
 *
 * Note: `level` labels and bar/radar values are self-assessed estimates -
 * adjust them to match how you'd describe yourself.
 */
export const skills: SkillsContent = {
  categories: [
    { id: "consulting", label: "Consulting Analytics" },
    { id: "bi", label: "BI Tools" },
    { id: "programming", label: "Programming" },
  ],

  bars: [
    { name: "Survey Analysis & Data Cuts", level: "Advanced", value: 92 },
    { name: "Dashboarding & Viz (Tableau/Miro)", level: "Advanced", value: 90 },
    { name: "Advanced Excel & think-cell", level: "Expert", value: 95 },
    { name: "Python · Pandas · scikit-learn", level: "Strong", value: 85 },
    { name: "SQL · Alteryx", level: "Proficient", value: 78 },
    { name: "React · Tailwind · FastAPI", level: "Proficient", value: 80 },
  ],

  radar: [
    { axis: "Analytics", value: 0.92 },
    { axis: "Viz/BI", value: 0.9 },
    { axis: "Excel", value: 0.95 },
    { axis: "Python/ML", value: 0.85 },
    { axis: "Web Dev", value: 0.8 },
    { axis: "SQL/Data", value: 0.78 },
  ],
};
