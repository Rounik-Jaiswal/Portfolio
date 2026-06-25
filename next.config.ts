import type { NextConfig } from "next";

/**
 * Deployment modes
 * --------------------------------------------------------------------------
 * • Vercel (default): leave everything as-is, just `git push` and import the
 *   repo into Vercel. Server features stay available.
 *
 * • GitHub Pages (static export): set the env var EXPORT_MODE=github before
 *   building. This enables `output: "export"` and sets the basePath so assets
 *   resolve correctly under https://<user>.github.io/<repo>/.
 *   See README for the exact commands.
 * --------------------------------------------------------------------------
 */

const isGitHubPages = process.env.EXPORT_MODE === "github";

// 👇 If deploying to GitHub Pages, set this to your repository name.
const REPO_NAME = "portfolio";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Static export only when targeting GitHub Pages.
  ...(isGitHubPages && {
    output: "export",
    basePath: `/${REPO_NAME}`,
    assetPrefix: `/${REPO_NAME}/`,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
