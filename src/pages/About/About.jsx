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
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as PythonIcon } from "../../assets/icons/pythonIcon.svg";
import { ReactComponent as ExpressIcon } from "../../assets/icons/expressIcon.svg";
import { ReactComponent as JavaIcon } from "../../assets/icons/javaIcon.svg";
import { ReactComponent as JQueryIcon } from "../../assets/icons/jQueryIcon.svg";
import { ReactComponent as NodejsIcon } from "../../assets/icons/nodejsIcon.svg";
import { ReactComponent as PandasIcon } from "../../assets/icons/pandasIcon.svg";
import { ReactComponent as SQLIcon } from "../../assets/icons/sqlIcon.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/icons/mongodbIcon.svg";

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
        <ul className="icon-grid">
          <li>
            <FontAwesomeIcon className="svgIcons" icon={faHtml5} color="#F06529" />
          </li>
          <li>
            <FontAwesomeIcon className="svgIcons" icon={faCss3} color="#28A4D9" />
          </li>
          <li>
            <FontAwesomeIcon className="svgIcons" icon={faReact} color="#5ED4F4" />
          </li>
          <li>
            <FontAwesomeIcon className="svgIcons" icon={faJsSquare} color="#EFD81D" />
          </li>
          <li>
            <FontAwesomeIcon className="svgIcons" icon={faGitAlt} color="#EC4D28" />
          </li>
          <li>
            <FontAwesomeIcon className="svgIcons" icon={faSass} />
          </li>
          <li>
            <PythonIcon className="svgIcons" />
          </li>
          <li>
            <ExpressIcon className="svgIcons" />
          </li>
          <li>
            <JavaIcon className="svgIcons" />
          </li>
          <li>
            <JQueryIcon className="svgIcons" />
          </li>
          <li>
            <MongoDBIcon className="svgIcons" />
          </li>
          <li>
            <NodejsIcon className="svgIcons" />
          </li>
          <li>
            <PandasIcon className="svgIcons" />
          </li>
          <li>
            <SQLIcon className="svgIcons" />
          </li>
          <li>
            C++
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
