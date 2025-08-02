export interface Project {
    id: string;
    title: string;
    description: string;
    date: string;
    topics: string;
    logos?: string[];
    backgroundImage: string;
    images?: string[];
    hoveredImages?: string[];
    link: string;
    archived?: boolean;
}

export const projects: Project[] = [
    {
        id: "on",
        title: "On",
        description: "UX Researcher",
        date: "March 2025 - Present",
        topics: "UX Research",
        logos: ["https://upload.wikimedia.org/wikipedia/commons/9/92/On-cloud-logo-white-background.svg"],
        backgroundImage: "https://images.ctfassets.net/hnk2vsx53n6l/4e2eAZQ83n2wpvQ0361Buv/7f4f6973e7c23d803b6e815c0b67d89d/fw25-run_culture-pr-head_to_toe_still-runculture-rgb-06.jpg?w=1440&h=1620&fm=avif&f=face&fit=fill&q=80",
        link: "/pages/on.html",
    },
    {
        id: "stellantis",
        title: "Stellantis Mobile Apps",
        description: "Design in a multi-project and multi-brand context",
        date: "2021 - 2023",
        topics: "UI Design, UX Design, UX Research",
        logos: ["https://raw.githubusercontent.com/fraance/portfolio-assets/2ec3e7a02a3d7a5653590684aeb3cee378278b94/stellantis/logo.svg"],
        backgroundImage: "https://raw.githubusercontent.com/fraance/portfolio-assets/e57e1a0d143693de76179781f483a8fa23a3de82/stellantis/StartsBackground.jpg",
        images: [
            "https://raw.githubusercontent.com/fraance/portfolio-assets/3e8518ff6de7fd0c54d7c28502cb09ecad091c15/stellantis/eROUTES_Citroen1.png",
        ],

        hoveredImages: [
            "https://raw.githubusercontent.com/fraance/portfolio-assets/3e8518ff6de7fd0c54d7c28502cb09ecad091c15/stellantis/eROUTES_Citroen1.png",
            "https://raw.githubusercontent.com/fraance/portfolio-assets/3e8518ff6de7fd0c54d7c28502cb09ecad091c15/stellantis/eROUTES_Citroen2.png",
            "https://raw.githubusercontent.com/fraance/portfolio-assets/3e8518ff6de7fd0c54d7c28502cb09ecad091c15/stellantis/eROUTES_Citroen3.png",
            "https://raw.githubusercontent.com/fraance/portfolio-assets/3e8518ff6de7fd0c54d7c28502cb09ecad091c15/stellantis/eROUTES_Citroen4.png",
        ],
        link: "/pages/stellantis.html",
    },
    {
        id: "catch22",
        title: "Small Wins, Big Changes",
        description: "An innovative approach to measuring social impact",
        date: "2023 - 2024",
        topics: "User Research, Service Design, Social Impact",
        logos: [
            "https://raw.githubusercontent.com/fraance/portfolio-assets/e424a63efeade1d81b61da0c5daef0b1be534bb4/catch22_logo.svg",
            "https://raw.githubusercontent.com/fraance/portfolio-assets/baea020f9636acab9f349ac90dbdf012553060ae/RCA%20Full%20Version%20Logo/For%20screen%20(RGB)/Positive%20(Black)/Logo__x2B__Strapline.svg"
        ],
        backgroundImage: "https://raw.githubusercontent.com/fraance/portfolio-assets/5a76af050f44738def045c4354f9bee9e6fff265/Catch_Image_Board.webp",
        link: "/pages/catch22.html",
    },
    {
        id: "algogame",
        title: "Algogame",
        description: "Redesigning a mobile game with thousands of users to improve usability and engagement",
        date: "Work In Progress",
        topics: "UI/UX Design",
        logos: ["https://raw.githubusercontent.com/fraance/portfolio-assets/d4f57ab06c427ead8e57f75b39d58d639cb82fcf/logo_algo-no-padding.svg"],
        backgroundImage: "https://raw.githubusercontent.com/fraance/portfolio-assets/d441ff5b66cbe2414f093d2abbb0c9dfbf53681a/Group%201605.png",
        images: [
            "https://raw.githubusercontent.com/fraance/portfolio-assets/1f05f8eb1311ab108c4a8a6ac5d382ed27415538/Group%201607.png"
        ],
        link: "",
    },
    {
        id: "bayanai",
        title: "BayanAI",
        description: "Royal Society of Art x Google Deep Mind Design Award",
        date: "May 2024",
        topics: "Technology Innovation, Social Impact, Climate Adaptation",
        logos: [
            "https://raw.githubusercontent.com/fraance/portfolio-assets/decc09c82e38aaac87fcbc388d6e11970aab1603/Google-DeepMind-logo.webp",
            "https://raw.githubusercontent.com/fraance/portfolio-assets/5d8657c6fb923f5430ebbf3be0a328319a0a6a72/bayanai/RSA_logo.svg.png"
        ],
        backgroundImage: "https://github.com/fraance/portfolio-assets/blob/main/bayanai/BayanAICard_Test.png?raw=true",
        images: [
        ],
        link: "/pages/bayanai.html",
    },
    {
        id: "parkour",
        title: "Traceurs de Nantes Website",
        description: "Help TDN share their values and inspire trust to bring more trainees",
        date: "2023",
        topics: "Research, UX, UI, Proactivity",
        logos: ["https://raw.githubusercontent.com/fraance/portfolio-assets/725965eba9c4a82d525ca7e6166576085fffc092/Ecole-design-Nantes-Atlantique.png"],
        backgroundImage: "#8b9eff",
        images: [
            "https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image00_couverture-min.png"
        ],
        hoveredImages: [
            "https://raw.githubusercontent.com/fraance/portfolio-assets/main/parkour/image00_parkour_portfolio.gif"
        ],
        link: "/pages/parkour.html",
    },
    {
        id: "assmat",
        title: "Connecting parents and childminders",
        description: "Facilitate contact between childminders and parents for Loire Atlantique",
        date: "2022",
        topics: "Research, UX, UI, Proactivity",
        backgroundImage: "#f5907e",
        images: [
            "https://raw.githubusercontent.com/fraance/portfolio-assets/main/assmat/image00_assmat_portfolio_static.gif"
        ],
        link: "/pages/assmat.html",
        archived: true,
    },
    {
        id: "women_in_stem",
        title: "Undergraduate degree final project",
        description: "Women in STEM and blockchain associated technologies",
        date: "2024",
        topics: "Work in progress",
        backgroundImage: "rgba(20, 127, 221, 0.1)",
        images: [
            "https://raw.githubusercontent.com/fraance/portfolio-assets/main/women_in_stem/wip.png"
        ],
        link: "/pages/women_in_stem.html",
        archived: true,
    },
    {
        id: "orgerie",
        title: "Raising the bar: A standout microbrewery branding project",
        description: "How to propose a microbrewery different from others in Nantes",
        date: "2022",
        topics: "Branding, Benchmark",
        backgroundImage: "#e4f0cc",
        images: [
            "https://raw.githubusercontent.com/fraance/portfolio-assets/main/Brasserie/image17_mockup_brasserie_portfolio.png"
        ],
        link: "/pages/orgerie.html",
        archived: true,
    },
    {
        id: "gentil_coeur",
        title: "Bringing poetry to life: an interactive AR poster",
        description: "Deep dive into contemporary poetry with an AR experience.",
        date: "2021",
        topics: "AR, Graphism, Visual Design",
        backgroundImage: "#cc485d",
        images: [
            "https://raw.githubusercontent.com/fraance/portfolio-assets/main/MMP/image00_MMP_portfolio.png"
        ],
        link: "/pages/gentil_coeur.html",
        archived: true,
    },
];
