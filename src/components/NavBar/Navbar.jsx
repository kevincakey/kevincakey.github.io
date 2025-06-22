import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../assets/icons/homeIcon.lottie";
import aboutIcon from "../../assets/icons/aboutIcon.lottie";
import projectsIcon from "../../assets/icons/projectsIcon.lottie";
import contactIcon from "../../assets/icons/contactIcon.lottie";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { motion, AnimatePresence } from "framer-motion";

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();

  let navbarClass = "navbar-container";

  // Add additional conditions as needed for different routes
  if (currentPath === "/") {
    navbarClass += " home-route";
  } else if (currentPath === "/About") {
    navbarClass += " about-route";
  } else if (currentPath === "/Projects") {
    navbarClass += " projects-route";
  } else if (currentPath === "/Contact") {
    navbarClass += " contact-route";
  }

  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 4000);
  }, []);

  const verticalHighlightPosition = {
    "/": "-150%",
    "/About": "-50%",
    "/Projects": "50%",
    "/Contact": "150%",
  };

  const horizontalHighlightPosition = {
    "/": "-180%",
    "/About": "-60%",
    "/Projects": "60%",
    "/Contact": "180%",
  };

  const resethighlightPosition = {
    "/": "0%",
    "/About": "0%",
    "/Projects": "0%",
    "/Contact": "0%",
  };

  // Determine which property to use for positioning based on screen size
  const positionProperty = isMobile ? "x" : "y";
  const antipositionProperty = positionProperty === "x" ? "y" : "x";

  return (
    <motion.div
      className={navbarClass}
      initial={{ backgroundColor: "#7F5539" }}
      animate={
        isMobile
          ? { backgroundColor: "#7F5539" }
          : { backgroundColor: currentPath === "/" ? "#7F5539" : "#ddb892" }
      }
      transition={{ duration: 0.2 }}
    >
      <div id="topCake"></div>
      <AnimatePresence>
        {showMsg && (
          <motion.div
            id="clickMsg"
            initial={{ x: "100vw" }}
            animate={{ x: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 20 }}
            exit={{
              opacity: 0,
              transition: { duration: 2, type: "tween" },
            }}
          >
            Click Me!
          </motion.div>
        )}
      </AnimatePresence>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <motion.ul id="navbar-icons">
          <motion.div
            className="highlight-bar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", delay: 3, stiffness: 20 }}
            style={{
              [positionProperty]:
                positionProperty === "x"
                  ? horizontalHighlightPosition[currentPath]
                  : verticalHighlightPosition[currentPath],
              [antipositionProperty]: resethighlightPosition[currentPath],
            }}
          ></motion.div>
          <motion.li
            className="navbar-icon"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.4, stiffness: 20 }}
          >
            <Link to="/" aria-label="Navigate to Home page">
              <DotLottiePlayer
                src={homeIcon}
                loop
                hover
                background="transparent"
              ></DotLottiePlayer>
            </Link>
          </motion.li>
          <motion.li
            className="navbar-icon"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.6, stiffness: 20 }}
          >
            <Link to="/About" aria-label="Navigate to About page">
              <DotLottiePlayer
                src={aboutIcon}
                loop
                hover
                background="transparent"
              ></DotLottiePlayer>
            </Link>
          </motion.li>
          <motion.li
            className="navbar-icon"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.8, stiffness: 20 }}
          >
            <Link to="/Projects" aria-label="Navigate to Projects page">
              <div className="icon-background">
                <DotLottiePlayer
                  src={projectsIcon}
                  loop
                  hover
                  background="transparent"
                ></DotLottiePlayer>
              </div>
            </Link>
          </motion.li>
          <motion.li
            className="navbar-icon"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 1, stiffness: 20 }}
          >
            <Link to="/Contact" aria-label="Navigate to Contact page">
              <div className="icon-background">
                <DotLottiePlayer
                  src={contactIcon}
                  loop
                  hover
                  background="transparent"
                ></DotLottiePlayer>
              </div>
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
      <div id="cakeBase"></div>
    </motion.div>
  );
};

export default Navbar;
