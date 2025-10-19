import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ProjectSectionProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function ProjectSection({ 
  children, 
  className,
  animate = true 
}: ProjectSectionProps) {
  return (
    <section className={cn(
      "mb-20",
      animate && "scroll-animate",
      className
    )}>
      {children}
    </section>
  );
}