import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectCard.scss";

const ProjectCard = ({ name, icons, tagList, website, children, emblem }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="card-container">
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <div
          className="card"
          style={{
            border: "1px solid",
            filter: isHovered ? "brightness(80%) blur(2px)" : "none",
            transition: "filter 0.3s",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="emblem-wrapper">{emblem}</div>
          <h3>{name}</h3>
          <div className="icon-wrapper">
            {icons &&
              icons.map(({ icon, color, type }, index) => (
                <React.Fragment key={index}>
                  {type === "fontawesome" ? (
                    <FontAwesomeIcon icon={icon} style={{ color: color }} />
                  ) : type === "svg" ? (
                    icon // Render SVG icon component
                  ) : null}
                </React.Fragment>
              ))}
            {children}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
