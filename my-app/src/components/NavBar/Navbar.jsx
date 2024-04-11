import React from 'react';
import "./Navbar.scss";
import { Link} from "react-router-dom";
import homeIcon from "../../assets/homeIcon.json";
import aboutIcon from "../../assets/aboutIcon.json";
import projectsIcon from "../../assets/projectsIcon.json";
import contactIcon from "../../assets/contactIcon.json";
import Lottie from 'lottie-react';

const Navbar = () => {
	return (
		<div className="navbar">
			<nav>
				<ul>
					<li>
						<Link to="/"><Lottie animationData={homeIcon}/></Link>
					</li>
					<li>
						<Link to="/About"><Lottie animationData={aboutIcon}/></Link>
					</li>
					<li>
						<Link to="/Projects"><Lottie animationData={projectsIcon}/></Link>
					</li>
					<li>
						<Link to="/Contact"><Lottie animationData={contactIcon}/></Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;