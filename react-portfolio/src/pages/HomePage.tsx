import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { HeroAnimation } from "../components/HeroAnimation";

export function HomePage({ isScrolled }: { isScrolled: boolean }) {
    return (
        <div>
            <HeroAnimation isScrolled={isScrolled} />
            <div id="projects" className="container mx-auto px-4 py-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects
                        .filter((p) => !p.archived)
                        .map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                </div>
            </div>
        </div>
    );
}
