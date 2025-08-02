import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectPage } from "./pages/ProjectPage";
import BayanaiPage from "./pages/BayanaiPage";
import Catch22Page from "./pages/Catch22Page";
import StellantiPage from "./pages/StellantiPage";
import ParkourPage from "./pages/ParkourPage";
import { useEffect, useState } from "react";

function AppContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.15;
      setIsScrolled(scrollPosition > threshold);
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    if (isHomePage) {
      if (isScrolled) {
        document.body.classList.add("bg-white", "text-black");
        document.body.classList.remove("bg-black", "text-white");
      } else {
        document.body.classList.add("bg-black", "text-white");
        document.body.classList.remove("bg-white", "text-black");
      }
      document.body.classList.add("transition-colors", "duration-500");
    } else {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-black", "text-white", "transition-colors", "duration-500");
    }
  }, [isScrolled, isHomePage]);

  return (
    <>
      <Header isScrolled={isScrolled} />
      <Routes>
        <Route path="/" element={<HomePage isScrolled={isScrolled} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/bayanai" element={<BayanaiPage />} />
        <Route path="/project/catch22" element={<Catch22Page />} />
        <Route path="/project/stellantis" element={<StellantiPage />} />
        <Route path="/project/parkour" element={<ParkourPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
