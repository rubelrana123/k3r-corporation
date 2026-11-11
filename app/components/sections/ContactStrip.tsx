import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export default function ContactStrip() {
  const items = [
    { label: "Present Office", value: siteConfig.offices.present },
    { label: "Registered Office", value: siteConfig.offices.registered },
    {
      label: "Get in touch",
      value: (
        <>
          <a href={`tel:${siteConfig.phone}`} className="block hover:underline">
            {siteConfig.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="block hover:underline">
            {siteConfig.email}
          </a>
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="bg-brand-green-dark py-12 text-white">
      <Container className="grid gap-8 lg:grid-cols-[1fr_3fr] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-2xl font-bold">Visit or contact us</h2>
          <p className="mt-2 text-sm text-white/70">Owner: {siteConfig.owner}</p>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                {item.label}
              </p>
              <div className="mt-2 text-sm leading-relaxed">{item.value}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
