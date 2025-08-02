import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export function ProjectPage() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {/* Add more project details here */}
        </div>
    );
}
