import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/components/ui/Container";
import SectionLabel from "@/app/components/ui/SectionLabel";
import { photos } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Photo Credits",
    description: "Licences and photographers for the images used on the K3R Corporation website.",
    path: "/credits",
  }),
  // Needed for licensing, but not useful in search results.
  robots: { index: false, follow: true },
};

export default function CreditsPage() {
  return (
    <Container className="pb-24 pt-36">
      <SectionLabel>Photo credits</SectionLabel>
      <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">
        Photography from across Bangladesh
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-600">
        Photos on this site come from Wikimedia Commons and are used under the licences listed
        below. They illustrate the sectors K3R Corporation serves and do not imply any
        endorsement by, or affiliation with, the photographers or the organizations pictured.
      </p>

      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Object.values(photos).map((p) => (
          <li key={p.src}>
            <div className="relative aspect-3/2 overflow-hidden bg-paper">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover" />
            </div>
            <p className="mt-3 text-sm font-semibold text-ink">{p.caption}</p>
            <p className="mt-1 text-xs text-zinc-500">
              {p.credit.author} ·{" "}
              <a href={p.credit.source} className="text-brand-green underline" target="_blank" rel="noopener noreferrer">
                {p.credit.license}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
