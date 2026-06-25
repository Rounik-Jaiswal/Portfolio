"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useTheme } from "next-themes";
import { useReveal } from "@/lib/hooks/use-reveal";
import type { RadarAxis } from "@/lib/types";

/**
 * D3 radar (spider) chart of skill axes. Draws concentric grid rings, axis
 * spokes with labels, and the filled skill polygon (which scales up on first
 * view). Redraws on theme change to keep colors in sync.
 */
export function RadarChart({ data }: { data: RadarAxis[] }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const size = 300;
    const r = 110;
    const cx = size / 2;
    const cy = size / 2;

    const styles = getComputedStyle(document.body);
    const accent = styles.getPropertyValue("--accent").trim();
    const accent3 = styles.getPropertyValue("--accent-3").trim();
    const grid = styles.getPropertyValue("--grid").trim();
    const ink = styles.getPropertyValue("--ink-soft").trim();

    const angle = (i: number) =>
      (Math.PI * 2 * i) / data.length - Math.PI / 2;

    // Concentric grid rings
    [0.25, 0.5, 0.75, 1].forEach((level) => {
      svg
        .append("polygon")
        .attr(
          "points",
          data
            .map(
              (_, i) =>
                `${cx + Math.cos(angle(i)) * r * level},${
                  cy + Math.sin(angle(i)) * r * level
                }`,
            )
            .join(" "),
        )
        .attr("fill", "none")
        .attr("stroke", grid)
        .attr("stroke-width", 1);
    });

    // Axis spokes + labels
    data.forEach((d, i) => {
      svg
        .append("line")
        .attr("x1", cx)
        .attr("y1", cy)
        .attr("x2", cx + Math.cos(angle(i)) * r)
        .attr("y2", cy + Math.sin(angle(i)) * r)
        .attr("stroke", grid);

      svg
        .append("text")
        .attr("x", cx + Math.cos(angle(i)) * (r + 22))
        .attr("y", cy + Math.sin(angle(i)) * (r + 18))
        .attr("fill", ink)
        .attr("font-size", "12px")
        .attr("font-family", "var(--font-mono), monospace")
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .text(d.axis);
    });

    // Skill polygon
    const points = data.map((d, i) => [
      cx + Math.cos(angle(i)) * r * d.value,
      cy + Math.sin(angle(i)) * r * d.value,
    ]);

    const poly = svg
      .append("polygon")
      .attr("points", points.map((p) => p.join(",")).join(" "))
      .attr("fill", accent)
      .attr("opacity", 0.18)
      .attr("stroke", accent)
      .attr("stroke-width", 2);

    points.forEach((p) =>
      svg
        .append("circle")
        .attr("cx", p[0])
        .attr("cy", p[1])
        .attr("r", 3.2)
        .attr("fill", accent3),
    );

    // Grow-in animation on first view (skip if reduced motion).
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (visible && !reduce) {
      poly
        .attr("transform", `translate(${cx},${cy}) scale(0)`)
        .transition()
        .duration(900)
        .ease(d3.easeCubicOut)
        .attr("transform", "translate(0,0) scale(1)");
    }
  }, [data, visible, resolvedTheme]);

  return (
    <div ref={ref} className="grid place-items-center">
      <svg
        ref={svgRef}
        width="100%"
        height={300}
        viewBox="0 0 300 300"
        className="max-w-[330px]"
        aria-label="Radar chart of skill proficiency"
      />
    </div>
  );
}
