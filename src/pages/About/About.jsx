import React, { useState } from "react";
import "./About.scss";
import { ReactComponent as CssIcon } from "../../assets/icons/cssIcon.svg";
import { ReactComponent as HtmlIcon } from "../../assets/icons/htmlIcon.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/githubIcon.svg";
import { ReactComponent as GitIcon } from "../../assets/icons/gitIcon.svg";
import { ReactComponent as SassIcon } from "../../assets/icons/sassIcon.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/icons/javascriptIcon.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/reactIcon.svg";
import { ReactComponent as PythonIcon } from "../../assets/icons/pythonIcon.svg";
import { ReactComponent as ExpressIcon } from "../../assets/icons/expressIcon.svg";
import { ReactComponent as JavaIcon } from "../../assets/icons/javaIcon.svg";
import { ReactComponent as JQueryIcon } from "../../assets/icons/jQueryIcon.svg";
import { ReactComponent as NodejsIcon } from "../../assets/icons/nodejsIcon.svg";
import { ReactComponent as PandasIcon } from "../../assets/icons/pandasIcon.svg";
import { ReactComponent as SQLIcon } from "../../assets/icons/sqlIcon.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/icons/mongodbIcon.svg";
import { ReactComponent as CIcon } from "../../assets/icons/c++.svg";
import { ReactComponent as NumPyIcon } from "../../assets/icons/numpyIcon.svg";
import { motion } from "framer-motion";
import teachingresume from "../../assets/TeachingResume.pdf";

const iconData = [
  { name: "Python", icon: <PythonIcon /> },
  { name: "C++", icon: <CIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Javascript", icon: <JavascriptIcon /> },
  { name: "SQL", icon: <SQLIcon /> },
  { name: "MongoDB", icon: <MongoDBIcon /> },
  { name: "NodeJS", icon: <NodejsIcon /> },
  { name: "ExpressJS", icon: <ExpressIcon /> },
  { name: "Github", icon: <GithubIcon /> },
  { name: "Git", icon: <GitIcon /> },
  { name: "Sass", icon: <SassIcon /> },
  { name: "HTML", icon: <HtmlIcon /> },
  { name: "CSS", icon: <CssIcon /> },
  { name: "Pandas", icon: <PandasIcon /> },
  { name: "NumPy", icon: <NumPyIcon /> },
  { name: "Java", icon: <JavaIcon /> },
  { name: "JQuery", icon: <JQueryIcon /> },
];

const About = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const containerVariants = {
    hidden: {
      x: "50vw",
      filter: "blur(100px)",
    },
    visible: {
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        velocity: 1000,
        duration: 0.2,
        bounce: 0.1,
      },
    },
    exit: {
      x: "-50vw",
      filter: "blur(100px)",
      transition: {
        type: "spring",
        velocity: 1000,
        duration: 0.2,
        bounce: 0.1,
      },
    },
  };

  return (
    <>
      {/* <Banner></Banner> */}
      <motion.h1
        className="title"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        About
      </motion.h1>
      <motion.div
        id="about-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div id="about-body">
          <h2>
            Exploring software development and data science. <br />
            Looking for opportunities to learn and apply skills. <br />
          </h2>
          <h3>
            Open to full/part-time jobs, internships, website contracting, and
            <a
              href={teachingresume}
              target="_blank"
              rel="noreferrer"
              id="teaching-link"
            >
              {" "}
              tutoring
            </a>
          </h3>
          <ul className="icon-grid">
            {iconData.map((icon, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(icon.name.toLowerCase())}
                onMouseLeave={handleMouseLeave}
              >
                {React.cloneElement(icon.icon, {
                  className: `svgIcons ${
                    hoveredIcon === icon.name.toLowerCase() ? "blur" : ""
                  }`,
                })}
                {hoveredIcon === icon.name.toLowerCase() && (
                  <span>{icon.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default About;
