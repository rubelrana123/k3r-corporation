"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Container from "@/app/components/ui/Container";
import { ArrowLink } from "@/app/components/ui/Button";
import PhotoCaption from "@/app/components/ui/PhotoCaption";
import { photos } from "@/lib/images";

const SLIDE_MS = 7000;

const slides = [
  {
    tab: "Defence Supply",
    eyebrow: "Army · Navy · Air Force · BGB · Coast Guard",
    lines: ["Equipping the", "Forces that", "Protect Bangladesh"],
    photo: photos.navyFrigate,
    position: "object-[70%_center]",
    href: "/services",
  },
  {
    tab: "Global Sourcing",
    eyebrow: "Import · Export · Indenting",
    lines: ["Sourced Worldwide.", "Delivered through", "Chattogram."],
    photo: photos.chattogramPort,
    position: "object-center",
    href: "/#reach",
  },
  {
    tab: "Proudly Bangladeshi",
    eyebrow: "Dhaka · Since 2017",
    lines: ["Reliable and", "Dependable, from", "the Heart of Dhaka."],
    photo: photos.dhakaSkyline,
    position: "object-bottom",
    href: "/about",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_MS,
    );
    return () => clearTimeout(id);
  }, [index, paused]);

  const slide = slides[index];

  return (
    <section className="relative h-svh min-h-160 overflow-hidden bg-navy text-white">
      {/* Background images: crossfade + slow Ken Burns zoom */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.photo.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: SLIDE_MS / 1000 + 1.5, ease: "linear" }}
          >
            <Image
              src={slide.photo.src}
              alt={slide.photo.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover ${slide.position}`}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-r from-navy/90 via-navy/55 to-navy/20" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-navy/80 to-transparent" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-center pt-20">
        <Container>
          <h1 className="sr-only">
            K3R Corporation: defence, marine, medical, IT and general supplier for the Bangladesh
            Armed Forces and institutions since 2017
          </h1>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
            >
              <div className="relative mb-5">
                {/* Accent rule that grows in from the left edge of the screen */}
                <motion.span
                  aria-hidden
                  className="absolute right-full top-1/2 mr-6 h-0.5 w-[50vw] origin-right bg-brand-red"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <motion.p
                  className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slide.eyebrow}
                </motion.p>
              </div>
              <p className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
                {slide.lines.map((line, i) => (
                  <span key={line} className="block overflow-hidden pb-1">
                    <motion.span
                      className="block"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.3 + i * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </p>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <ArrowLink href={slide.href} light>
                  Read the story
                </ArrowLink>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>

      {/* Slide tabs */}
      <div className="absolute inset-x-0 bottom-8">
        <Container className="flex items-end justify-between gap-6">
          <div
            className="flex gap-6 sm:gap-10"
            role="tablist"
            aria-label="Hero slides"
          >
            {slides.map((s, i) => (
              <button
                key={s.tab}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => setIndex(i)}
                className={`relative pb-3 text-left text-xs font-semibold transition-colors sm:text-sm ${
                  i === index
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {s.tab}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white/20" />
                {i === index && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute bottom-0 left-0 h-0.5 bg-brand-red"
                    initial={{ width: paused ? "100%" : "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: paused ? 0 : SLIDE_MS / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.photo.src}
                className="hidden md:block"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <PhotoCaption>{slide.photo.caption}</PhotoCaption>
              </motion.div>
            </AnimatePresence>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-navy"
            >
              {paused ? (
                <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
                  <path d="M3 2l7 4-7 4z" fill="currentColor" />
                </svg>
              ) : (
                <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
                  <path d="M3 2h2v8H3zM7 2h2v8H7z" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
