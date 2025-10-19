import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export function ContentCard({ 
  children, 
  className,
  padding = "lg"
}: ContentCardProps) {
  const paddingClasses = {
    sm: "p-6 sm:p-8",
    md: "p-8 sm:p-10", 
    lg: "p-8 sm:p-12"
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-3xl text-gray-800",
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}