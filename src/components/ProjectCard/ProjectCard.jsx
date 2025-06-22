import React, { useState } from "react";
import "./ProjectCard.scss";

const ProjectCard = ({
  name,
  icons,
  tagList,
  website,
  emblem,
  description,
}) => {
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
        aria-label={`Visit ${name} project`}
      >
        <div
          className="project-description"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            opacity: isHovered ? "1" : "0",
          }}
        >
          <h3 className="project-name">{name}</h3>
          {description}
        </div>

        <div
          className="card"
          style={{
            border: "1px solid",
            filter: isHovered ? "brightness(60%) blur(2px)" : "none",
            transition: "filter 0.3s",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="emblem-wrapper">{emblem}</div>

          <div className="icon-wrapper">
            {icons &&
              icons.map(({ icon }, index) => (
                <div className="icon-svg" key={index}>
                  {icon}
                </div>
              ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
