import { ProjectData } from "./types";

export const loyaltyProject: ProjectData = {
  slug: "loyalty",
  title: "Homepage Experience Research",
  subtitle: "Improving the Logged-In Experience",
  role: "UXR Intern",
  timeline: "May–July 2025",
  images: [
    "https://raw.githubusercontent.com/fraance/fraance.github.io/614b9d7c4b5c19e4afb7e7413031a9d2338e215b/homepage_pictures/homepage01.png",
    "https://raw.githubusercontent.com/fraance/fraance.github.io/614b9d7c4b5c19e4afb7e7413031a9d2338e215b/homepage_pictures/homepage02.png", 
    "https://raw.githubusercontent.com/fraance/fraance.github.io/614b9d7c4b5c19e4afb7e7413031a9d2338e215b/homepage_pictures/homepage03.png"
  ],
  gradientColors: {
    primary: "from-orange-600",
    secondary: "to-orange-800"
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
          description: "The current homepage experience feels generic and fails to meet user expectations for personalization and value. This leads to low engagement and weak signals for customer retention."
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path className="shape-element" fill="url(#icon-gradient)"
                d="M12 1.5L13.5 8L20 5L15 9.5L22.5 12L15 14.5L20 19L13.5 16L12 22.5L10.5 16L4 19L9 14.5L1.5 12L9 9.5L4 5L10.5 8Z" />
            </svg>
          ),
          title: "The Goal",
          description: "How might we improve the logged-in homepage to make it a more valuable and engaging experience that drives members to return?"
        }
      ]
    },
    contributions: {
      title: "My Contributions",
      items: [
        { title: "Conducted", description: "Unmoderated User Testing" },
        { title: "Led Synthesis", description: "of Qualitative Data" },
        { title: "Developed", description: "User Test Scripts" },
        { title: "Presented", description: "Findings & Recommendations" }
      ]
    },
    learnings: {
      title: "What We Learned",
      quote: '"It is missing a bit of excitement"',
      insights: [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="w-6 h-6 flex-shrink-0 mt-1">
              <path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l10-10a1 1 0 0 0 0-1.41L12 2Z"></path>
              <path d="M7 7h.01"></path>
            </svg>
          ),
          title: "Perceived Value is Critically Low",
          description: "Users gave a 1/5 rating for value, consistently citing a lack of exclusive deals, member perks, and even basic pricing information on product carousels."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="w-6 h-6 flex-shrink-0 mt-1">
              <path d="M14.5 17.5 3 6V3h3l11.5 14.5"></path>
              <path d="M13 19H3"></path>
              <path d="m18 14 3-3-3-3"></path>
              <path d="m21 11-9 9"></path>
              <path d="M9.5 6.5 21 18V3H9.5Z"></path>
            </svg>
          ),
          title: "The Experience is \"Nice but Boring\"",
          description: "While the design was seen as clean and sleek, users found it unexciting and lacking visual engagement, describing it as \"industry standard\" but not innovative."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="w-6 h-6 flex-shrink-0 mt-1">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          ),
          title: "Navigation is a Top Priority",
          description: "The ability to quickly find what they need was the most-selected priority for users, closely followed by the desire for relevant deals."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="url(#icon-gradient)" stroke="url(#icon-gradient)" strokeWidth="1"
              strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 flex-shrink-0 mt-1">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          ),
          title: "Personalization Can Be Risky",
          description: "While users expect some personalization, feedback showed it can be \"annoying\" if not done well, especially when tastes change over time."
        }
      ]
    },
    outcome: {
      title: "Project Outcome",
      metric: {
        value: "1.0<span class=\"text-5xl\">/5</span>",
        description: "Average User Rating<br>for Perceived Value"
      },
      achievements: [
        {
          text: "Delivered a clear, data-driven roadmap with actionable recommendations for improving the homepage, focusing on value, engagement, and personalization."
        },
        {
          text: "Established a baseline for user satisfaction (3.2/5 average for \"best experience\"), with a defined goal to increase this to 4+ in future iterations."
        }
      ],
      healthMetrics: {
        title: "Health Metrics",
        description: "\"I left the company before the final metrics were tracked. However, the primary success indicators we aimed to influence were 'X' and 'X'\""
      }
    },
    meta: [
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
      }
    ]
  }
};