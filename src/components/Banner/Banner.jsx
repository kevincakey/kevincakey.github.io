import "./Banner.scss";
import React from "react";
import resume from "../../assets/KevinGao'sResume.pdf";
import { Link } from "react-router-dom";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import resumeIcon from "../../assets/icons/resumeIcon.lottie";
import downloadIcon from "../../assets/icons/downloadIcon.lottie";
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
              <LinkedinIcon />
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
              <GithubIcon />
              https://github.com/kevincakey
            </a>
          </div>
        </div>
        <div id="bannerBody">
          <p id="bannerText">
            Hi! I am Kevin Gao <br /> Aspiring Developer <br /> MS student
          </p>
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
