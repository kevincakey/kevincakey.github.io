import "./Banner.scss";
import React from 'react';
import resume from "../../assets/KevinGao'sResume.pdf";
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import downloadIcon from "../../assets/icons/downloadIcon.lottie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'

const Banner = () => {
    return (
        <div id="banner">
			<h1>Kevin Gao</h1>
			<h2>Hi! I'm a student learning software/web development and data analysis. Open to opportunities and website development contracting. Add me to your team!</h2>
            <a id="downloadIcon" href={resume} target="_blank" rel="noreferrer" download="Kevin_Gao's_Resume">
				<DotLottiePlayer
				src={downloadIcon}
				loop
				hover
				background="transparent"
				>
				</DotLottiePlayer>
			</a>
			<a href={resume} target="_blank" rel="noreferrer">View Resume</a>
			<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kevincakey/">
				<FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#74C0FC",}} />
			</a>
			<a target="_blank" rel="noreferrer" href="https://github.com/kevincakey">
				<FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#74C0FC",}} />
			</a>
        </div>
    );
}

export default Banner;