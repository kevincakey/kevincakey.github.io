import "./Banner.scss";
import React from "react";
import resume from "../../assets/KevinGao'sResume.pdf";
import { Link } from "react-router-dom";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import resumeIcon from "../../assets/icons/resumeIcon.lottie";
import downloadIcon from "../../assets/icons/downloadIcon.lottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      id="banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
    >
      <div id="topCake">
        <div className="social-icons" id="linkedin">
          <a
            className="links"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kevincakey/"
          >
            <FontAwesomeIcon
              id="linkedin-icon"
              icon={faLinkedin}
              size="lg"
              style={{ color: "#ddb892" }}
            />
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
            <FontAwesomeIcon
              id="github-icon"
              icon={faGithub}
              size="lg"
              style={{ color: "#ddb892" }}
            />
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
            className="links"
            id="view-resume-link"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            <DotLottiePlayer
              id="resumeIcon"
              src={resumeIcon}
              autoplay
              loop
              hover
              background="transparent"
            />
          </a>
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
  );
};

export default Banner;
