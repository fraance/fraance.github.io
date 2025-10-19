import { GlassCard } from "@/components/cards";

interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  heroImage?: string;
  images?: string[];
  className?: string;
}

export function ProjectHeader({
  title,
  subtitle, 
  role,
  timeline,
  heroImage,
  images,
  className
}: ProjectHeaderProps) {
  return (
    <header className={`text-center pt-32 mb-20 scroll-animate ${className || ''}`}>
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-2 font-serif">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-gray-300">
          {subtitle}
        </p>
        
        <div className="mt-8 flex items-center justify-center space-x-4">
          <GlassCard className="px-4 py-2 rounded-full">
            <div className="text-sm flex items-center text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="inline-block w-4 h-4 mr-2">
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              Role: {role}
            </div>
          </GlassCard>
          
          <GlassCard className="px-4 py-2 rounded-full">
            <div className="text-sm flex items-center text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="inline-block w-4 h-4 mr-2">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              Timeline: {timeline}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Hero Image or Images */}
      {heroImage && (
        <div className="mt-40 max-w-4xl mx-auto">
          <GlassCard>
            <img 
              src={heroImage}
              alt={`${title} project overview`}
              className="rounded-xl w-full"
            />
          </GlassCard>
        </div>
      )}

      {images && images.length > 0 && (
        <div className="mt-40 max-w-4xl mx-auto">
          <GlassCard>
            <div className="flex flex-wrap justify-center items-center gap-4 p-4">
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  className="w-1/3 md:w-1/4 lg:w-1/5 rounded-lg shadow-lg"
                />
              ))}
            </div>
          </GlassCard>
        </div>
      )}
    </header>
  );
}