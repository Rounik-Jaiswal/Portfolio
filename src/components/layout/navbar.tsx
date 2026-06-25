"use client";

import { profile } from "@/content/profile";
import { navLinks } from "@/content/navigation";
import { ThemeToggle } from "./theme-toggle";

/**
 * Fixed top navigation. Brand on the left, section links + theme toggle on the
 * right. Links collapse on small screens (the toggle always stays visible).
 */
export function Navbar() {
  // Brand shown as "first.last" with an accent dot, derived from profile.
  const brand = `${profile.firstName}.${profile.lastName}`.toLowerCase();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line-soft bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3.5">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-ink"
        >
          {profile.firstName.toLowerCase()}
          <span className="text-accent">.</span>
          {profile.lastName.toLowerCase()}
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13.5px] text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
