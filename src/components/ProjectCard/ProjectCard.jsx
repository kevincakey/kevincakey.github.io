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
        <div className="card" style={{ border: "1px solid" }}>
          <div className="emblem-wrapper">{emblem}</div>
          <h3>{name}</h3>
          <div className="icon-wrapper">
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
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
