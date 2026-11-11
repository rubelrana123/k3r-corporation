import { clients } from "@/lib/site";

/** Infinite horizontal ticker of the organizations K3R supplies. */
export default function ClientsMarquee() {
  const row = [...clients, ...clients];
  return (
    <section aria-label="Organizations we serve" className="overflow-hidden border-y border-zinc-200 bg-white py-8">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row.map((name, i) => (
          <span
            key={i}
            aria-hidden={i >= clients.length}
            className="flex items-center gap-10 pr-10 font-display text-2xl font-semibold uppercase tracking-wide text-zinc-300 transition-colors hover:text-navy sm:text-3xl"
          >
            {name}
            <span className="h-2 w-2 rotate-45 bg-brand-red" />
          </span>
        ))}
      </div>
    </section>
  );
}
