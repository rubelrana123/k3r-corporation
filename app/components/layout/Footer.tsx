import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/ui/Container";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-white">
      <Container className="py-12">
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 transition-colors hover:text-brand-green"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-zinc-600 transition-colors hover:text-brand-green"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 transition-colors hover:text-brand-green"
          >
            Facebook
          </a>
          <Link href="/credits" className="text-sm text-zinc-600 transition-colors hover:text-brand-green">
            Photo credits
          </Link>
        </nav>

        <div className="mt-10 flex flex-col gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="relative block h-14 w-14">
              <Image src="/images/k3r-logo.png" alt="K3R Corporation" fill sizes="56px" className="object-contain" />
            </span>
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-green">
                <span className="text-brand-red">›</span> {siteConfig.tagline}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{siteConfig.parent}</p>
            </div>
          </div>
          <p className="text-xs text-zinc-500">
            Copyright © {siteConfig.year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
