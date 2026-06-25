import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";

/**
 * Home page — composes the sections in scroll order. Each section reads its
 * own data from `content/`. Remaining sections (Experience, Projects, Skills,
 * Contact) are added in later phases.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
    </>
  );
}