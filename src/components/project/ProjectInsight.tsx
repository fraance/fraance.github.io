import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface ProjectInsightProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  borderColor?: "orange" | "blue" | "custom";
  customBorderColor?: string;
  delay?: number;
}

export function ProjectInsight({ 
  icon,
  title, 
  description, 
  className,
  borderColor = "orange",
  customBorderColor,
  delay = 0
}: ProjectInsightProps) {
  const borderColorClasses = {
    orange: "border-orange-400",
    blue: "border-blue-400", 
    custom: customBorderColor || "border-orange-400"
  };

  return (
    <div 
      className={cn(
        "bg-stone-50 p-5 rounded-lg flex items-start space-x-4 border-l-4 scroll-animate",
        borderColor === "custom" ? customBorderColor : borderColorClasses[borderColor],
        className
      )}
      data-delay={delay}
    >
      <div className="w-6 h-6 flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">
          {title}
        </h3>
        <p className="text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}