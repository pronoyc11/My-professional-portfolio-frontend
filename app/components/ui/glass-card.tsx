import { cn } from "@/app/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-white/10 bg-white/5 shadow-[0_35px_90px_-55px_rgba(0,0,0,0.7)] backdrop-blur-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
