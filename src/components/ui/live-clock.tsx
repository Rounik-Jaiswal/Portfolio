"use client";

import { useEffect, useState } from "react";

/**
 * Live HH:MM:SS clock for the hero's terminal title bar. Renders nothing until
 * mounted to avoid a server/client hydration mismatch (time differs).
 */
export function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-GB"));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time ?? ""}</span>;
}
