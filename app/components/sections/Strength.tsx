import Image from "next/image";
import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";
import Button from "@/app/components/ui/Button";
import PhotoCaption from "@/app/components/ui/PhotoCaption";
import { photos } from "@/lib/images";

const strengths = [
  {
    title: "Expert Marketing Team",
    body: "A skilled marketing team backed by strong management, working with hard work and productive planning to cover every client's needs.",
    icon: (
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" strokeLinecap="round" />
    ),
  },
  {
    title: "After-Sales Support",
    body: "Known for aggressive marketing and dependable after-sales support. Our qualified service personnel give clients confidence in every product.",
    icon: (
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4zM8.5 12l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Engineer-Trained Technicians",
    body: "Technical staff trained by experienced engineers, so we can deliver service support quickly and keep response times short.",
    icon: (
      <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z" strokeLinejoin="round" />
    ),
  },
];

export default function Strength() {
  return (
    <section id="strength" className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionLabel>Our strength</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Skilled people behind every delivery.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="self-end text-[15px] leading-relaxed text-zinc-600">
            Skilled personnel across our technical, management, support and marketing teams
            work together so that what we promise is what our clients receive.
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden bg-zinc-200 md:grid-cols-3">
          {strengths.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.12} className="group relative bg-white p-8 transition-colors duration-500 hover:bg-navy sm:p-10">
              <span className="absolute right-8 top-8 font-display text-5xl font-bold text-zinc-100 transition-colors duration-500 group-hover:text-white/10">
                0{i + 1}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-10 w-10 text-brand-green transition-colors duration-500 group-hover:text-brand-red"
                aria-hidden
              >
                {s.icon}
              </svg>
              <h3 className="mt-8 font-display text-2xl font-bold text-ink transition-colors duration-500 group-hover:text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 transition-colors duration-500 group-hover:text-white/70">
                {s.body}
              </p>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />
            </Reveal>
          ))}
        </ul>

        {/* Our Ideal */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal from="left">
            <figure className="group relative aspect-4/3 overflow-hidden">
              <Image
                src={photos.armyTruck.src}
                alt={photos.armyTruck.alt}
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-1500 group-hover:scale-105"
              />
              <PhotoCaption className="absolute bottom-4 left-4">
                {photos.armyTruck.caption}
              </PhotoCaption>
            </figure>
          </Reveal>
          <Reveal from="right" delay={0.1}>
            <SectionLabel>Our ideal</SectionLabel>
            <h3 className="mt-5 font-display text-4xl font-bold leading-tight text-ink">
              Superior quality, delivered as early as possible.
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-600">
              Customers want goods in hand as soon as they place an order. Our policy is to
              deliver as early as possible, always supplying superior quality goods to each
              buyer&apos;s requirements, assured by our own quality control team.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="outline">
                Place an order
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
