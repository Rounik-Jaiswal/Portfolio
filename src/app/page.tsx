import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

/**
 * Home page — composes all sections in scroll order. Each section reads its
 * own data from `content/`. The terminal Easter egg is added next (it mounts
 * globally via the layout, not here).
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}