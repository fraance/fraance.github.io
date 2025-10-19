/**
 * Portfolio data configuration
 * Centralized content management for easy updates
 */

export interface SiteMetadata {
  title: string;
  description: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  id?: string;
  hasArrow?: boolean;
}

export interface TaglineContent {
  lines: string[];
}

export interface CompassLabels {
  topRight: string;
  topLeft: string;
  bottomLeft: string;
  bottomRight: string;
}

export interface ProjectDescription {
  outcome: string;
  role: string;
  focus: string;
}

export interface Project {
  id: number;
  title: string;
  description: ProjectDescription;
  imageUrl: string;
  href: string;
}

export interface AIAgentContent {
  buttonLabel: string;
  ariaLabel: string;
}

// Site metadata
export const siteMetadata: SiteMetadata = {
  title: "Interactive Portfolio Concept",
  description: "Product-savvy, AI-native junior designer blending empathy, systems thinking, and visual excellence."
};

// Navigation configuration
export const navigationLinks: NavigationLink[] = [
  {
    label: "Resume",
    href: "#"
  },
  {
    label: "About me",
    href: "#",
    id: "about-me-link"
  },
  {
    label: "E-mail",
    href: "#",
    hasArrow: true
  }
];

// Tagline content
export const taglineContent: TaglineContent = {
  lines: [
    "Product-savvy,",
    "AI-native designer",
    "blending empathy,",
    "systems thinking,",
    "and",
    "visual excellence."
  ]
};

// Compass labels
export const compassLabels: CompassLabels = {
  topRight: "Product Design",
  topLeft: "UI Design",
  bottomLeft: "Service Design",
  bottomRight: "UX Research"
};

// AI Agent configuration
export const aiAgentContent: AIAgentContent = {
  buttonLabel: "Talk with my AI agent",
  ariaLabel: "Talk with my AI agent"
};

// Projects data
export const projects: Project[] = [
  {
    id: 1,
    title: "Marathon Set",
    description: {
      outcome: "7/7 participants validated the concept",
      role: "UX Research Intern",
      focus: "User Interviews & Synthesis"
    },
    imageUrl: "https://raw.githubusercontent.com/fraance/fraance.github.io/64ac3f753f28b08c9684168e4dbb8c9218760519/marathonfistpicture.png",
    href: "/projects/marathon-set"
  },
  {
    id: 2,
    title: "Homepage Research",
    description: {
      outcome: "1.0/5 user rating revealed critical insights",
      role: "UXR Intern",
      focus: "Unmoderated User Testing"
    },
    imageUrl: "https://raw.githubusercontent.com/fraance/fraance.github.io/614b9d7c4b5c19e4afb7e7413031a9d2338e215b/homepage_pictures/homepage01.png",
    href: "/projects/loyalty"
  },
  {
    id: 3,
    title: "Collaborative Design",
    description: {
      outcome: "Streamlined design workflow.",
      role: "Design Lead",
      focus: "Design Systems"
    },
    imageUrl: "https://placehold.co/800x500/388e3c/ffffff?text=Project+Three",
    href: "#"
  },
  {
    id: 4,
    title: "UX Research",
    description: {
      outcome: "Validated product-market fit.",
      role: "Researcher", 
      focus: "Market Analysis"
    },
    imageUrl: "https://placehold.co/800x500/f57c00/ffffff?text=Project+Four",
    href: "#"
  }
];