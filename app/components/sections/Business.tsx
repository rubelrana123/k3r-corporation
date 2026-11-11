"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";
import { ArrowLink } from "@/app/components/ui/Button";
import PhotoCaption from "@/app/components/ui/PhotoCaption";
import { sectors } from "@/lib/site";


export default function Business() {
  const [activeId, setActiveId] = useState(sectors[0].id);
  const index = sectors.findIndex((s) => s.id === activeId);
  const sector = sectors[index];

  return (
    <section id="business" className="relative overflow-hidden bg-paper py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionLabel>What we do</SectionLabel>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            One trusted source for defence, technical and general supply.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mt-10 flex gap-6 overflow-x-auto pb-1 [scrollbar-width:none] sm:gap-8"
            role="tablist"
            aria-label="Business sectors"
          >
            {sectors.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={s.id === activeId}
                onClick={() => setActiveId(s.id)}
                className={`relative shrink-0 pb-2 text-sm font-semibold transition-colors ${
                  s.id === activeId ? "text-brand-green" : "text-zinc-500 hover:text-ink"
                }`}
              >
                {s.title}
                {s.id === activeId && (
                  <motion.span
                    layoutId="business-tab"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-green"
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>
      </Container>

      <div className="mt-10 lg:mx-auto lg:max-w-[1400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={sector.id}
            className="grid lg:grid-cols-2"
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* Visual: wipes in from the left */}
            <motion.figure
              className="relative aspect-4/3 overflow-hidden lg:aspect-auto lg:min-h-120"
              variants={{
                hidden: { clipPath: "inset(0 100% 0 0)" },
                show: { clipPath: "inset(0 0% 0 0)" },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="absolute inset-0"
                variants={{ hidden: { scale: 1.15 }, show: { scale: 1 } }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={sector.photo.src}
                  alt={sector.photo.alt}
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-navy/70 to-transparent" />
              {/* Big sector number + caption */}
              <span className="absolute left-6 top-4 font-display text-7xl font-bold leading-none text-white/90 drop-shadow-lg sm:text-8xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <motion.div
                className="absolute bottom-5 left-6 right-6"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                transition={{ delay: 0.5 }}
              >
                <PhotoCaption>{sector.photo.caption}</PhotoCaption>
              </motion.div>
            </motion.figure>

            {/* Copy: staggered fade */}
            <motion.div
              className="flex flex-col justify-center bg-white px-6 py-12 sm:px-12 lg:px-16"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } } }}
            >
              <motion.p
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400"
              >
                Sector {String(index + 1).padStart(2, "0")} / {String(sectors.length).padStart(2, "0")}
              </motion.p>
              <motion.h3
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="mt-3 font-display text-4xl font-bold text-ink"
              >
                {sector.title}
              </motion.h3>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-600"
              >
                {sector.summary}
              </motion.p>

              <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {sector.groups.map((g, gi) => (
                  <div key={g.name ?? gi}>
                    {g.name && (
                      <motion.p
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-green"
                      >
                        {g.name}
                      </motion.p>
                    )}
                    <ul className="space-y-2">
                      {g.items.map((item) => (
                        <motion.li
                          key={item}
                          variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                          className="flex items-start gap-2.5 text-sm text-zinc-700"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-red" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                className="mt-10"
              >
                <ArrowLink href={`/contact?sector=${sector.id}`}>Request a quote</ArrowLink>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
