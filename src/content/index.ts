/**
 * Barrel export - lets components import content from one place:
 *   import { profile, projects } from "@/content";
 *
 * Everything the site renders comes from these files. To update the site,
 * you should only ever need to edit files in this `content/` folder.
 */
export { profile } from "./profile";
export { stats } from "./stats";
export { experience } from "./experience";
export { projects } from "./projects";
export { skills } from "./skills";
export { terminalCommands } from "./terminal";
