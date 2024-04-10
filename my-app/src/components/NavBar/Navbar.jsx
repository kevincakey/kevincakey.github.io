import React from 'react';
import "./Navbar.scss";
import { Link} from "react-router-dom";

export default function Navbar(){
	return (
		<div className="navbar">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
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