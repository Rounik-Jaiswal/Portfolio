/**
 * Home page. For now this is a placeholder that confirms the layout, theme
 * toggle, fonts, and navbar all work. In Phase 3 this will be replaced with
 * the composed sections (Hero, Stats, Experience, Projects, Skills, Contact).
 */
export default function Home() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-content flex-col items-center justify-center px-6 text-center"
    >
      <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
        Phase 2 · Foundation
      </span>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
        Layout, theme &amp; fonts are live.
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        Toggle the theme in the top-right. Sections get built next, on top of
        this foundation.
      </p>
    </section>
  );
}
