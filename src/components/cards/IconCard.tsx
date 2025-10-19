import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  hover?: boolean;
  variant?: "default" | "stone";
}

export function IconCard({ 
  icon, 
  title, 
  description, 
  className,
  iconClassName,
  hover = true,
  variant = "stone"
}: IconCardProps) {
  const variantClasses = {
    default: "bg-white",
    stone: "bg-stone-50"
  };

  return (
    <div 
      className={cn(
        "rounded-2xl p-8 h-full flex flex-col",
        variantClasses[variant],
        hover && "transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:shadow-black/5",
        className
      )}
    >
      <div className="flex items-center mb-4">
        <div className={cn("flex-shrink-0", iconClassName)}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 font-serif ml-3">
          {title}
        </h3>
      </div>
      <p className="text-slate-600 leading-relaxed flex-1">
        {description}
      </p>
    </div>
  );
}