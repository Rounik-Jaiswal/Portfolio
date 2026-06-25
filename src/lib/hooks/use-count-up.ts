"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a value up from 0 to `target` over `duration` ms using an ease-out
 * curve, but only once `active` becomes true (so it triggers on scroll).
 * Returns the current animated value. Respects reduced motion by jumping
 * straight to the target.
 */
export function useCountUp(target: number, active: boolean, duration = 1300) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let frame: number;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}
