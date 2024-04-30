import React from "react";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Banner from "../../components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as ChatIcon } from "../../assets/icons/chatIcon.svg";
import { ReactComponent as ForkIcon } from "../../assets/icons/fork.svg";
import { ReactComponent as LikeIcon } from "../../assets/icons/likeIcon.svg";
import { ReactComponent as PearIcon } from "../../assets/icons/pearIcon.svg";
import { ReactComponent as PuzzleIcon } from "../../assets/icons/puzzleIcon.svg";
import { ReactComponent as ExpressIcon } from "../../assets/icons/expressIcon.svg";
import { ReactComponent as NodejsIcon } from "../../assets/icons/nodejsIcon.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/icons/mongodbIcon.svg";
import { ReactComponent as CIcon } from "../../assets/icons/c++.svg";
import { ReactComponent as NumPyIcon } from "../../assets/icons/numpyIcon.svg";
import { ReactComponent as PandasIcon } from "../../assets/icons/pandasIcon.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/reactIcon.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/cssIcon.svg";
import { ReactComponent as HtmlIcon } from "../../assets/icons/htmlIcon.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/githubIcon.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/icons/javascriptIcon.svg";

import { motion } from "framer-motion";

const Projects = () => {
  const projectIcons = [
    {
      name: "Messaging App",
      emblem: <ChatIcon />,
      website: "https://github.com/kevincakey/MessagingApp",
      description:
        "A messaging app built with MongoDB, Express, React, and Node.js",
      iconData: [
        { icon: <MongoDBIcon /> },
        { icon: <ExpressIcon /> },
        { icon: <ReactIcon /> },
        { icon: <NodejsIcon /> },
      ],
    },
    {
      name: "Fork",
      emblem: <ForkIcon />,
      website: "https://github.com/kevincakey/CS180-Fork",
      description:
        "Bill-splitting app made with React, Paypal API, and TesseractOCR",

      iconData: [
        /* Add custom icon data for this project */
        { icon: <JavascriptIcon /> },
        { icon: <ReactIcon /> },
        { icon: <GithubIcon /> },
      ],
    },
    {
      name: "Zoomies",
      emblem: <PearIcon />,
      website: "https://github.com/kevincakey/Zoomies",
      description: "Partner Pairing program with csv data storage",
      iconData: [
        /* Add custom icon data for this project */
        { icon: <CIcon /> },
      ],
    },
    {
      name: "Collaborative Recommender System",
      emblem: <LikeIcon />,
      website: "https://github.com/kevincakey/CollaborativeRecommenderSystem",
      description:
        "Uses Collaborative Filtering to recommend magazines to users",
      iconData: [
        /* Add custom icon data for this project */
        { icon: <NumPyIcon /> },
        { icon: <PandasIcon /> },
      ],
    },
    {
      name: "8-puzzle solver",
      emblem: <PuzzleIcon />,
      website: "https://github.com/kevincakey/EightPuzzleSearch",
      description:
        "Solving an 8-puzzle using A* misplaced tile, Euclidean, and uniform cost search",
      iconData: [
        /* Add custom icon data for this project */
        { icon: <CIcon /> },
      ],
    },
    // Add more projects with their respective icon data
  ];

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
      <motion.h1
        className="title"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Projects
      </motion.h1>
      <motion.div
        id="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {projectIcons.map((project, index) => (
          <ProjectCard
            key={index}
            emblem={project.emblem}
            website={project.website}
            name={project.name}
            icons={project.iconData}
            description={project.description}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
