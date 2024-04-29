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
import { ReactComponent as PythonIcon } from "../../assets/icons/pythonIcon.svg";
import { ReactComponent as NodejsIcon } from "../../assets/icons/nodejsIcon.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/icons/mongodbIcon.svg";
import { ReactComponent as CIcon } from "../../assets/icons/c++.svg";
import { ReactComponent as NumPyIcon } from "../../assets/icons/numpyIcon.svg";
import { ReactComponent as PandasIcon } from "../../assets/icons/pandasIcon.svg";
import { motion } from "framer-motion";

const Projects = () => {
  const projectIcons = [
    {
      name: "Messaging App",
      emblem: <ChatIcon />,
      website: "https://github.com/kevincakey/MessagingApp",
      iconData: [
        { icon: faReact, color: "#5ED4F4", type: "fontawesome" },
        { icon: faJsSquare, color: "#EFD81D", type: "fontawesome" },
        { icon: faHtml5, color: "#F06529", type: "fontawesome" },
        { icon: faCss3, color: "#28A4D9", type: "fontawesome" },
        { icon: faGitAlt, color: "#EC4D28", type: "fontawesome" },
      ],
    },
    {
      name: "Fork",
      emblem: <ForkIcon />,
      website: "https://github.com/kevincakey/CS180-Fork",
      iconData: [
        /* Add custom icon data for this project */
      ],
    },
    {
      name: "Zoomies",
      emblem: <PearIcon />,
      website: "https://github.com/kevincakey/Zoomies",
      iconData: [
        /* Add custom icon data for this project */
      ],
    },
    {
      name: "Collaborative Recommender System",
      emblem: <LikeIcon />,
      website: "https://github.com/kevincakey/CollaborativeRecommenderSystem",
      iconData: [
        /* Add custom icon data for this project */
      ],
    },
    {
      name: "8-puzzle solver",
      emblem: <PuzzleIcon />,
      website: "https://github.com/kevincakey/EightPuzzleSearch",
      iconData: [
        /* Add custom icon data for this project */
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
          />
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
