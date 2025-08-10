'use client';

import { useState, useRef } from 'react';
import { projects, type Project } from "@/data/portfolio";
import { LAYOUT_SPACING } from "@/config/ui";
import { cn } from "@/utils/cn";

interface ProjectItemProps {
  project: Project;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function ProjectItem({ project, isHovered, onMouseEnter, onMouseLeave }: ProjectItemProps) {
  const descriptionClasses = cn(
    "text-base leading-relaxed text-white/80 text-right self-end overflow-hidden",
    "transition-all duration-500 ease-in-out",
    isHovered ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
  );

  const textAnimationClasses = (delay: number) => cn(
    "transition-all duration-400",
    `delay-${delay}`,
    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
  );

  return (
    <a
      href={project.href}
      className={cn(
        "flex items-baseline border-b border-white/20 first:border-t",
        "text-[#E2E2E2] transition-colors duration-400 cursor-none",
        "relative group hover:text-white"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="text-sm font-inter mr-8 text-white/50 py-16 md:py-16">
        ({project.id.toString().padStart(2, '0')})
      </span>
      
      <div className="flex flex-row justify-between items-stretch w-full transition-transform duration-400 group-hover:translate-x-5">
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight py-16 md:py-16">
          {project.title}
        </h2>
        
        <div className="flex flex-col w-1/2">
          <div className={descriptionClasses}>
            <p className={textAnimationClasses(200)}>
              Outcome: {project.description.outcome}
            </p>
            <p className={textAnimationClasses(300)}>
              Role: {project.description.role}
            </p>
            <p className={textAnimationClasses(500)}>
              Focus Area: {project.description.focus}
            </p>
          </div>
          <div className="flex-1" />
        </div>
      </div>
    </a>
  );
}

export function ProjectList() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef}
      className={cn(
        "flex flex-col justify-center min-h-screen relative z-20",
        LAYOUT_SPACING.section
      )}
    >
      <div className="w-full max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            isHovered={hoveredProject === project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          />
        ))}
      </div>
    </section>
  );
}