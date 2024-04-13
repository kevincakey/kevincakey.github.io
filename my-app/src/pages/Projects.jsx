import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
  faPython
} from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const iconData = [
    { icon: faCss3, color: "#28A4D9" },
    { icon: faGitAlt, color: "#EC4D28" },
    { icon: faHtml5, color: "#F06529" },
    { icon: faJsSquare, color: "#EFD81D" },
    { icon: faReact, color: "#5ED4F4" }
  ];

  return (
    <>
      <ProjectCard icons={iconData}>
        Testing
      </ProjectCard>
      <ProjectCard>Testing1</ProjectCard>
    </>
  );
}

export default Projects;
