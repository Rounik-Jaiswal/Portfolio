"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Fades + slides children up when they scroll into view. Uses framer-motion's
 * `whileInView` (it handles reduced-motion through the viewport `once` flag and
 * our global CSS reduced-motion rule). `delay` lets you stagger siblings.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
