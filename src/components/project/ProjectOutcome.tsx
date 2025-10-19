import { GradientCard } from "@/components/cards";
import { ReactNode } from "react";

interface ProjectOutcomeProps {
  title: string;
  metric: {
    value: string;
    description: string;
  };
  achievements: Array<{
    text: string;
    icon?: ReactNode;
  }>;
  healthMetrics?: {
    title: string;
    description: string;
    metrics?: Array<{
      label: string;
      value: string;
    }>;
  };
  gradient?: "orange" | "blue";
  className?: string;
}

export function ProjectOutcome({
  title,
  metric,
  achievements,
  healthMetrics,
  gradient = "orange",
  className
}: ProjectOutcomeProps) {
  const CheckIcon = () => (
    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" className="animated-check"></polyline>
    </svg>
  );

  const HealthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" className="w-6 h-6">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );

  return (
    <GradientCard
      title={title}
      gradient={gradient}
      className={className}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="text-white text-center">
          <p className="text-7xl md:text-8xl font-bold">
            {metric.value}
          </p>
          <p className="text-xl font-semibold mt-1" 
             dangerouslySetInnerHTML={{__html: metric.description}} />
        </div>
        
        <div className="text-white text-left max-w-lg space-y-6">
          <div>
            {achievements.map((achievement, index) => (
              <p key={index} className="flex items-start mb-3">
                {achievement.icon || <CheckIcon />}
                {achievement.text}
              </p>
            ))}
          </div>
          
          {healthMetrics && (
            <>
              <hr className={`opacity-50 ${
                gradient === "orange" ? "border-orange-400" : "border-blue-400"
              }`} />
              <div>
                <div className="flex items-center mb-2">
                  <HealthIcon />
                  <h3 className="text-lg font-bold ml-3">{healthMetrics.title}</h3>
                </div>
                <div className="pl-9 text-sm">
                  <p>{healthMetrics.description}</p>
                  {healthMetrics.metrics && healthMetrics.metrics.map((metric, index) => (
                    <p key={index} className="mt-1">
                      <strong>{metric.label}:</strong> {metric.value}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </GradientCard>
  );
}