import React, { useState } from "react";
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
              icons.map(({ icon }, index) => (
                <React.Fragment className="icon-svg" key={index}>
                  {/* Check if the icon is an SVG component */}
                  {typeof icon.type === "function" ? (
                    <div className="icon-svg">{icon}</div>
                  ) : (
                    // Handle other types of icons (e.g., FontAwesomeIcon)
                    <React.Fragment>{icon}</React.Fragment>
                  )}
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
