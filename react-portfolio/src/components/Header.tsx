import { Link, useLocation } from "react-router-dom";

export function Header({ isScrolled }: { isScrolled: boolean }) {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const handleProjectsClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (location.pathname === "/") {
            event.preventDefault();
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav className={`bg-transparent py-4 fixed top-0 left-0 w-full z-10 ${isHomePage && !isScrolled ? "text-white" : "text-black"}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">
                        <Link to="/" onClick={handleProjectsClick}>Projects</Link>
                    </h1>
                    <div className="flex gap-8 items-center">
                        <a
                            href="https://elevenlabs.io/app/talk-to?agent_id=agent_7001k18evawwe66s0ca3r4g0drqp"
                            className="nav-link"
                        >
                            Talk with my AI clone
                        </a>
                        <a
                            href="https://github.com/fraance/portfolio-assets/raw/e97b70b5f292b836a13088c8a40d9fc8033122f5/France__Resume.pdf"
                            download="France_Hemain_Resume.pdf"
                            className="nav-link"
                        >
                            Resume
                        </a>
                        <Link to="/about" className="nav-link">
                            About me
                        </Link>
                        <a href="mailto:francehemain@gmail.com" className="hover:underline flex items-center gap-1 contact-link">
                            <span className="arrow">→</span>
                            <span>E-mail</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
