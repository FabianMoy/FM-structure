import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost-dark" | "accent-dark";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5",
  "ghost-dark": "border border-white/40 text-white hover:border-white hover:bg-white/10",
  "accent-dark": "bg-cyan text-ink hover:bg-[#5fe3f5]",
};

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
    variants[variant],
    className,
  );
}
