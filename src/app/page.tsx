import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";

/**
 * Home page — composes the sections in scroll order. Each section reads its
 * own data from `content/`. Remaining sections (Skills, Contact) are added in
 * the next phase.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Experience />
      <Projects />
    </>
  );
}