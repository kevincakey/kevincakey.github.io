import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = ({ name, icons, tagList, children }) => {
  return (
    <div style={{border: '1px solid'}}>
      <h3>{name}</h3>
      {icons && icons.map(({ icon, color }, index) => (
        <FontAwesomeIcon icon={icon} key={index} style={{ color: color }} />
      ))}
      {children}
    </div>
  );
}

export default ProjectCard;