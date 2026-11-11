import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/ui/Reveal";
import Triangles from "@/app/components/ui/Triangles";
import Button from "@/app/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 lg:py-32">
      <Triangles className="-right-16 bottom-0 h-80 w-80 sm:h-[26rem] sm:w-[26rem]" />
      <Triangles variant="brand" className="right-24 top-6 h-40 w-40 opacity-60" />
      <Container className="relative">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Ready to work together?
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-600">
            Whether you need defence equipment, medical supplies, IT hardware or everyday
            operational items, we want to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">
              Request a quotation
            </Button>
            <Button href={`tel:${siteConfig.phone}`} variant="outline">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
