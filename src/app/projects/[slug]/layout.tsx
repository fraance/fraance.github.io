import { ReactNode } from "react";

interface ProjectLayoutProps {
  children: ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <div className="relative w-full select-none antialiased">
      {/* Background Canvas */}
      <canvas id="bg-canvas" className="fixed top-0 left-0 w-full h-screen z-[-1]" />
      
      {/* Project Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Include Three.js and Shaders */}
      <script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        async
      />
    </div>
  );
}