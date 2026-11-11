import type { Metadata } from "next";
import { sectors, siteConfig } from "@/lib/site";

/** The share preview image (app/opengraph-image.jpg). */
const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "K3R Corporation: Defence, Marine, Medical, IT and General Supplier in Bangladesh",
};

/**
 * Per-page metadata with a canonical URL and matching Open Graph / Twitter
 * tags. Next merges metadata shallowly: a page's `openGraph` replaces the
 * inherited one, including the file-based share image, so it's restated here.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [shareImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [shareImage.url] },
  };
}

const abs = (path: string) => `${siteConfig.url}${path}`;
const orgId = abs("/#organization");

/** Company details for Google's knowledge panel and local results. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": orgId,
        name: siteConfig.name,
        alternateName: "K3R",
        slogan: siteConfig.tagline,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: abs("/icon.png"),
        image: abs("/opengraph-image.jpg"),
        email: siteConfig.email,
        telephone: siteConfig.phone,
        foundingDate: String(siteConfig.founded),
        founder: { "@type": "Person", name: siteConfig.owner },
        parentOrganization: { "@type": "Organization", name: "RootTOP Group" },
        sameAs: [siteConfig.facebook],
        address: {
          "@type": "PostalAddress",
          streetAddress: "House 1277, Road 11 (New), Avenue 2, Mirpur DOHS",
          addressLocality: "Dhaka",
          postalCode: "1216",
          addressCountry: "BD",
        },
        location: [
          {
            "@type": "Place",
            name: "Registered Office",
            address: {
              "@type": "PostalAddress",
              streetAddress: "49 East Tejturi Bazar, Tejgaon",
              addressLocality: "Dhaka",
              postalCode: "1215",
              addressCountry: "BD",
            },
          },
        ],
        areaServed: { "@type": "Country", name: "Bangladesh" },
        knowsAbout: sectors.map((s) => s.title),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          contactType: "sales",
          areaServed: "BD",
          availableLanguage: ["English", "Bengali"],
        },
      },
      {
        "@type": "WebSite",
        "@id": abs("/#website"),
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": orgId },
        inLanguage: "en",
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

/** Everything K3R supplies, as a catalogue Google can read. */
export function catalogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `${siteConfig.name} supply catalogue`,
    url: abs("/services"),
    provider: { "@id": orgId },
    itemListElement: sectors.map((s) => ({
      "@type": "OfferCatalog",
      name: s.title,
      description: s.summary,
      url: abs(`/services#${s.id}`),
      itemListElement: s.groups
        .flatMap((g) => g.items)
        .map((item) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: item } })),
    })),
  };
}
