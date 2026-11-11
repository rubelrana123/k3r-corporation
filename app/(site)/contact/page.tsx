import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import PageHero from "@/app/components/ui/PageHero";
import Reveal from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";
import EnquiryForm from "@/app/components/sections/EnquiryForm";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { photos } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Mirpur DOHS, Dhaka",
  description: `Request a quotation from K3R Corporation, Mirpur DOHS, Dhaka. Call ${siteConfig.phoneDisplay} or email ${siteConfig.email}.`,
  path: "/contact",
});

const icons = {
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" strokeLinejoin="round" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 7l9 6 9-6" strokeLinejoin="round" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
};

export default function ContactPage() {
  const cards = [
    {
      icon: icons.phone,
      label: "Call us",
      value: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phone}`,
      action: "Call now",
    },
    {
      icon: icons.mail,
      label: "Email us",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      action: "Send email",
    },
    {
      icon: icons.pin,
      label: "Present office",
      value: siteConfig.offices.present,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.offices.present)}`,
      action: "Get directions",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Let's Work Together."
        intro="Tell us what you need, whether for a tender, an indent or a local supply, and our team will get back to you with a quotation."
        photo={photos.dhakaSkyline}
      />

      {/* Quick contact cards */}
      <section className="border-y border-zinc-200 bg-white">
        <Container className="grid md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col border-zinc-200 py-10 transition-colors md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8 text-brand-green transition-colors group-hover:text-brand-red" aria-hidden>
                  {c.icon}
                </svg>
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{c.label}</span>
                <span className="mt-2 font-display text-xl font-semibold leading-snug text-ink">{c.value}</span>
                <span className="mt-auto inline-flex items-center gap-3 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
                  {c.action}
                  <span className="h-px w-8 bg-brand-green transition-all duration-300 group-hover:w-14" />
                </span>
              </a>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Form + details */}
      <section className="bg-paper py-24 lg:py-32">
        <Container className="grid gap-16 lg:grid-cols-[1fr_360px] lg:gap-20">
          <Reveal>
            <SectionLabel>Request a quotation</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Send us your requirement.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-600">
              Share the items, quantities and delivery date, and we&apos;ll respond with pricing
              and availability.
            </p>
            <div className="mt-10">
              <EnquiryForm />
            </div>
          </Reveal>

          <Reveal delay={0.15} from="right" className="space-y-px self-start bg-zinc-200">
            {[
              { label: "Owner", value: siteConfig.owner },
              { label: "Present office", value: siteConfig.offices.present },
              { label: "Registered office", value: siteConfig.offices.registered },
              { label: "Mobile", value: siteConfig.phoneDisplay },
              { label: "Email", value: siteConfig.email },
            ].map((row) => (
              <div key={row.label} className="bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">{row.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink">{row.value}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Map */}
      <section aria-label="Office location map" className="relative h-[420px] bg-zinc-200">
        <iframe
          title="K3R Corporation office, Mirpur DOHS, Dhaka"
          src={`https://maps.google.com/maps?q=${encodeURIComponent("Mirpur DOHS Avenue 2 Road 11, Dhaka 1216")}&z=15&output=embed`}
          className="absolute inset-0 h-full w-full grayscale-[40%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
