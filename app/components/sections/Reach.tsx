"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Container from "@/app/components/ui/Container";
import Counter from "@/app/components/ui/Counter";
import Reveal from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";
import { clients, partnerCountries } from "@/lib/site";

const tabs = [
  { id: "global", label: "Global Partners", items: partnerCountries },
  { id: "local", label: "Clients in Bangladesh", items: clients },
] as const;

/** Labels placed evenly on a slowly rotating ring around Dhaka. */
function Orbit({ items }: { items: readonly string[] }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-[6%] rounded-full border border-dashed border-white/20" />
      <div className="absolute inset-[26%] rounded-full border border-white/10" />
      <div className="absolute inset-0 animate-orbit">
        {items.map((name, i) => {
          const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + 44 * Math.cos(angle);
          const y = 50 + 44 * Math.sin(angle);
          return (
            <motion.div
              key={name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
            >
              <div className="animate-orbit-counter flex flex-col items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-red shadow-[0_0_0_4px_rgba(225,29,46,0.25)]" />
                <span className="whitespace-nowrap text-[11px] font-semibold text-white/80 sm:text-xs">
                  {name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="absolute inset-[34%] flex flex-col items-center justify-center rounded-full bg-brand-green text-center shadow-[0_0_80px_rgba(18,130,63,0.45)]">
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-green/30 [animation-duration:3s]" />
        <span className="relative font-display text-lg font-bold leading-tight sm:text-2xl">
          Dhaka
        </span>
        <span className="relative text-[10px] uppercase tracking-[0.2em] text-white/80">
          Bangladesh
        </span>
      </div>
    </div>
  );
}

export default function Reach() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("global");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section id="reach" className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionLabel light>Where we work</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Connecting Bangladesh with trusted suppliers across the globe.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="self-end text-[15px] leading-relaxed text-white/70">
            Whatever our clients need, we source it. Regular business transactions with
            manufacturers and suppliers worldwide let us deliver superior quality goods to
            government, defence and private organizations, on time.
          </Reveal>
        </div>

        <div className="mt-12 flex gap-8" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={t.id === active}
              onClick={() => setActive(t.id)}
              className={`relative pb-2 text-sm font-semibold transition-colors ${
                t.id === active ? "text-brand-red" : "text-white/60 hover:text-white"
              }`}
            >
              {t.label}
              {t.id === active && (
                <motion.span
                  layoutId="reach-tab"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-red"
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Orbit items={tab.items} />
            </motion.div>
          </AnimatePresence>

          <div className="space-y-12">
            <div>
              <Counter to={partnerCountries.length} suffix="+" className="font-display text-7xl font-bold text-brand-red" />
              <p className="mt-1 text-sm text-white/70">Countries we trade with</p>
            </div>
            <div>
              <Counter to={8} suffix="+" className="font-display text-7xl font-bold text-brand-red" />
              <p className="mt-1 text-sm text-white/70">Defence &amp; government forces supplied</p>
            </div>
            <div>
              <Counter to={2017} className="font-display text-7xl font-bold text-brand-red" />
              <p className="mt-1 text-sm text-white/70">Trading &amp; supplying since</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
