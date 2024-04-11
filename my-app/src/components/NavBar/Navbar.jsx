import React from 'react';
import "./Navbar.scss";
import { Link} from "react-router-dom";
import homeIcon from "../../assets/homeIcon.json";
import Lottie from 'lottie-react';

export default function Navbar(){
	return (
		<div className="navbar">
			<nav>
				<ul>
					<li>
						<Link to="/"><Lottie animationData={homeIcon}/></Link>
					</li>
					<li>
						<Link to="/About">About</Link>
					</li>
					<li>
						<Link to="/Projects">Projects</Link>
					</li>
					<li>
						<Link to="/Contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}