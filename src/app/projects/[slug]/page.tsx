import { notFound } from "next/navigation";
import { ProjectHeader, ProjectSection, ProjectInsight, ProjectOutcome, ProjectMeta } from "@/components/project";
import { ContentCard, IconCard, CenteredCard } from "@/components/cards";
import { marathonSetProject, loyaltyProject, ProjectData } from "@/data/projects";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import { MouseCursor } from "@/components/MouseCursor";
import { ProjectScrollAnimations } from "@/components/project/ProjectScrollAnimations";
import { LAYOUT_SPACING } from "@/config/ui";
import { cn } from "@/utils/cn";

const projects: Record<string, ProjectData> = {
  "marathon-set": marathonSetProject,
  "loyalty": loyaltyProject,
};

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Interactive Portfolio`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="relative w-full cursor-none select-none">
      {/* Background Effects */}
      <BackgroundCanvas />
      <MouseCursor />
      <ProjectScrollAnimations />

      {/* SVG Gradients */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {slug === "marathon-set" ? (
              <>
                <stop offset="0%" style={{ stopColor: '#3B82F6' }} />
                <stop offset="50%" style={{ stopColor: '#60A5FA' }} />
                <stop offset="100%" style={{ stopColor: '#14B8A6' }} />
              </>
            ) : (
              <>
                <stop offset="0%" style={{ stopColor: '#F97316' }} />
                <stop offset="50%" style={{ stopColor: '#FB923C' }} />
                <stop offset="100%" style={{ stopColor: '#FDBA74' }} />
              </>
            )}
          </linearGradient>
        </defs>
      </svg>

      <div className={cn(
        "relative max-w-5xl mx-auto",
        LAYOUT_SPACING.container
      )}>
        {/* Project Header */}
        <ProjectHeader
          title={project.title}
          subtitle={project.subtitle}
          role={project.role}
          timeline={project.timeline}
          heroImage={project.heroImage}
          images={project.images}
        />

        {/* Initial Research Focus */}
        <ProjectSection>
          <ContentCard>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-10 font-serif">
                {project.sections.focus.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                {project.sections.focus.cards.map((card, index) => (
                  <div key={index} className="scroll-animate flex" data-delay={(index + 1) * 100}>
                    <IconCard
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Contributions Section */}
            <div className="mt-20 text-center scroll-animate">
              <h2 className="text-3xl font-bold text-center mb-10 font-serif">
                {project.sections.contributions.title}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-900">
                {project.sections.contributions.items.map((item, index) => (
                  <div key={index} className="scroll-animate flex" data-delay={(index + 1) * 100}>
                    <CenteredCard
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Learnings Section */}
            <div className="mt-20 scroll-animate">
              <h2 className="text-3xl font-bold text-center mb-12 font-serif">
                {project.sections.learnings.title}
              </h2>

              {project.sections.learnings.quote && (
                <div className="text-center mb-12">
                  <p className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-800 font-serif">
                    {project.sections.learnings.quote}
                  </p>
                </div>
              )}

              {project.sections.learnings.image && (
                <div className="max-w-3xl mx-auto mb-12 bg-stone-50 p-4 rounded-2xl scroll-animate" data-delay={100}>
                  <img
                    src={project.sections.learnings.image}
                    alt="Project insights visualization"
                    className="rounded-xl w-full"
                  />
                </div>
              )}

              {project.sections.learnings.insights && (
                <div className="space-y-4 max-w-3xl mx-auto text-left">
                  {project.sections.learnings.insights.map((insight, index) => (
                    <ProjectInsight
                      key={index}
                      icon={insight.icon}
                      title={insight.title}
                      description={insight.description}
                      borderColor={slug === "marathon-set" ? "blue" : "orange"}
                      delay={(index + 2) * 100}
                    />
                  ))}
                </div>
              )}
            </div>
          </ContentCard>
        </ProjectSection>

        {/* Outcome Section */}
        <ProjectOutcome
          title={project.sections.outcome.title}
          metric={project.sections.outcome.metric}
          achievements={project.sections.outcome.achievements}
          healthMetrics={project.sections.outcome.healthMetrics}
          gradient={slug === "marathon-set" ? "blue" : "orange"}
        />

        {/* Meta Information */}
        <ProjectMeta cards={project.sections.meta} />
      </div>
    </div>
  );
}