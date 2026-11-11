"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Container from "@/app/components/ui/Container";
import { ArrowLink } from "@/app/components/ui/Button";
import { sectors, siteConfig } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSector, setActiveSector] = useState(sectors[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // Only the home page has a full-bleed hero behind a transparent header.
  const isHome = usePathname() === "/";
  const solid = scrolled || megaOpen || !isHome;
  const sector = sectors.find((s) => s.id === activeSector) ?? sectors[0];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-white text-ink shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : "bg-transparent text-white"
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="K3R Corporation home">
          <span className="relative block h-12 w-12 overflow-hidden rounded-full bg-white ring-1 ring-black/5">
            <Image
              src="/images/k3r-logo.png"
              alt=""
              fill
              sizes="48px"
              className="object-contain p-0.5"
              priority
            />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-bold tracking-wide">
              K3R CORPORATION
            </span>
            <span
              className={`mt-1 block text-[10px] uppercase tracking-[0.25em] ${
                solid ? "text-zinc-500" : "text-white/70"
              }`}
            >
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {siteConfig.nav.map((item) =>
            "mega" in item ? (
              <button
                key={item.href}
                type="button"
                aria-expanded={megaOpen}
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen((v) => !v)}
                className="group relative flex items-center gap-1 py-7 text-sm font-medium"
              >
                {item.label}
                <svg
                  viewBox="0 0 12 12"
                  className={`h-3 w-3 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <span
                  className={`absolute inset-x-0 bottom-5 h-0.5 origin-left bg-brand-red transition-transform duration-300 ${
                    megaOpen ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setMegaOpen(false)}
                className="group relative py-7 text-sm font-medium"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-5 h-0.5 origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ),
          )}
        </nav>

        <a
          href={`tel:${siteConfig.phone}`}
          className={`hidden border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors lg:inline-block ${
            solid
              ? "border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
              : "border-white/70 hover:bg-white hover:text-navy"
          }`}
        >
          Call Us
        </a>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </Container>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-full hidden border-t border-zinc-200 bg-white text-ink shadow-xl lg:block"
          >
            <Container className="grid grid-cols-[220px_1fr] gap-12 py-10">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Sectors
                </p>
                <ul className="space-y-1">
                  {sectors.map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveSector(s.id)}
                        onFocus={() => setActiveSector(s.id)}
                        className={`flex w-full items-center justify-between py-1.5 text-left text-sm font-medium transition-colors ${
                          s.id === activeSector ? "text-brand-green" : "text-zinc-500 hover:text-ink"
                        }`}
                      >
                        {s.title}
                        <span aria-hidden>›</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-16">
                    <div className="w-56 shrink-0">
                      <h3 className="font-display text-3xl font-bold">{sector.title}</h3>
                      <div className="mt-3">
                        <ArrowLink href={`/services#${sector.id}`}>Learn more</ArrowLink>
                      </div>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
                      {sector.summary}
                    </p>
                  </div>
                  <ul className="mt-8 grid grid-cols-3 gap-x-8 gap-y-3">
                    {sector.groups.flatMap((g) => g.items).map((item) => (
                      <li key={item} className="text-sm text-zinc-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-navy px-6 pt-28 text-white lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-white/10 py-4 font-display text-3xl font-semibold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-10 inline-block border border-white/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em]"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
