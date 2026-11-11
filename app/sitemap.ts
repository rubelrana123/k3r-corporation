import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const lastModified = new Date("2026-11-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; images?: string[] }[] = [
    { path: "", priority: 1, images: ["/images/bd/navy-frigate.jpg", "/images/bd/chattogram-port.jpg"] },
    { path: "/services", priority: 0.9, images: ["/images/bd/army-training.jpg", "/images/bd/coast-guard.jpg"] },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
  ];

  return pages.map((p) => ({
    url: `${siteConfig.url}${p.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: p.priority,
    images: p.images?.map((src) => `${siteConfig.url}${src}`),
  }));
}
