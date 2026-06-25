import type { Project } from "@/lib/types";

/**
 * Projects and case work, shown as cards.
 * Optional links per project: `repo`, `demo`, or a generic `link`.
 * Confidential cases intentionally have no links.
 */
export const projects: Project[] = [
  {
    type: "Internal Analytics Tool",
    name: "Agentic AI Dashboard Generator",
    description:
      "Prompt-driven analytics tool: upload a dataset, get automated analysis and an auto-generated dashboard from natural-language prompts.",
    stack: ["Vite", "React.js", "Tailwind", "FastAPI", "REST APIs"],
    // repo: "",
    // demo: "",
  },
  {
    type: "Confidential Case",
    name: "Client Process Visualization Dashboard",
    description:
      "Interactive workflow dashboard built from process manuals — execution flow, ownership, dependencies, and key checkpoints for case teams.",
    stack: ["Miro", "Mural", "Excel"],
  },
  {
    type: "Confidential HR Case",
    name: "Excel Org Selection Model",
    description:
      "Dynamic org-selection model allocating open roles via roster picks or new-hire inputs, with auto-populated fields and live KPI/summary tabs.",
    stack: ["Advanced Excel", "Data Validation", "Dynamic Formulas", "HR Analytics"],
  },
  {
    type: "Confidential Case",
    name: "Survey Cutter & Segment Analysis",
    description:
      "Excel survey cutters and segmentation views supporting response comparison and structured, insight-ready analysis for case teams.",
    stack: ["Excel", "Survey Analysis"],
  },
  {
    type: "ML · Regression",
    name: "Laptop Price Prediction",
    description:
      "Random Forest price model — R² 0.9356, MAE 109.56, RMSE 163.43 after tuning and feature engineering.",
    stack: ["Python", "Pandas", "scikit-learn"],
    // Add the GitHub repo link from your resume here:
    // repo: "https://github.com/Rounik-Jaiswal/...",
  },
  {
    type: "Finance · Pipeline",
    name: "StockSeer — Financial Data Analytics",
    description:
      "End-to-end stock analysis pipeline using technical indicators and sentiment, with a React interface for visualization and prediction outputs.",
    stack: ["Python", "XGBoost", "Pandas", "yFinance", "React.js"],
  },
];
