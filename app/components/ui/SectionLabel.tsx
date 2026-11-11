export default function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-white/70" : "text-zinc-500"
      }`}
    >
      <span className={`h-px w-10 ${light ? "bg-white/50" : "bg-zinc-400"}`} />
      {children}
    </p>
  );
}
