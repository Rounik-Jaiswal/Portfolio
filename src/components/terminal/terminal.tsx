"use client";

import { useEffect, useRef, useState } from "react";
import { terminalCommands } from "@/content/terminal";
import { profile } from "@/content/profile";

/** A single rendered line in the terminal (HTML string + kind). */
interface Line {
  html: string;
  kind: "input" | "output";
}

/** Resolve a command's output (string | function | null) to an HTML string. */
function resolveOutput(output: string | (() => string) | null): string | null {
  if (typeof output === "function") return output();
  return output;
}

/**
 * Hidden terminal easter egg. A floating button opens an overlay with a fake
 * shell. Commands come from content/terminal.ts; `help` and `clear` are
 * handled here. Mounted globally via the layout so it works on every section.
 *
 * Accessibility: opens with focus on the input, closes on Escape or backdrop
 * click, and the trigger is a real button.
 */
export function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const booted = useRef(false);

  // Print the boot line once, the first time the terminal opens.
  useEffect(() => {
    if (open && !booted.current) {
      booted.current = true;
      setLines([
        {
          kind: "output",
          html:
            '<span class="dim">rounik-portfolio v1.0 · type</span> <span class="cmd">help</span> <span class="dim">to begin</span>',
        },
      ]);
    }
    if (open) inputRef.current?.focus();
  }, [open]);

  // Close on Escape (listener only while open).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Keep the output scrolled to the bottom as lines are added.
  useEffect(() => {
    const el = outputRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const listed = terminalCommands.filter((c) => c.listed);

  function run(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;

    const next: Line[] = [
      { kind: "input", html: `<span class="cmd">➜ ~</span> ${escapeHtml(cmd)}` },
    ];

    const lower = cmd.toLowerCase();

    if (lower === "clear") {
      setLines([]);
      return;
    }

    if (lower === "help") {
      const list = listed
        .map((c) => `<span class="cmd">${c.name}</span>`)
        .join(" ");
      next.push({
        kind: "output",
        html: `available: ${list} <span class="cmd">clear</span>`,
      });
      setLines((prev) => [...prev, ...next]);
      return;
    }

    const match = terminalCommands.find((c) => c.name.toLowerCase() === lower);
    if (match) {
      const out = resolveOutput(match.output);
      if (out === null) {
        setLines([]);
        return;
      }
      next.push({ kind: "output", html: out });

      // Side effect: the `resume` command also opens the PDF in a new tab.
      if (lower === "resume" && profile.resumePath) {
        window.open(profile.resumePath, "_blank", "noopener,noreferrer");
      }
    } else {
      next.push({
        kind: "output",
        html: `<span class="amber">command not found:</span> ${escapeHtml(
          cmd,
        )} <span class="dim">- try 'help'</span>`,
      });
    }

    setLines((prev) => [...prev, ...next]);
  }

  return (
    <>
      {/* Floating trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open terminal"
        className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-[10px] border border-line bg-bg-elev px-3.5 py-2.5 font-mono text-xs text-accent transition-transform hover:-translate-y-0.5 hover:border-accent"
      >
        ▌ open terminal
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-3 backdrop-blur-md sm:p-5"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="flex h-[min(440px,80dvh)] w-[min(680px,100%)] flex-col overflow-hidden rounded-xl border border-line bg-[var(--term-bg)] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5)]">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-[var(--term-border)] px-3.5 py-2.5 font-mono text-xs text-ink-faint">
              <span className="flex shrink-0 gap-1.5">
                <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" />
                <span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" />
                <span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" />
              </span>
              <span className="ml-1 truncate">rounik@portfolio: ~</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="ml-auto shrink-0 cursor-pointer whitespace-nowrap hover:text-accent"
              >
                ✕ esc
              </button>
            </div>

            {/* Output */}
            <div
              ref={outputRef}
              className="term-output flex-1 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed text-[var(--term-text)]"
            >
              {lines.map((line, i) => (
                <div key={i} dangerouslySetInnerHTML={{ __html: line.html }} />
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-[var(--term-border)] px-4 py-2.5 font-mono text-[13px]">
              <span className="text-accent">➜ ~</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    run(value);
                    setValue("");
                  }
                }}
                placeholder="type 'help'…"
                autoComplete="off"
                spellCheck={false}
                className="min-w-0 flex-1 bg-transparent text-base text-[var(--term-text)] outline-none placeholder:text-ink-faint sm:text-[13px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Escape user-typed text before inserting it into output HTML. */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}