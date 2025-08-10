'use client';

import { useState, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: {
    outcome: string;
    role: string;
    focus: string;
  };
  imageUrl: string;
  href: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Focus on Code",
    description: {
      outcome: "A new feature was launched.",
      role: "Lead Developer",
      focus: "Frontend Development"
    },
    imageUrl: "https://placehold.co/800x500/1a2b3c/ffffff?text=Project+One",
    href: "#"
  },
  {
    id: 2,
    title: "Level of Detail", 
    description: {
      outcome: "Improved user engagement by 20%.",
      role: "UI/UX Designer",
      focus: "User Research"
    },
    imageUrl: "https://placehold.co/800x500/c2185b/ffffff?text=Project+Two",
    href: "#"
  },
  {
    id: 3,
    title: "Collaborative Design",
    description: {
      outcome: "Streamlined design workflow.",
      role: "Design Lead", 
      focus: "Design Systems"
    },
    imageUrl: "https://placehold.co/800x500/388e3c/ffffff?text=Project+Three",
    href: "#"
  },
  {
    id: 4,
    title: "UX Research",
    description: {
      outcome: "Validated product-market fit.",
      role: "Researcher",
      focus: "Market Analysis"
    },
    imageUrl: "https://placehold.co/800x500/f57c00/ffffff?text=Project+Four",
    href: "#"
  }
];

export function ProjectList() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col justify-center min-h-screen py-32 px-[5%] relative z-20"
    >
      <div className="w-full max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.href}
            className="flex items-baseline border-b border-white/20 first:border-t text-[#E2E2E2] transition-colors duration-400 cursor-none relative group hover:text-white"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <span className="text-sm font-inter mr-8 text-white/50 py-16 md:py-16">
              ({project.id.toString().padStart(2, '0')})
            </span>
            
            <div className="flex flex-row justify-between items-stretch w-full transition-transform duration-400 group-hover:translate-x-5">
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight py-16 md:py-16">
                {project.title}
              </h2>
              
              <div className="flex flex-col w-1/2">
                <div className={`
                  text-base leading-relaxed text-white/80 text-right self-end overflow-hidden transition-all duration-500 ease-in-out
                  ${hoveredProject === project.id 
                    ? 'max-h-48 opacity-100' 
                    : 'max-h-0 opacity-0'
                  }
                `}>
                  <p className={`
                    transition-all duration-400 delay-200
                    ${hoveredProject === project.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                    }
                  `}>
                    Outcome: {project.description.outcome}
                  </p>
                  <p className={`
                    transition-all duration-400 delay-300
                    ${hoveredProject === project.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                    }
                  `}>
                    Role: {project.description.role}
                  </p>
                  <p className={`
                    transition-all duration-400 delay-500
                    ${hoveredProject === project.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                    }
                  `}>
                    Focus Area: {project.description.focus}
                  </p>
                </div>
                <div className="flex-1" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}