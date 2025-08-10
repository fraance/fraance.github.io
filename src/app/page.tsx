import BackgroundCanvas from "@/components/BackgroundCanvas";
import { Compass } from "@/components/Compass";
import { AIInteractive } from "@/components/AIInteractive";
import { PortraitHover } from "@/components/PortraitHover";
import { Navigation } from "@/components/Navigation";
import { Tagline } from "@/components/Tagline";
import { MouseCursor } from "@/components/MouseCursor";
import { ProjectList } from "@/components/ProjectList";

export default function Home() {
  return (
    <div className="relative w-full cursor-none select-none">
      {/* Background Shader */}
      <BackgroundCanvas />

      {/* Custom Mouse Cursor */}
      <MouseCursor />

      {/* Floating portrait that follows pointer */}
      <PortraitHover />

      {/* Hero Section */}
      <div className="relative flex h-dvh w-full flex-col px-8 pb-8 pt-4 md:px-12 md:pb-12 md:pt-6">
        <header className="w-full">
          <nav>
            <Navigation />
          </nav>
        </header>

        {/* Main Content for Desktop */}
        <main className="hidden flex-1 md:flex justify-between">
          <div className="flex h-full flex-1 flex-col justify-between">
            <div>
              <AIInteractive />
            </div>
            <div className="flex flex-1 items-center justify-center">
              <Compass />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <Tagline />
          </div>
        </main>

        {/* Main Content for Mobile */}
        <main className="flex flex-1 flex-col items-center justify-between md:hidden m-4">
          <div>
            <AIInteractive />
          </div>
          <div>
            <Tagline />
          </div>
          <div>
            <Compass />
          </div>
        </main>
      </div>

      {/* Projects Section */}
      <ProjectList />
    </div>
  );
}
