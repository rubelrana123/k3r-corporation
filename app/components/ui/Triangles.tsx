"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const palettes = {
  brand: ["#1565c0", "#e11d2e", "#12823f"],
  soft: ["#c9dcf3", "#f7c6cb", "#bfe3cc"],
} as const;

/**
 * Decorative layered triangles, echoing the logo's blue / red / green,
 * that drift at different speeds as the page scrolls.
 */
export default function Triangles({
  className = "",
  variant = "soft",
}: {
  className?: string;
  variant?: keyof typeof palettes;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [140, -140]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const [a, b, c] = palettes[variant];

  return (
    <div
      ref={ref}
      aria-hidden
      // Hidden on phones: there's no side margin, so they'd sit behind text.
      className={`pointer-events-none absolute hidden md:block ${className}`}
    >
      <svg viewBox="0 0 300 300" className="h-full w-full overflow-visible">
        <motion.polygon
          style={{ y: y1 }}
          points="300,0 300,220 80,0"
          fill={a}
          opacity={0.85}
        />
        <motion.polygon
          style={{ y: y2 }}
          points="300,120 300,300 160,300"
          fill={b}
          opacity={0.8}
        />
        <motion.polygon
          style={{ y: y3 }}
          points="210,40 300,40 300,130"
          fill={c}
          opacity={0.9}
        />
      </svg>
    </div>
  );
}
