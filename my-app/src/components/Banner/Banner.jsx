import "./Banner.scss";
import React from 'react';
import resume from "../../assets/KevinGao'sResume.pdf";
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import downloadIcon from "../../assets/downloadIcon.lottie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'

const Banner = () => {
    return (
        <div id="banner">
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
			<FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#74C0FC",}} />
			<FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#74C0FC",}} />
        </div>
    );
}

export default Banner;