import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectCard.scss";

const ProjectCard = ({ name, icons, tagList, website, children, emblem }) => {
  return (
    <div className="card-container">
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <div className="icon-wrapper">{emblem}</div>
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
