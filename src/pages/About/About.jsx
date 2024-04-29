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
            Currently exploring software development and data science. <br />
            Looking for opportunities to learn more <br />
          </h2>
          <h3>
            Open to full/part-time jobs, internships, website contracting, and
            private tutoring !!link secret teaching resume!!.
          </h3>
          <ul className="icon-grid">
            <li
              onMouseEnter={() => handleMouseEnter("python")}
              onMouseLeave={handleMouseLeave}
            >
              <PythonIcon
                className={`svgIcons ${hoveredIcon === "python" ? "blur" : ""}`}
              />
              {hoveredIcon === "python" && <span>Python</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("c")}
              onMouseLeave={handleMouseLeave}
            >
              <CIcon
                className={`svgIcons ${hoveredIcon === "c" ? "blur" : ""}`}
              />
              {hoveredIcon === "c" && <span>C++</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("react")}
              onMouseLeave={handleMouseLeave}
            >
              <ReactIcon
                className={`svgIcons ${hoveredIcon === "react" ? "blur" : ""}`}
              />
              {hoveredIcon === "react" && <span>React</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("javascript")}
              onMouseLeave={handleMouseLeave}
            >
              <JavascriptIcon
                className={`svgIcons ${
                  hoveredIcon === "javascript" ? "blur" : ""
                }`}
              />
              {hoveredIcon === "javascript" && <span>Javascript</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("sql")}
              onMouseLeave={handleMouseLeave}
            >
              <SQLIcon
                className={`svgIcons ${hoveredIcon === "sql" ? "blur" : ""}`}
              />
              {hoveredIcon === "sql" && <span>SQL</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("mongodb")}
              onMouseLeave={handleMouseLeave}
            >
              <MongoDBIcon
                className={`svgIcons ${
                  hoveredIcon === "mongodb" ? "blur" : ""
                }`}
              />
              {hoveredIcon === "mongodb" && <span>MongoDB</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("nodejs")}
              onMouseLeave={handleMouseLeave}
            >
              <NodejsIcon
                className={`svgIcons ${hoveredIcon === "nodejs" ? "blur" : ""}`}
              />
              {hoveredIcon === "nodejs" && <span>Node.js</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("express")}
              onMouseLeave={handleMouseLeave}
            >
              <ExpressIcon
                className={`svgIcons ${
                  hoveredIcon === "express" ? "blur" : ""
                }`}
              />
              {hoveredIcon === "express" && <span>Express</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("github")}
              onMouseLeave={handleMouseLeave}
            >
              <GithubIcon
                className={`svgIcons ${hoveredIcon === "github" ? "blur" : ""}`}
              />
              {hoveredIcon === "github" && <span>Github</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("git")}
              onMouseLeave={handleMouseLeave}
            >
              <GitIcon
                className={`svgIcons ${hoveredIcon === "git" ? "blur" : ""}`}
              />
              {hoveredIcon === "git" && <span>Git</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("sass")}
              onMouseLeave={handleMouseLeave}
            >
              <SassIcon
                className={`svgIcons ${hoveredIcon === "sass" ? "blur" : ""}`}
              />
              {hoveredIcon === "sass" && <span>Sass</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("html")}
              onMouseLeave={handleMouseLeave}
            >
              <HtmlIcon
                className={`svgIcons ${hoveredIcon === "html" ? "blur" : ""}`}
              />
              {hoveredIcon === "html" && <span>HTML</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("css")}
              onMouseLeave={handleMouseLeave}
            >
              <CssIcon
                className={`svgIcons ${hoveredIcon === "css" ? "blur" : ""}`}
              />
              {hoveredIcon === "css" && <span>CSS</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("pandas")}
              onMouseLeave={handleMouseLeave}
            >
              <PandasIcon
                className={`svgIcons ${hoveredIcon === "pandas" ? "blur" : ""}`}
              />
              {hoveredIcon === "pandas" && <span>Pandas</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("numpy")}
              onMouseLeave={handleMouseLeave}
            >
              <NumPyIcon
                className={`svgIcons ${hoveredIcon === "numpy" ? "blur" : ""}`}
              />
              {hoveredIcon === "numpy" && <span>NumPy</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("java")}
              onMouseLeave={handleMouseLeave}
            >
              <JavaIcon
                className={`svgIcons ${hoveredIcon === "java" ? "blur" : ""}`}
              />
              {hoveredIcon === "java" && <span>Java</span>}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("jquery")}
              onMouseLeave={handleMouseLeave}
            >
              <JQueryIcon
                className={`svgIcons ${hoveredIcon === "jquery" ? "blur" : ""}`}
              />
              {hoveredIcon === "jquery" && <span>jQuery</span>}
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default About;
