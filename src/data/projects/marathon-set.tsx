import { ProjectData } from "./types";

export const marathonSetProject: ProjectData = {
  slug: "marathon-set",
  title: "Marathon Product Set",
  subtitle: "Enhancing the discovery and purchase of curated product sets to increase cross-selling and customer confidence.",
  role: "UX Research Intern",
  timeline: "June–August 2025",
  heroImage: "https://raw.githubusercontent.com/fraance/fraance.github.io/64ac3f753f28b08c9684168e4dbb8c9218760519/marathonfistpicture.png",
  gradientColors: {
    primary: "from-blue-600",
    secondary: "to-blue-800"
  },
  sections: {
    focus: {
      title: "Initial Research Focus",
      cards: [
        {
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path className="shape-element" fill="url(#icon-gradient)"
                d="M12 2C16 8 16 8 22 12C16 16 16 16 12 22C8 16 8 16 2 12C8 8 8 8 12 2Z" />
            </svg>
          ),
          title: "The Problem",
          description: "Marathon runners often face decision fatigue and time constraints when shopping for gear. We needed to test if curated marathon outfits could simplify the experience, increase trust, and drive higher apparel sales."
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path className="shape-element" fill="url(#icon-gradient)"
                d="M12 1.5L13.5 8L20 5L15 9.5L22.5 12L15 14.5L20 19L13.5 16L12 22.5L10.5 16L4 19L9 14.5L1.5 12L9 9.5L4 5L10.5 8Z" />
            </svg>
          ),
          title: "The Goal", 
          description: "How might we offer product sets that are easily accessible and match user needs—specifically for marathoners?"
        }
      ]
    },
    contributions: {
      title: "My Contributions",
      items: [
        { title: "Conducted", description: "1:1 User Interviews" },
        { title: "Led Synthesis", description: "of Qualitative Feedback" },
        { title: "Co-Developed", description: "Interview Guides" },
        { title: "Reported Insights", description: "to Guide Iteration" }
      ]
    },
    learnings: {
      title: "What We Learned",
      image: "https://raw.githubusercontent.com/fraance/fraance.github.io/64ac3f753f28b08c9684168e4dbb8c9218760519/marathonSet/marathonset.png",
      insights: [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="url(#icon-gradient)" stroke="url(#icon-gradient)" strokeWidth="1"
              strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 flex-shrink-0 mt-1">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          ),
          title: "Comfort is King",
          description: "Runners valued comfort over everything—avoiding irritation, blisters, and sizing issues."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="w-6 h-6 flex-shrink-0 mt-1">
              <path d="M14.5 17.5 3 6V3h3l11.5 14.5" />
              <path d="M13 19H3" />
              <path d="m18 14 3-3-3-3" />
              <path d="m21 11-9 9" />
              <path d="M9.5 6.5 21 18V3H9.5Z" />
            </svg>
          ),
          title: "Customization is Crucial",
          description: "Users wanted options to swap items (e.g., shorts to tights) and customize colors."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="w-6 h-6 flex-shrink-0 mt-1">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ),
          title: "Visuals Drive Confidence", 
          description: "Virtual mannequin suggestions were frequent – users wanted to \"see\" outfits visually before buying."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="w-6 h-6 flex-shrink-0 mt-1">
              <path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l10-10a1 1 0 0 0 0-1.41L12 2Z" />
              <path d="M7 7h.01" />
            </svg>
          ),
          title: "Trust Outweighs Price",
          description: "Trust in the brand and gear functionality often outweighed cost concerns for serious runners."
        }
      ]
    },
    outcome: {
      title: "Project Outcome",
      metric: {
        value: "7/7",
        description: "Participants Validated<br>the Concept"
      },
      achievements: [
        {
          text: "Generated actionable UX insights that influenced the product direction for the **Q4 campaign**."
        },
        {
          text: "Findings helped shape future iterations, including plans for interactive outfit customization tools."
        }
      ],
      healthMetrics: {
        title: "Health Metrics to Quantify Impact",
        description: "Note: The campaign is scheduled for a future launch. Metrics will be updated post-launch.",
        metrics: [
          { label: "Click-Through Rate (CTR)", value: "[Data Forthcoming]" }
        ]
      }
    },
    meta: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" className="w-6 h-6">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        title: "The Team",
        description: "I collaborated with 1 Product Manager, 2 Engineers, and 1 UX Researcher."
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" className="w-6 h-6">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        ),
        title: "Tools Used",
        description: "Figma, Miro, Maze, Dovetail, and Google Workspace were essential for collaboration and execution."
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <g className="shape-element" fill="url(#icon-gradient)">
              <path transform="rotate(0, 12, 12)" d="M12 2 C10 7 10 7 12 12 C14 7 14 7 12 2Z" />
              <path transform="rotate(51.4, 12, 12)" d="M12 2 C10 7 10 7 12 12 C14 7 14 7 12 2Z" />
              <path transform="rotate(102.8, 12, 12)" d="M12 2 C10 7 10 7 12 12 C14 7 14 7 12 2Z" />
              <path transform="rotate(154.2, 12, 12)" d="M12 2 C10 7 10 7 12 12 C14 7 14 7 12 2Z" />
              <path transform="rotate(205.6, 12, 12)" d="M12 2 C10 7 10 7 12 12 C14 7 14 7 12 2Z" />
              <path transform="rotate(257, 12, 12)" d="M12 2 C10 7 10 7 12 12 C14 7 14 7 12 2Z" />
              <path transform="rotate(308.4, 12, 12)" d="M12 2 C10 7 10 7 12 12 C14 7 14 7 12 2Z" />
            </g>
          </svg>
        ),
        title: "What I'd Improve", 
        description: "• Dig deeper into purchase behavior post-race. • Explore A/B testing for CTA placement and visual hierarchy. • Include more visual craft in reporting deliverables."
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <g className="shape-element" fill="url(#icon-gradient)">
              <path transform="rotate(0, 12, 12)" d="M12,2 C9,2 9,10 12,12 C15,10 15,2 12,2Z" />
              <path transform="rotate(51.4, 12, 12)" d="M12,2 C9,2 9,10 12,12 C15,10 15,2 12,2Z" />
              <path transform="rotate(102.8, 12, 12)" d="M12,2 C9,2 9,10 12,12 C15,10 15,2 12,2Z" />
              <path transform="rotate(154.2, 12, 12)" d="M12,2 C9,2 9,10 12,12 C15,10 15,2 12,2Z" />
              <path transform="rotate(205.6, 12, 12)" d="M12,2 C9,2 9,10 12,12 C15,10 15,2 12,2Z" />
              <path transform="rotate(257, 12, 12)" d="M12,2 C9,2 9,10 12,12 C15,10 15,2 12,2Z" />
              <path transform="rotate(308.4, 12, 12)" d="M12,2 C9,2 9,10 12,12 C15,10 15,2 12,2Z" />
            </g>
          </svg>
        ),
        title: "Why This Project Matters",
        description: "This was a fast-paced, cross-functional project that showed me how design research can directly shape **user experience strategy** and **business outcomes** in the sportswear industry."
      }
    ]
  }
};