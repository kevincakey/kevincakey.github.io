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
import { motion } from "framer-motion";

const Projects = () => {
  const iconData = [
    { icon: faCss3, color: "#28A4D9" },
    { icon: faGitAlt, color: "#EC4D28" },
    { icon: faHtml5, color: "#F06529" },
    { icon: faJsSquare, color: "#EFD81D" },
    { icon: faReact, color: "#5ED4F4" },
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
      {/* <Banner></Banner> */}
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
        <ProjectCard
          icons={iconData}
          emblem={<ChatIcon></ChatIcon>}
          website={"https://github.com/kevincakey/MessagingApp"}
          name="Messaging App"
        >
          {/* MERN MongoDB, Express, React, Node Messaging App */}
        </ProjectCard>
        <ProjectCard
          name="Fork"
          emblem={<ForkIcon />}
          website="https://github.com/kevincakey/CS180-Fork"
        ></ProjectCard>
        <ProjectCard
          name="Zoomies"
          emblem={<PearIcon />}
          website="https://github.com/kevincakey/Zoomies"
        ></ProjectCard>
        <ProjectCard
          name="Collaborative Recommender System"
          emblem={<LikeIcon />}
          website="https://github.com/kevincakey/CollaborativeRecommenderSystem"
        ></ProjectCard>
        <ProjectCard
          name="8-puzzle search"
          emblem={<PuzzleIcon />}
          website="https://github.com/kevincakey/EightPuzzleSearch"
        ></ProjectCard>
      </motion.div>
    </>
  );
};

export default Projects;
