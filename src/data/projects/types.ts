import { ReactNode } from "react";

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  heroImage?: string;
  images?: string[];
  gradientColors: {
    primary: string;
    secondary: string;
  };
  sections: {
    focus: {
      title: string;
      cards: Array<{
        icon: ReactNode;
        title: string;
        description: string;
      }>;
    };
    contributions: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    learnings: {
      title: string;
      quote?: string;
      insights?: Array<{
        icon: ReactNode;
        title: string;
        description: string;
      }>;
      image?: string;
    };
    outcome: {
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
    };
    meta: Array<{
      icon: ReactNode;
      title: string;
      description: string;
    }>;
  };
}