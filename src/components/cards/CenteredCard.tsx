import { cn } from "@/utils/cn";

interface CenteredCardProps {
  title: string;
  description: string;
  className?: string;
  hover?: boolean;
  variant?: "default" | "stone";
}

export function CenteredCard({ 
  title, 
  description, 
  className,
  hover = true,
  variant = "stone"
}: CenteredCardProps) {
  const variantClasses = {
    default: "bg-white text-gray-800",
    stone: "bg-stone-50 text-slate-900"
  };

  return (
    <div 
      className={cn(
        "p-6 rounded-xl text-center h-full flex flex-col justify-center",
        variantClasses[variant],
        hover && "transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:shadow-black/5",
        className
      )}
    >
      <p className="font-semibold text-lg mb-2">
        {title}
      </p>
      <p className={cn(
        "text-sm",
        variant === "stone" ? "text-slate-600" : "text-gray-600"
      )}>
        {description}
      </p>
    </div>
  );
}