import React from "react";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
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
import cameraIcon from "../../assets/icons/cameraIcon.lottie";
import forkIcon from "../../assets/icons/forkIcon.lottie";
import heartIcon from "../../assets/icons/heartIcon.lottie";
import messagingIcon from "../../assets/icons/messagingIcon.lottie";
import puzzleIcon from "../../assets/icons/puzzleIcon.lottie";

const Projects = () => {
  const iconData = [
    { icon: faCss3, color: "#28A4D9" },
    { icon: faGitAlt, color: "#EC4D28" },
    { icon: faHtml5, color: "#F06529" },
    { icon: faJsSquare, color: "#EFD81D" },
    { icon: faReact, color: "#5ED4F4" },
  ];

  return (
    <div id="projects-container">
      <h1 className="title">Projects</h1>
      <ProjectCard
        icons={iconData}
        emblem={messagingIcon}
        website={"https://github.com/kevincakey/MessagingApp"}
        name="Messaging App"
      >
        MERN MongoDB, Express, React, Node Messaging App
      </ProjectCard>
      <ProjectCard
        name="Fork"
        emblem={forkIcon}
        website="https://github.com/kevincakey/CS180-Fork"
      ></ProjectCard>
      <ProjectCard
        name="Zoomies"
        emblem={cameraIcon}
        website="https://github.com/kevincakey/Zoomies"
      ></ProjectCard>
      <ProjectCard
        name="Collaborative Recommender System"
        emblem={heartIcon}
        website="https://github.com/kevincakey/CollaborativeRecommenderSystem"
      ></ProjectCard>
      <ProjectCard
        name="8-puzzle search"
        emblem={puzzleIcon}
        website="https://github.com/kevincakey/EightPuzzleSearch"
      ></ProjectCard>
    </div>
  );
};

export default Projects;
