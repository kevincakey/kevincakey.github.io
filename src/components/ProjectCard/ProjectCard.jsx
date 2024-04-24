import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectCard.scss";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const ProjectCard = ({ name, icons, tagList, website, children, emblem }) => {
  return (
    <div className="card-container">
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <div className="icon-wrapper">
          <DotLottiePlayer
            src={emblem}
            loop
            hover
            speed="2"
            background="transparent"
          ></DotLottiePlayer>
        </div>
        <div className="card" style={{ border: "1px solid" }}>
          <h3>{name}</h3>
          {icons &&
            icons.map(({ icon, color }, index) => (
              <FontAwesomeIcon
                icon={icon}
                key={index}
                style={{ color: color }}
              />
            ))}
          {children}
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
