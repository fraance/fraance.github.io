import BackgroundCanvas from "@/components/BackgroundCanvas";
import { Compass } from "@/components/Compass";
import { AIInteractive } from "@/components/AIInteractive";
import { PortraitHover } from "@/components/PortraitHover";
import { Navigation } from "@/components/Navigation";
import { Tagline } from "@/components/Tagline";
import { MouseCursor } from "@/components/MouseCursor";
import { ProjectList } from "@/components/ProjectList";
import { LAYOUT_SPACING } from "@/config/ui";
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <div className="relative w-full cursor-none select-none">
      {/* Background Effects */}
      <BackgroundCanvas />
      <MouseCursor />
      <PortraitHover />

      {/* Hero Section */}
      <div className={cn(
        "relative flex h-dvh w-full flex-col",
        LAYOUT_SPACING.container
      )}>
        <header className="w-full">
          <nav>
            <Navigation />
          </nav>
        </header>

        {/* Desktop Layout */}
        <main className="hidden flex-1 md:flex justify-between">
          <section className="flex h-full flex-1 flex-col justify-between">
            <div>
              <AIInteractive />
            </div>
            <div className="flex flex-1 items-center justify-center">
              <Compass />
            </div>
          </section>
          
          <section className="flex flex-1 items-center justify-end">
            <Tagline />
          </section>
        </main>

        {/* Mobile Layout */}
        <main className="flex flex-1 flex-col items-center justify-between md:hidden m-4">
          <AIInteractive />
          <Tagline />
          <Compass />
        </main>
      </div>

      {/* Projects Section */}
      <ProjectList />
    </div>
  );
}
