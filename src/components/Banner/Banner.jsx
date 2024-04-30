import "./Banner.scss";
import React, { useState, useEffect, useMemo } from "react";
import resume from "../../assets/KevinGao'sResume.pdf";
import { Link } from "react-router-dom";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import resumeIcon from "../../assets/icons/resumeIcon.lottie";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as GithubIcon } from "../../assets/icons/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedinIcon.svg";

const Banner = () => {
  const containerVariants = {
    hidden: {
      x: "50vw",
      filter: "blur(50px)",
    },
    visible: {
      x: 0,
      filter: "blur(0px)",
      transition: {
        // velocity: 10000,
        type: "spring",
        duration: 0.8,
        bounce: 0.05,
      },
    },
    exit: {
      // x: "50vw",
      filter: "blur(100px)",
      transition: {
        type: "spring",
        duration: 5,
        bounce: 0.1,
      },
    },
  };

  const [bannerText, setBannerText] = useState("Hi! I am Kevin Gao! ");
  const phrases = useMemo(
    () => ["Aspiring Developer", "MS student", "Passionate Learner"],
    []
  );
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // Change the banner text every 5 seconds
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [phrases]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="banner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div id="backdrop"></div>
        <div id="topCake">
          <div className="social-icons" id="linkedin">
            <a
              className="links"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kevincakey/"
            >
              <LinkedinIcon id="linkedin-icon" />
              https://www.linkedin.com/in/kevincakey
            </a>
          </div>
          <div className="social-icons" id="github">
            <a
              className="links"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/kevincakey"
            >
              <GithubIcon id="github-icon" />
              https://github.com/kevincakey
            </a>
          </div>
        </div>
        <div id="bannerBody">
          <p className="bannerText">{bannerText}</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              className="animatedBannerText"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              {phrases[phraseIndex]}
            </motion.p>
          </AnimatePresence>
          <Link to="/Contact" id="contactButton" className="links">
            Add me to your team !
          </Link>
          <div id="viewResume">
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
        </div>
        <div id="cakeBase">
          <a
            id="resume-link"
            href={resume}
            target="_blank"
            rel="noreferrer"
            download="Kevin_Gao's_Resume"
          >
            <button id="resume-button" className="links">
              Download Resume
            </button>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Banner;
