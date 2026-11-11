import Link from "next/link";

const styles = {
  solid:
    "bg-brand-green text-white hover:bg-brand-green-dark border border-brand-green hover:border-brand-green-dark",
  outline:
    "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
  light: "border border-white/70 text-white hover:bg-white hover:text-navy",
} as const;

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

/** "READ MORE ——" style text link whose rule extends on hover. */
export function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? "text-white" : "text-brand-green"
      }`}
    >
      {children}
      <span
        className={`h-px w-8 transition-all duration-300 group-hover:w-14 ${
          light ? "bg-white" : "bg-brand-green"
        }`}
      />
    </Link>
  );
}
