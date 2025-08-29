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
import { ReactComponent as GithubIcon } from "../../assets/icons/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedinIcon.svg";

function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= breakpoint;
  });

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    window.addEventListener("resize", updateMobile);
    updateMobile(); // check on mount
    return () => window.removeEventListener("resize", updateMobile);
  }, [breakpoint]);

  return isMobile;
}

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();
  console.log(
    "isMobile:",
    isMobile,
    "matchMedia:",
    window.matchMedia("(max-width: 1024px)").matches
  );

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

  // Determine navbar width and background color based on route
  const isHome = currentPath === "/";
  const navbarWidth = isMobile ? "100vw" : isHome ? "100vw" : "5vw";
  const navbarBg = isMobile
    ? "#7F5539" // dark brown for mobile (same color on all pages)
    : isHome
    ? "rgba(0,0,0,0)" // transparent for desktop Home
    : "#ddb892"; // light brown for desktop when not on home page
  const iconsX = isMobile ? 0 : isHome ? "-47vw" : 0;

  // Determine icon animation direction
  const iconInitialX = isMobile ? "0vw" : isHome ? "-100vw" : "100vw";
  const iconInitialY = isMobile ? "-100vh" : "0";

  return (
    <motion.div
      className={"navbar-container"}
      initial={{ width: navbarWidth, backgroundColor: navbarBg }}
      animate={{ width: navbarWidth, backgroundColor: navbarBg }}
      transition={{
        width: { duration: 0.6, type: "spring" },
        backgroundColor: { duration: 0.4 },
      }}
    >
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <motion.ul
          id="navbar-icons"
          animate={{ x: iconsX }}
          transition={{ type: "spring", duration: 0.7 }}
        >
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
            initial={{ x: iconInitialX, y: iconInitialY }}
            animate={{ x: 0, y: 0 }}
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
            initial={{ x: iconInitialX, y: iconInitialY }}
            animate={{ x: 0, y: 0 }}
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
            initial={{ x: iconInitialX, y: iconInitialY }}
            animate={{ x: 0, y: 0 }}
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
            initial={{ x: iconInitialX, y: iconInitialY }}
            animate={{ x: 0, y: 0 }}
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
      {/* LinkedIn Icon */}
      <motion.div
        className="linkedin-social-icon"
        initial={{ x: isMobile ? "-100vw" : "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 1.8,
          delay: 2.5,
          stiffness: 30,
        }}
      >
        <a
          className="links"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/kevincakey/"
          aria-label="Visit Kevin Gao's LinkedIn profile"
        >
          <LinkedinIcon id="linkedin-icon" />
        </a>
      </motion.div>
      {/* GitHub Icon */}
      <motion.div
        className="github-social-icon"
        initial={{ x: isMobile ? "-100vw" : "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 1.8,
          delay: 2.2,
          stiffness: 30,
        }}
      >
        <a
          className="links"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/kevincakey"
          aria-label="Visit Kevin Gao's GitHub profile"
        >
          <GithubIcon id="github-icon" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
