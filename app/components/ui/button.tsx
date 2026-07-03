import Link from "next/link";
import { cn } from "@/app/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  target?: string;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  className,
  variant = "primary",
  target,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40",
    variant === "primary" &&
      "border border-white/10 bg-white/10 text-white shadow-[0_18px_50px_-28px_rgba(138,184,255,0.8)] hover:-translate-y-0.5 hover:bg-white/15",
    variant === "secondary" &&
      "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/10",
    variant === "ghost" &&
      "text-slate-200 hover:text-white",
    className
  );

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
