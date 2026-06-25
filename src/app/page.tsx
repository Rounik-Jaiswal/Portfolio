import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Stats } from "@/components/sections/stats";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

/**
 * Home page - composes all sections in scroll order. Each section reads its
 * own data from `content/`. The terminal Easter egg mounts globally via the
 * layout, not here.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}