import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = ({ icons, tagList, children }) => {
  return (
    <div>
      {icons && icons.map(({ icon, color }, index) => (
        <FontAwesomeIcon icon={icon} key={index} style={{ color: color }} />
      ))}
      {children}
    </div>
  );
}

export default ProjectCard;