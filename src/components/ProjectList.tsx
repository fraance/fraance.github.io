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

  // --- FIX ---
  // The animation classes are now split.

  // 1. Classes for the PARENT container of the text.
  // This class now correctly holds the nth-child selectors which apply
  // the staggered delays to its direct children (<p> tags).
  const descWrapperClasses = cn(
    "flex-1 text-right content-end",
    "[&>p]:transition-all [&>p]:duration-300 [&>p]:ease-in-out", // Define child transition properties once on the parent.
    "[&>p:nth-child(1)]:[transition-delay:100ms]",
    "[&>p:nth-child(2)]:[transition-delay:200ms]",
    "[&>p:nth-child(3)]:[transition-delay:300ms]"
  );

  // 2. Classes for the CHILD text elements (<p> tags).
  // These classes define the base transition and what properties change.
  const textClasses = cn(
    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
  );

  return (
    <a
      href={project.href}
      className={cn(
        "flex items-baseline border-b border-white/20 first:border-t",
        "text-[#E2E2E2] transition-colors duration-400 cursor-none",
        "relative group"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="text-sm font-inter mr-8 text-white/50 py-16 md:py-16">
        ({project.id.toString().padStart(2, '0')})
      </span>

      <div className="flex flex-row justify-between items-stretch w-full ">
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight py-16 md:py-16 transition-transform duration-400  group-hover:translate-x-5">
          {project.title}
        </h2>

        <div className="flex flex-col justify-center">
          {/* The parent div gets the classes with the nth-child selectors */}
          <div className={descWrapperClasses}>
            {/* The children <p> tags get the base animation classes */}
            <p className={textClasses}>
              Outcome: {project.description.outcome}
            </p>
            <p className={textClasses}>
              Role: {project.description.role}
            </p>
            <p className={textClasses}>
              Focus Area: {project.description.focus}
            </p>
          </div>
          <div className='flex-1'></div>
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