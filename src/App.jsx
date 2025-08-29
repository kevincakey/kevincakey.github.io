import React, { useState, useEffect } from "react";
import "./App.scss";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/NavBar/Navbar";
import Banner from "./components/Banner/Banner";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import resumeIcon from "./assets/icons/resumeIcon.lottie";
import resume from "./assets/KevinGao'sResume.pdf";

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isMobile = useIsMobile();

  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <div id="cover"></div>
        {/* Render the banner component only if not on home page and not on mobile */}
        {!isHome && !isMobile && (
          <AnimatePresence mode="wait">
            <Banner />
          </AnimatePresence>
        )}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        {/* Render clickable link only on mobile */}
        {isMobile && (
          <div id="mobileResume">
            <a
              id="mobile-resume-link"
              href={resume}
              target="_blank"
              rel="noreferrer"
              aria-label="View Kevin Gao's resume on mobile"
            >
              <div></div>
            </a>
            <DotLottiePlayer
              id="resumeIcon"
              src={resumeIcon}
              autoplay
              background="transparent"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
