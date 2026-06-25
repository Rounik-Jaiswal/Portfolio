import type { ExperienceItem } from "@/lib/types";

/**
 * Work experience, newest first. Renders as the scrolling timeline.
 * Add a new role by prepending another object to this array.
 */
export const experience: ExperienceItem[] = [
  {
    period: "Jan 2026 — Present",
    role: "Analyst Intern — Visualization CoE",
    org: "Bain Capability Network",
    location: "Gurugram (Hybrid)",
    points: [
      "Supported confidential client & internal cases: process visualization, survey analytics, dashboard workflows, and insight-ready deliverables.",
      "Converted client process documentation into an interactive Miro dashboard — mapping steps, handoffs, checkpoints, dependencies, and navigation flows.",
      "Rebuilt and migrated process dashboards from Miro to Mural, preserving workflow logic, collaboration structure, and confidentiality.",
      "Built Excel-based survey cutters, data cuts, segmentation views, and validation checks to help case teams analyze respondent groups.",
      "Contributing to an internal agentic AI tool that generates dashboards from prompts (Vite, React.js, Tailwind, REST APIs, FastAPI).",
    ],
  },
  {
    period: "Summer 2025",
    role: "AI Model Developer Intern",
    org: "Center of Disaster Management & Mitigation, VIT",
    location: "Remote",
    points: [
      "Built and optimized ML models on cyclone data (1988–2023), reaching 98% accuracy forecasting cyclone severity in the Bay of Bengal.",
      "Prepared analytical reports on AI-driven cyclone forecasts and disaster-risk mitigation to support national preparedness insights.",
    ],
  },
];
