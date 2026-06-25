/**
 * Site-wide metadata. Used for the browser tab title, SEO, and the
 * link-preview card shown when the site URL is shared (Open Graph).
 * Edit these when you have your final domain and an OG image.
 */
export const siteConfig = {
  title: "Rounik Jaiswal - Analytics & Engineering",
  description:
    "CS @ VIT and Analyst at Bain Capability Network. Portfolio of consulting analytics, data visualization, machine learning, and full-stack work.",
  /** Your live URL once deployed (used for OG tags). */
  url: "https://rounik-jaiswal.vercel.app",
  /** Path in /public to a 1200x630 preview image, or null. */
  ogImage: "/og-image.png" as string | null,
  author: "Rounik Jaiswal",
  keywords: [
    "Rounik Jaiswal",
    "portfolio",
    "data analytics",
    "data visualization",
    "consulting analyst",
    "machine learning",
    "Bain Capability Network",
    "VIT",
  ],
} as const;