/** Small location tag shown over a photo, e.g. "📍 Port of Chattogram". */
export default function PhotoCaption({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 bg-navy/75 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-brand-red" fill="currentColor" aria-hidden>
        <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
      </svg>
      {children}
    </span>
  );
}
