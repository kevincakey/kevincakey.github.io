import React from 'react'
import "./Home.scss"
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import cakeAnimation from "../assets/icons/cakeAnimation.lottie";

const Home = () => {
  return (
    <div id="HomeContainer">
    <div className="lottie-container">
      <DotLottiePlayer
							src={cakeAnimation}
              autoplay
              speed = "2"
							background="transparent"
							>
			</DotLottiePlayer>
    </div>
    </div>
  )
}

export default Home