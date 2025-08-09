import BackgroundCanvas from "@/components/BackgroundCanvas";
import { Compass } from "@/components/Compass";
import { AIInteractive } from "@/components/AIInteractive";
import { PortraitHover } from "@/components/PortraitHover";
import { Navigation } from "@/components/Navigation";
import { Tagline } from "@/components/Tagline";
import { MouseCursor } from "@/components/MouseCursor";

export default function Home() {
  return (
    <div className="min-h-dvh w-full relative cursor-none overflow-hidden select-none">
      {/* Background Shader */}
      <BackgroundCanvas />

      {/* Custom Mouse Cursor */}
      <MouseCursor />

      {/* Floating portrait that follows pointer */}
      <PortraitHover />

      <div className="content-wrapper flex flex-col h-full px-8 md:px-12 pt-4 md:pt-6 pb-8 md:pb-12">
        {/* Header Navigation */}
        <header className="w-full">
          <nav className="flex justify-between items-start">
            {/* Left side - AI Interactive */}
            <AIInteractive />

            {/* Right side - Navigation */}
            <Navigation />
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center text-center">
          {/* Compass */}
          <div>
            <Compass />
          </div>

          {/* Tagline */}
          <Tagline />
        </main>
      </div>
    </div>
  );
}
