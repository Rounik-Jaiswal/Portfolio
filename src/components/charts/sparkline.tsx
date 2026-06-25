"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useTheme } from "next-themes";
import type { SparkType } from "@/lib/types";

/** Preset data shapes for each sparkline mood. */
const SHAPES: Record<SparkType, number[]> = {
  up: [6, 9, 7, 12, 11, 16, 15, 20, 24],
  wave: [14, 8, 16, 9, 18, 11, 17, 10, 15],
  flat: [12, 13, 12, 14, 13, 14, 13, 15, 14],
  down: [24, 20, 21, 16, 17, 12, 13, 9, 7],
};

/**
 * A tiny D3 sparkline (area + line) using the current accent color. Redraws
 * when the theme changes so the color stays in sync.
 */
export function Sparkline({ type }: { type: SparkType }) {
  const ref = useRef<SVGSVGElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const w = 120;
    const h = 34;
    const data = SHAPES[type];

    const accent = getComputedStyle(document.body)
      .getPropertyValue("--accent")
      .trim();

    const x = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([2, w - 2]);
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data) ?? 1])
      .range([h - 3, 3]);

    const line = d3
      .line<number>()
      .x((_, i) => x(i))
      .y((d) => y(d))
      .curve(d3.curveCatmullRom);

    const area = d3
      .area<number>()
      .x((_, i) => x(i))
      .y0(h)
      .y1((d) => y(d))
      .curve(d3.curveCatmullRom);

    svg
      .append("path")
      .attr("d", area(data) ?? "")
      .attr("fill", accent)
      .attr("opacity", 0.12);

    svg
      .append("path")
      .attr("d", line(data) ?? "")
      .attr("fill", "none")
      .attr("stroke", accent)
      .attr("stroke-width", 2);
  }, [type, resolvedTheme]);

  return (
    <svg
      ref={ref}
      width="100%"
      height={34}
      viewBox="0 0 120 34"
      preserveAspectRatio="none"
      aria-hidden
    />
  );
}
