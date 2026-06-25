/**
 * Shared type definitions for every piece of content on the site.
 * Each content file in `src/content/` is typed against one of these,
 * so a mistyped or missing field will surface as a build-time error.
 */

/* ---------- Profile / hero ---------- */
export interface SocialLink {
  label: string;
  href: string;
  /** Shown in the contact section; set false to hide. */
  external?: boolean;
}

export interface Profile {
  name: string;
  /** Split for styling: first part normal, accent part highlighted. */
  firstName: string;
  lastName: string;
  eyebrow: string; // e.g. "Analyst · Visualization CoE"
  /** Rotating phrases typed out in the hero. */
  typedPhrases: string[];
  /** Short tags shown as pills in the hero. */
  tags: string[];
  email: string;
  phone: string;
  socials: SocialLink[];
  /** Path to resume in /public, or null to hide the resume button. */
  resumePath: string | null;
}

/* ---------- KPI stats ---------- */
export type SparkType = "up" | "wave" | "flat" | "down";

export interface Stat {
  /** Numeric target the tile counts up to. */
  value: number;
  /** Decimal places to display (e.g. 2 -> 9.08). */
  decimals?: number;
  /** Optional suffix shown smaller in the accent color (e.g. "%", "+"). */
  suffix?: string;
  label: string;
  spark: SparkType;
}

/* ---------- Experience ---------- */
export interface ExperienceItem {
  period: string; // "Jan 2026 — Present"
  role: string;
  org: string;
  location: string;
  points: string[];
}

/* ---------- Projects ---------- */
export interface Project {
  /** Short category tag, e.g. "ML · REGRESSION". */
  type: string;
  name: string;
  description: string;
  stack: string[];
  /** Optional links rendered on the card. */
  repo?: string;
  demo?: string;
  link?: string;
}

/* ---------- Skills ---------- */
export interface SkillBar {
  name: string;
  /** Free-text level label, e.g. "Expert". */
  level: string;
  /** 0–100, drives the animated bar width. */
  value: number;
}

export interface RadarAxis {
  axis: string;
  /** 0–1 proportion of the radar radius. */
  value: number;
}

export interface SkillCategory {
  id: string;
  label: string;
}

export interface SkillsContent {
  categories: SkillCategory[];
  bars: SkillBar[];
  radar: RadarAxis[];
}

/* ---------- Terminal ---------- */
export interface TerminalCommand {
  /** Command the user types, e.g. "about". Matched case-insensitively. */
  name: string;
  /** Whether to list this command in `help`. */
  listed: boolean;
  /**
   * Output. Use a function for dynamic output (e.g. listing projects),
   * a string for static output, or null to clear the screen.
   */
  output: string | (() => string) | null;
}
