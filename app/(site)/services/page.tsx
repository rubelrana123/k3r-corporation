import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/components/ui/Container";
import PageHero from "@/app/components/ui/PageHero";
import PhotoCaption from "@/app/components/ui/PhotoCaption";
import Reveal from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";
import SubNav from "@/app/components/ui/SubNav";
import Button from "@/app/components/ui/Button";
import Cta from "@/app/components/sections/Cta";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbJsonLd, catalogJsonLd, pageMetadata } from "@/lib/seo";
import ClientsMarquee from "@/app/components/sections/ClientsMarquee";
import { photos } from "@/lib/images";
import { sectors } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Defence, Medical, IT & General Supply in Bangladesh",
  description:
    "Bullet proof vests and helmets, anti-riot gear, marine equipment, CCTV and UVSS, computers, medical equipment and general supplies, sourced and delivered across Bangladesh.",
  path: "/services",
});

const process = [
  {
    title: "Requirement",
    body: "We study the client's tender or demand and confirm specifications, quantities and timelines.",
  },
  {
    title: "Global Sourcing",
    body: "We source and indent from trusted manufacturers in the USA, Europe and Asia, or from the local market.",
  },
  {
    title: "Quality Control",
    body: "Our quality control team checks every item against the buyer's requirements before dispatch.",
  },
  {
    title: "Delivery",
    body: "Goods are delivered as early as possible, because clients want them in hand as soon as they order.",
  },
  {
    title: "After-Sales Support",
    body: "Engineer-trained technicians provide service support with minimum response time.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Our Business", path: "/services" }])} />
      <JsonLd data={catalogJsonLd()} />
      <PageHero
        crumb="Our Business"
        eyebrow="What we do"
        title="Trading, Supply & Indenting."
        intro="From bullet proof equipment to bio-chemistry analyzers, we source, import and supply what Bangladesh's forces and institutions need, all from one trusted partner."
        photo={photos.chattogramPort}
      />
      <SubNav
        items={[
          ...sectors.map((s) => ({ id: s.id, label: s.title })),
          { id: "process", label: "How We Work" },
        ]}
      />

      <section className="py-12 lg:py-20">
        {sectors.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={s.id} id={s.id} className="scroll-mt-40 py-12 lg:py-16">
              <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Reveal from={flip ? "right" : "left"} className={flip ? "lg:order-2" : ""}>
                  <figure className="group relative aspect-4/3 overflow-hidden">
                    <Image
                      src={s.photo.src}
                      alt={s.photo.alt}
                      fill
                      sizes="(min-width:1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-1500 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-3 font-display text-7xl font-bold text-white/90 drop-shadow-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <PhotoCaption className="absolute bottom-4 left-4">{s.photo.caption}</PhotoCaption>
                  </figure>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Sector {String(i + 1).padStart(2, "0")} / {String(sectors.length).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-4xl font-bold text-ink">{s.title}</h2>
                  <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-zinc-600">{s.summary}</p>
                  <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {s.groups.map((g, gi) => (
                      <div key={g.name ?? gi}>
                        {g.name && (
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-green">
                            {g.name}
                          </p>
                        )}
                        <ul className="space-y-2.5">
                          {g.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-700">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-red" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm italic text-zinc-500">
                    Other items supplied as per clients&apos; demand.
                  </p>
                  <div className="mt-8">
                    <Button href={`/contact?sector=${s.id}`} variant="outline">
                      Request a quote
                    </Button>
                  </div>
                </Reveal>
              </Container>
            </article>
          );
        })}
      </section>

      <ClientsMarquee />

      {/* Process */}
      <section id="process" className="scroll-mt-40 bg-ink py-24 text-white lg:py-32">
        <Container>
          <Reveal>
            <SectionLabel light>How we work</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
              From requirement to after-sales, one accountable partner.
            </h2>
          </Reveal>
          <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
            <span aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 md:block" />
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.12} className="relative">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brand-red bg-ink font-display text-lg font-bold text-brand-red">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <Cta />
    </>
  );
}
