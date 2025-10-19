import { ContentCard, IconCard } from "@/components/cards";
import { ReactNode } from "react";

interface MetaCardData {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ProjectMetaProps {
  cards: MetaCardData[];
  className?: string;
}

export function ProjectMeta({ cards, className }: ProjectMetaProps) {
  return (
    <section className={`mb-12 scroll-animate ${className || ''}`}>
      <ContentCard>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="scroll-animate flex" data-delay={(index + 1) * 100}>
              <IconCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </ContentCard>
    </section>
  );
}