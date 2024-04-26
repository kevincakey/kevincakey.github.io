import React from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../assets/icons/homeIcon.lottie";
import aboutIcon from "../../assets/icons/aboutIcon.lottie";
import projectsIcon from "../../assets/icons/projectsIcon.lottie";
import contactIcon from "../../assets/icons/contactIcon.lottie";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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

  return (
    <div className={navbarClass}>
      <div id="topCake"></div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <motion.ul id="navbar-icons">
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.2, stiffness: 20 }}
          >
            <Link to="/">
              <DotLottiePlayer
                src={homeIcon}
                loop
                hover
                background="transparent"
              ></DotLottiePlayer>
            </Link>
          </motion.li>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.4, stiffness: 20 }}
          >
            <Link to="/About">
              <DotLottiePlayer
                src={aboutIcon}
                loop
                hover
                background="transparent"
              ></DotLottiePlayer>
            </Link>
          </motion.li>
          <motion.li
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.6, stiffness: 20 }}
          >
            <Link to="/Projects">
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
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.8, stiffness: 20 }}
          >
            <Link to="/Contact">
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
    </div>
  );
};

export default Navbar;
