import React from 'react';
import "./Navbar.scss";
import { Link} from "react-router-dom";
import homeIcon from "../../assets/homeIcon.lottie";
import aboutIcon from "../../assets/aboutIcon.lottie";
import projectsIcon from "../../assets/projectsIcon.lottie";
import contactIcon from "../../assets/contactIcon.lottie";
import Lottie from 'lottie-react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const Navbar = () => {

	return (
		<div className="navbar">
			<nav>
				<ul>
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