import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-2",
        hover && "transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20",
        className
      )}
    >
      {children}
    </div>
  );
}