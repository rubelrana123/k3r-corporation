"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import PhotoCaption from "@/app/components/ui/PhotoCaption";
import type { Photo } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Inner-page hero: breadcrumb, eyebrow and title on the left,
 * a photo bleeding off the right edge that wipes in.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  photo,
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  photo: Photo;
  crumb: string;
}) {
  return (
    <section className="relative bg-white pt-20">
      <div className="grid lg:min-h-[560px] lg:grid-cols-2">
        <div className="flex items-center px-4 py-14 sm:px-6 lg:py-20 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] lg:pr-16">
          <div>
            <motion.nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 text-xs text-zinc-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="hover:text-brand-green">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-zinc-600">{crumb}</span>
            </motion.nav>

            <div className="relative">
              <motion.span
                aria-hidden
                className="absolute right-full top-1/2 mr-6 h-0.5 w-[50vw] origin-right bg-brand-red"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease }}
              />
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {eyebrow}
              </motion.p>
            </div>

            <h1 className="mt-5 overflow-hidden font-display text-5xl font-bold leading-[0.95] text-ink sm:text-6xl">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
              >
                {title}
              </motion.span>
            </h1>

            <motion.p
              className="mt-6 max-w-md text-[15px] leading-relaxed text-zinc-600"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              {intro}
            </motion.p>
          </div>
        </div>

        <motion.figure
          className="relative aspect-4/3 overflow-hidden lg:aspect-auto"
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 1.1, delay: 0.1, ease }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease }}
          >
            <Image src={photo.src} alt={photo.alt} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </motion.div>
          <PhotoCaption className="absolute bottom-4 left-4">{photo.caption}</PhotoCaption>
        </motion.figure>
      </div>
    </section>
  );
}
