import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface GradientCardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
  gradient?: "orange" | "blue" | "custom";
  customGradient?: string;
}

export function GradientCard({ 
  icon,
  title, 
  children, 
  className,
  gradient = "orange",
  customGradient
}: GradientCardProps) {
  const gradientClasses = {
    orange: "bg-gradient-to-br from-orange-600 to-orange-800",
    blue: "bg-gradient-to-br from-blue-600 to-blue-800",
    custom: customGradient || "bg-gradient-to-br from-orange-600 to-orange-800"
  };

  return (
    <section 
      className={cn(
        "mb-20 p-10 rounded-2xl text-center text-white",
        gradient === "custom" ? customGradient : gradientClasses[gradient],
        className
      )}
    >
      <div className="flex items-center justify-center mb-10">
        {icon && <div className="mr-4">{icon}</div>}
        <h2 className="text-3xl font-bold font-serif">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}