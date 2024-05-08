import React from "react";
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

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Function to check if the screen size is mobile
  const isMobile = window.innerWidth <= 768;

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
              id="view-resume-link"
              href={resume}
              target="_blank"
              rel="noreferrer"
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
