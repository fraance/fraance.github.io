import type { Project } from "../data/projects";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredImageIndex, setHoveredImageIndex] = useState(0);

    useEffect(() => {
        if (isHovered && project.hoveredImages && project.hoveredImages.length > 1) {
            const interval = setInterval(() => {
                setHoveredImageIndex(
                    (prevIndex) => (prevIndex + 1) % project.hoveredImages!.length
                );
            }, 1000); // Change image every second

            return () => clearInterval(interval);
        }
    }, [isHovered, project.hoveredImages]);

    const cardContent = (
        <div
            className="group relative w-full aspect-square bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setHoveredImageIndex(0); // Reset index on mouse leave
            }}
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 ease-in-out"
                style={{
                    backgroundImage: `url('${project.backgroundImage}')`,
                    backgroundColor: project.backgroundImage.startsWith("#")
                        ? project.backgroundImage
                        : undefined,
                }}
            />
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out">
                {isHovered && project.hoveredImages ? (
                    <div className="h-[80%] w-full flex items-center justify-center">
                        <img
                            className="h-full w-full object-contain"
                            src={project.hoveredImages[hoveredImageIndex]}
                            alt={`${project.title} hovered ${hoveredImageIndex + 1}`}
                        />
                    </div>
                ) : project.images ? (
                    <div className="h-[80%] w-full flex items-center justify-center">
                        {project.images.map((image, index) => (
                            <img
                                key={index}
                                className="h-full w-full object-contain"
                                src={image}
                                alt={`${project.title} ${index + 1}`}
                            />
                        ))}
                    </div>
                ) : project.logos ? (
                    <div className="absolute top-4 right-5 flex items-center justify-center gap-5 z-10">
                        {project.logos.map((logo, index) => (
                            <img
                                key={index}
                                className="h-9 object-top"
                                src={logo}
                                alt={`${project.title} Logo ${index + 1}`}
                            />
                        ))}
                    </div>
                ) : null}
            </div>

            <div
                className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-5 transition-all duration-300 ease-in-out flex flex-col items-center justify-center text-center ${isHovered ? "h-2/5" : "h-[10%]"
                    }`}
            >
                <p
                    className={`text-xs text-gray-500 tracking-widest order-1 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {project.topics}
                </p>
                <h5
                    className={`text-xl mt-0 mb-1 order-2 transition-all duration-300 ${isHovered ? "font-bold" : "font-normal"
                        }`}
                >
                    {project.title}
                </h5>
                <p
                    className={`text-xs text-gray-700 mt-0.5 mb-0.5 order-3 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {project.description}
                </p>
                <p
                    className={`text-xs text-gray-500 tracking-wider mt-4 order-4 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {project.date}
                </p>
            </div>

            {project.logos && project.images && (
                <div className="absolute top-4 right-5 flex items-center justify-center gap-5 z-10">
                    {project.logos.map((logo, index) => (
                        <img
                            key={index}
                            className="h-9 object-top"
                            src={logo}
                            alt={`${project.title} Logo ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );

    return project.link ? (
        <Link to={project.link}>{cardContent}</Link>
    ) : (
        <div onClick={() => alert("Coming soon!")}>{cardContent}</div>
    );
}
