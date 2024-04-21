import React from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import pythonIcon from "../../assets/icons/pythonIcon.jsx";

const About = () => {
  return (
    <div id="about-container">
      <h1 className="title">About</h1>
      <div id="about-body">
        <h2>
          Currently exploring software development and data science. <br />
          Looking for opportunities to learn more <br />
        </h2>
        <h3>
          Open to full/part-time jobs, internships, website contracting, and
          private tutoring !!link secret teaching resume!!.
        </h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </li>
          <li>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </li>
          <li>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </li>
          <li>
            <FontAwesomeIcon icon={faSass} />
          </li>
          <li>
            <FontAwesomeIcon icon={faPython} />
          </li>
          {/* <li>
          <pythonIcon id="pythonIcon" />
        </li> */}
        </ul>
      </div>
    </div>
  );
};

export default About;
