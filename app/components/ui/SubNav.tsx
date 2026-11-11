"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Container from "@/app/components/ui/Container";

/**
 * Sticky in-page section menu that sits under the header and
 * underlines whichever section is currently on screen.
 */
export default function SubNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky top-20 z-40 border-y border-zinc-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <nav
          aria-label="On this page"
          className="flex h-full gap-6 overflow-x-auto [scrollbar-width:none] sm:gap-8"
        >
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative flex shrink-0 items-center text-sm font-medium transition-colors ${
                active === item.id ? "text-brand-green" : "text-zinc-600 hover:text-ink"
              }`}
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="subnav-underline"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-green"
                />
              )}
            </a>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden shrink-0 border border-brand-green px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-green transition-colors hover:bg-brand-green hover:text-white md:inline-block"
        >
          Contact us
        </Link>
      </Container>
    </div>
  );
}
