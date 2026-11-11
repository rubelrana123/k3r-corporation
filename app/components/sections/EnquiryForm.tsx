"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { sectors, siteConfig } from "@/lib/site";

const field =
  "w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-zinc-400 focus:border-brand-green";
const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500";

/**
 * Quotation / enquiry form. The site is static (no server), so on submit it
 * opens the visitor's email app with a pre-filled message to K3R.
 */
export default function EnquiryForm() {
  const [sector, setSector] = useState("");
  const [sent, setSent] = useState(false);

  // Pre-select a sector when arriving from "Request a quote" (/contact?sector=marine).
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("sector");
    if (id && sectors.some((s) => s.id === id)) setSector(id);
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const sectorTitle = sectors.find((s) => s.id === get("sector"))?.title ?? "General enquiry";
    const subject = `Quotation request: ${sectorTitle}`;
    const body = [
      `Name: ${get("name")}`,
      `Organization: ${get("organization")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Sector: ${sectorTitle}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>Your name *</label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="organization" className={label}>Organization</label>
        <input id="organization" name="organization" autoComplete="organization" placeholder="e.g. Bangladesh Navy" className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>Phone *</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+880" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="sector" className={label}>Sector</label>
        <select
          id="sector"
          name="sector"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          className={field}
        >
          <option value="">General enquiry</option>
          {sectors.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>Requirement *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Items, quantities, specifications and required delivery date"
          className={field}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="bg-brand-green px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-green-dark"
        >
          Send enquiry
        </button>
        <AnimatePresence>
          {sent && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-zinc-600"
              role="status"
            >
              Your email app should open with the message ready. If it doesn&apos;t, email{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-green underline">
                {siteConfig.email}
              </a>
              .
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
