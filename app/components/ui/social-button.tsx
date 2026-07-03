import Link from "next/link";
import { cn } from "@/app/lib/utils";

type SocialButtonProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};

export function SocialButton({ href, label, children, className }: SocialButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/10 hover:text-white",
        className
      )}
    >
      {children}
    </Link>
  );
}
