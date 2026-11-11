import Container from "@/app/components/ui/Container";
import Counter from "@/app/components/ui/Counter";
import Reveal from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";
import Triangles from "@/app/components/ui/Triangles";
import Button from "@/app/components/ui/Button";
import { partnerCountries, sectors, siteConfig } from "@/lib/site";

const stats = [
  { value: siteConfig.year - siteConfig.founded, suffix: "+", label: "Years of trading & supply" },
  { value: partnerCountries.length, suffix: "+", label: "Partner countries worldwide" },
  { value: sectors.length, suffix: "", label: "Business sectors served" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <Triangles className="-right-10 top-0 h-72 w-72 lg:h-96 lg:w-96" />
      <Container className="relative">
        <Reveal>
          <SectionLabel>Who we are</SectionLabel>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Reliable and Dependable, since {siteConfig.founded}.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_280px] lg:gap-20">
          <Reveal delay={0.1} className="space-y-5 text-[15px] leading-relaxed text-zinc-600">
            <p>
              K3R Corporation is one of the leading and successful importers, exporters and general
              suppliers in Bangladesh. We trade with partners in the USA, UK, Germany, Spain, Italy,
              Turkey, Japan, Korea, Singapore, China and beyond.
            </p>
            <p>
              Our main business is trading, supply and indenting services for the Bangladesh Army,
              Navy, Air Force, Police, Border Guard Bangladesh, Coast Guard, RAB and other
              government, semi-government, autonomous and private organizations.
            </p>
            <p>
              Led by one of the country&apos;s most successful entrepreneurs, we never rest on our
              laurels and are always looking for opportunities to expand into new sectors, with
              the highest level of professionalism.
            </p>
            <div className="pt-4">
              <Button href="/#strength" variant="outline">
                Why K3R
              </Button>
            </div>
          </Reveal>

          <ul className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={0.15 + i * 0.1} from="right">
                <Counter
                  to={s.value}
                  suffix={s.suffix}
                  className="font-display text-5xl font-bold text-brand-green"
                />
                <p className="mt-1 text-sm font-semibold text-ink">{s.label}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
