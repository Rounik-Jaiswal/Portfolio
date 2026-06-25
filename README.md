# Rounik Jaiswal - Portfolio

Personal portfolio site. Built with Next.js (App Router), TypeScript,
Tailwind CSS v4, Framer Motion, and D3.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content (the important part)

**You only ever edit files in `src/content/`.** The UI reads from these
automatically - you never have to touch component code to update the site.

| File | What it controls |
|------|------------------|
| `profile.ts` | Name, hero tagline, typed phrases, tags, email, phone, socials, resume path |
| `stats.ts` | The KPI dashboard tiles |
| `experience.ts` | The work-experience timeline |
| `projects.ts` | Project cards (add links via `repo`/`demo`) |
| `skills.ts` | Skill bars + radar chart + categories |
| `terminal.ts` | The hidden terminal's commands |
| `navigation.ts` | Navbar links |

Type definitions live in `src/lib/types.ts`, so a mistyped field shows up as a
build error rather than a broken page.

### Theming

Tailwind v4 is CSS-first - all colors, fonts, and the container width are
defined in `src/app/globals.css` inside the `@theme` and `:root[data-theme]`
blocks. Change the hex values there to re-theme the whole site. Dark/light is
handled by `next-themes` (toggle in the navbar); the choice persists.

### Resume

Replace `public/resume.pdf` with your latest. The path is set in
`profile.ts` (`resumePath`).

## Deploy

### Option A - Vercel (recommended, easiest)

1. Push this repo to GitHub.
2. Go to vercel.com → New Project → import the repo.
3. Accept the defaults and deploy. Done - auto-deploys on every push.

### Option B - GitHub Pages (static export)

1. In `next.config.ts`, set `REPO_NAME` to your repository's exact name.
2. Build a static export:
   ```bash
   EXPORT_MODE=github npm run build
   ```
   (On Windows PowerShell: `$env:EXPORT_MODE="github"; npm run build`)
3. The static site is generated in `out/`. Push that to a `gh-pages` branch,
   or use a GitHub Action to publish `out/`. The included `.nojekyll` file
   ensures the `_next/` assets are served correctly.

Note: Vercel keeps Next.js's full feature set; GitHub Pages is static-only
(fine for this portfolio).

## Project structure

```
src/
├── app/          # layout, page, globals.css (theme tokens live here)
├── components/   # UI - layout/, plus sections/charts/terminal (added in later phases)
├── content/      # ⭐ all your editable data
└── lib/          # types + site config
```
