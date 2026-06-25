"use client";

import { useEffect, useState } from "react";

/**
 * Types out each phrase, pauses, deletes, and moves to the next — looping.
 * Renders a blinking caret after the text. Reduced-motion users see the first
 * phrase statically (no typing loop).
 */
export function TypedText({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setText(phrases[0] ?? "");
      return;
    }
    const current = phrases[phraseIndex] ?? "";

    // Pause at the end of a fully-typed phrase before deleting.
    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(hold);
    }

    // Move to the next phrase once fully deleted.
    if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const step = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        );
      },
      deleting ? 34 : 62,
    );
    return () => clearTimeout(step);
  }, [text, deleting, phraseIndex, phrases, reduced]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block h-[1.1em] w-[9px] translate-y-[2px] animate-blink bg-accent align-baseline" />
    </span>
  );
}
