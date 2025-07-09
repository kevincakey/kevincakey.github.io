import React, { useState } from "react";
import "./ProjectCard.scss";

const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth <= 768;

const ProjectCard = ({
  name,
  icons,
  tagList,
  website,
  emblem,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile()) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile()) setIsHovered(false);
  };

  const handleCardClick = (e) => {
    if (isMobile()) {
      e.preventDefault(); // Prevent link navigation on mobile click
      setModalOpen(true);
    }
  };

  const handleModalClose = (e) => {
    e.stopPropagation();
    setModalOpen(false);
  };

  return (
    <div className="card-container">
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
        aria-label={`Visit ${name} project`}
        onClick={handleCardClick}
      >
        {/* Only show hover description on desktop */}
        {!isMobile() && (
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
        )}

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
      {/* Modal for mobile */}
      {modalOpen && isMobile() && (
        <div className="project-modal" onClick={handleModalClose}>
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={handleModalClose}>
              &times;
            </button>
            <h3 className="project-name">{name}</h3>
            <div className="modal-description">{description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
