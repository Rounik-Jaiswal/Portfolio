"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a 0–1 value for how far the referenced element has progressed past
 * the middle of the viewport. Used to grow the timeline's progress line as the
 * user scrolls through it. Updates on scroll/resize via rAF throttling.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;

    const compute = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      // How far the viewport's midpoint has travelled into the element.
      const passed = vh * 0.5 - rect.top;
      const ratio = Math.min(Math.max(passed / rect.height, 0), 1);
      setProgress(ratio);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, progress };
}
