import React from 'react';
import "./Navbar.scss";
import { Link} from "react-router-dom";
import homeIcon from "../../assets/icons/homeIcon.lottie";
import aboutIcon from "../../assets/icons/aboutIcon.lottie";
import projectsIcon from "../../assets/icons/projectsIcon.lottie";
import contactIcon from "../../assets/icons/contactIcon.lottie";
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const Navbar = () => {

	return (
		<div className="navbar-container">
			<nav>
				<ul id="navbar-icons">
					<li>
						<Link to="/">
							<DotLottiePlayer
							src={homeIcon}
							loop
							hover
							background="transparent"
							>
							</DotLottiePlayer>
						</Link>
					</li>
					<li>
						<Link to="/About">
							<DotLottiePlayer
							src={aboutIcon}
							loop
							hover
							background="transparent"
							>
							</DotLottiePlayer>
							</Link>
					</li>
					<li>
						<Link to="/Projects">
							<DotLottiePlayer
							src={projectsIcon}
							loop
							hover
							background="transparent"
							>
							</DotLottiePlayer>
						</Link>
					</li>
					<li>
						<Link to="/Contact">
							<DotLottiePlayer
							src={contactIcon}
							loop
							hover
							background="transparent"
							>
							</DotLottiePlayer>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;