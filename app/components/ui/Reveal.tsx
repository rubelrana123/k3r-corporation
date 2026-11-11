"use client";

import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Direction the content travels in from. */
  from?: "bottom" | "left" | "right";
  as?: "div" | "li" | "section";
};

const offsets = {
  bottom: { x: 0, y: 40 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
};

/** Fades and slides its children in the first time they scroll into view. */
export default function Reveal({
  children,
  className,
  delay = 0,
  from = "bottom",
  as = "div",
}: RevealProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
