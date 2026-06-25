import type { Profile } from "@/lib/types";

/**
 * Your identity, hero copy, and contact details.
 * Edit anything here and the hero + contact sections update automatically.
 */
export const profile: Profile = {
  name: "Rounik Jaiswal",
  firstName: "Rounik",
  lastName: "Jaiswal", // rendered in the accent color
  eyebrow: "Analyst · Visualization CoE",

  // Rotating phrases typed out under your name in the hero.
  typedPhrases: [
    "turning data into decisions.",
    "dashboards, models & clean code.",
    "CS @ VIT → Analytics @ Bain.",
    "survey cuts to neural nets.",
  ],

  // Pills shown in the hero panel.
  tags: [
    "CS @ VIT · CGPA 9.08",
    "Bain Capability Network",
    "Analytics + Data Viz",
    "Full-stack curious",
  ],

  email: "rounikjaiswal2502@gmail.com",
  phone: "+91 81030 02037",

  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/rounik-jaiswal", external: true },
    { label: "GitHub", href: "https://github.com/Rounik-Jaiswal", external: true },
    { label: "LeetCode", href: "https://leetcode.com/u/Rounik25", external: true },
  ],

  // Drop your resume PDF into /public and set the path (e.g. "/resume.pdf").
  // Set to null to hide the resume button.
  resumePath: "/resume.pdf",
};
