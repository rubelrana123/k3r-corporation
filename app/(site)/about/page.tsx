import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/components/ui/Container";
import Counter from "@/app/components/ui/Counter";
import PageHero from "@/app/components/ui/PageHero";
import PhotoCaption from "@/app/components/ui/PhotoCaption";
import Reveal from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";
import SubNav from "@/app/components/ui/SubNav";
import Triangles from "@/app/components/ui/Triangles";
import Cta from "@/app/components/sections/Cta";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { photos } from "@/lib/images";
import { clients, partnerCountries, sectors, siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us: Trusted Defence & General Supplier Since 2017",
  description:
    "K3R Corporation is a Dhaka-based importer, exporter and general supplier serving the Bangladesh Army, Navy, Air Force, BGB, Police and Coast Guard since 2017.",
  path: "/about",
});

const values = [
  {
    title: "Professionalism",
    body: "We work with the highest level of professionalism with every government, semi-government, autonomous and private client.",
  },
  {
    title: "Quality Control",
    body: "Our own quality control team checks that every supply is superior quality and matches the buyer's requirements.",
  },
  {
    title: "Fast Delivery",
    body: "Customers want goods in hand as soon as they order. Our policy is to deliver as early as possible.",
  },
  {
    title: "After-Sales Support",
    body: "Engineer-trained technicians give efficient service support with minimum response time.",
  },
];

const teams = ["Technical", "Management", "Support", "Marketing"];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About Us", path: "/about" }])} />
      <PageHero
        crumb="About Us"
        eyebrow="Who we are"
        title="Reliable and Dependable."
        intro="One of the leading importers, exporters and general suppliers in Bangladesh, serving the nation's defence forces and institutions since 2017."
        photo={photos.navyFrigate}
      />
      <SubNav
        items={[
          { id: "story", label: "Our Story" },
          { id: "values", label: "Our Values" },
          { id: "clients", label: "Who We Serve" },
          { id: "leadership", label: "Leadership" },
          { id: "offices", label: "Offices" },
        ]}
      />

      {/* Story */}
      <section id="story" className="relative overflow-hidden py-24 lg:py-32">
        <Triangles className="-right-10 top-10 h-72 w-72" />
        <Container className="relative">
          <Reveal>
            <SectionLabel>Our story</SectionLabel>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              From a trading and supply business in {siteConfig.founded} to one of the
              country&apos;s renowned enterprises.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_300px] lg:gap-20">
            <Reveal delay={0.1} className="space-y-5 text-[15px] leading-relaxed text-zinc-600">
              <p>
                K3R Corporation began its journey in {siteConfig.founded} with trading and supply
                business. Today it is one of the fastest-growing organizations in Bangladesh, with
                many skilled people working for the development of the company.
              </p>
              <p>
                Our main business areas are trading, supply and indenting services, especially for
                the Bangladesh Navy, Army, Air Force, Police, Border Guard Bangladesh, Coast Guard
                and Rapid Action Battalion, as well as other government and non-government
                organizations.
              </p>
              <p>
                We also do considerable business with semi-government organizations, NGOs,
                multinational and private companies, and supply electro-medical equipment, chemicals
                and reagents to the Directorate General Medical Services (DGMS) and hospitals.
              </p>
              <p>
                Even with vast and diversified businesses, K3R Corporation does not rest on its
                laurels. Led by one of the most successful entrepreneurs, we are always looking for
                opportunities to expand into new sectors.
              </p>
            </Reveal>
            <ul className="grid grid-cols-2 gap-8 lg:grid-cols-1">
              {[
                { to: siteConfig.founded, suffix: "", label: "Year founded" },
                { to: partnerCountries.length, suffix: "+", label: "Partner countries" },
                { to: sectors.length, suffix: "", label: "Business sectors" },
                { to: 8, suffix: "+", label: "Forces & agencies served" },
              ].map((s, i) => (
                <Reveal as="li" key={s.label} delay={0.1 + i * 0.08} from="right">
                  <Counter to={s.to} suffix={s.suffix} className="font-display text-5xl font-bold text-brand-green" />
                  <p className="mt-1 text-sm font-semibold text-ink">{s.label}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section id="values" className="bg-ink py-24 text-white lg:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionLabel light>Our values</SectionLabel>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">
                What our clients can count on.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="self-end text-[15px] leading-relaxed text-white/70">
              Our skilled marketing team, strong management and well-qualified service personnel
              give clients confidence in every product we promote.
            </Reveal>
          </div>
          <ul className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.1} className="group relative bg-ink p-8">
                <span className="font-display text-5xl font-bold text-brand-red">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{v.body}</p>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="font-semibold uppercase tracking-[0.2em] text-white">Our teams</span>
            {teams.map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rotate-45 bg-brand-red" />
                {t}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Clients & partners */}
      <section id="clients" className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionLabel>Who we serve</SectionLabel>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Trusted by the nation&apos;s forces, sourced from around the world.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
                Clients in Bangladesh
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-px bg-zinc-200 sm:grid-cols-2">
                {clients.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 bg-white py-4 pr-4 text-sm font-medium text-ink transition-colors hover:text-brand-green"
                  >
                    <span className="h-2 w-2 shrink-0 rotate-45 bg-brand-red" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
                Business partners in
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {partnerCountries.map((c) => (
                  <li
                    key={c}
                    className="border border-zinc-200 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                  >
                    {c}
                  </li>
                ))}
                <li className="px-4 py-2 text-sm text-zinc-500">and other countries</li>
              </ul>
              <figure className="relative mt-10 aspect-video overflow-hidden">
                <Image src={photos.chattogramPort.src} alt={photos.chattogramPort.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                <PhotoCaption className="absolute bottom-4 left-4">{photos.chattogramPort.caption}</PhotoCaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section id="leadership" className="relative overflow-hidden bg-paper py-24 lg:py-32">
        <Triangles variant="brand" className="-left-24 bottom-0 h-64 w-64 -scale-x-100 opacity-40" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[320px_1fr] lg:gap-20">
          <Reveal from="left">
            <div className="relative mx-auto flex aspect-square w-64 items-center justify-center bg-white shadow-sm lg:w-full">
              <Image src="/images/k3r-logo.png" alt="K3R Corporation logo" fill sizes="320px" className="object-contain p-10" />
            </div>
          </Reveal>
          <Reveal from="right" delay={0.1}>
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              {siteConfig.owner}
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand-green">
              Owner, {siteConfig.name}
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-600">
              K3R Corporation is led by one of the most successful entrepreneurs in its field. Under
              this leadership the company has grown from a trading and supply business into a
              trusted partner for the Armed Forces and institutions across Bangladesh, always
              looking for opportunities to expand into new sectors.
            </p>
            <p className="mt-4 text-sm text-zinc-500">{siteConfig.parent}</p>
          </Reveal>
        </Container>
      </section>

      {/* Offices */}
      <section id="offices" className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionLabel>Our offices</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Based in Dhaka.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-zinc-200 md:grid-cols-2">
            {[
              { label: "Present Office", address: siteConfig.offices.present },
              { label: "Registered Office", address: siteConfig.offices.registered },
            ].map((o, i) => (
              <Reveal key={o.label} delay={i * 0.1} className="bg-white p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">{o.label}</p>
                <p className="mt-4 font-display text-2xl font-semibold leading-snug text-ink">{o.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green"
                >
                  View on map <span className="h-px w-8 bg-brand-green" />
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Cta />
    </>
  );
}
