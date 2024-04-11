import React, { useState } from 'react';
import "./Navbar.scss";
import { Link} from "react-router-dom";
import homeIcon from "../../assets/homeIcon.json";
import aboutIcon from "../../assets/aboutIcon.json";
import projectsIcon from "../../assets/projectsIcon.json";
import contactIcon from "../../assets/contactIcon.json";
import Lottie from 'lottie-react';

const Navbar = () => {

	const [hoverHome, setHoverHome] = useState(false);
	const [hoverAbout, setHoverAbout] = useState(false);
	const [hoverProjects, setHoverProjects] = useState(false);
	const [hoverContact, setHoverContact] = useState(false);
	

	return (
		<div className="navbar">
			<nav>
				<ul>
					<li>
						<Link to="/"><Lottie animationData={homeIcon} loop={hoverHome}/></Link>
					</li>
					<li>
						<Link to="/About"><Lottie animationData={aboutIcon} loop={hoverAbout}/></Link>
					</li>
					<li>
						<Link to="/Projects"><Lottie animationData={projectsIcon} loop={hoverProjects}/></Link>
					</li>
					<li>
						<Link to="/Contact"><Lottie animationData={contactIcon} loop={hoverContact}/></Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;