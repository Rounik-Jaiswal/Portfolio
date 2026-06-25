"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Animated pill toggle for dark/light. Uses next-themes for persistence and
 * flash-free loading. Renders a placeholder until mounted to avoid a
 * hydration mismatch (server doesn't know the theme yet).
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-7 w-[52px] flex-shrink-0 rounded-full border border-line bg-bg-tile transition-colors"
    >
      <span
        className={`absolute top-[3px] grid h-5 w-5 place-items-center rounded-full bg-accent text-[11px] transition-transform duration-300 ${
          mounted && !isDark ? "translate-x-6" : "translate-x-[3px]"
        }`}
      >
        {/* Avoid rendering theme-dependent glyph until mounted. */}
        {mounted ? (isDark ? "◐" : "◑") : ""}
      </span>
    </button>
  );
}
