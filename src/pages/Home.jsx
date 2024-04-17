import React from 'react'
import "./Home.scss"
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import cakeAnimation from "../assets/icons/cakeAnimation.lottie";

const Home = () => {
  return (
    <><h1>Home</h1>
    <DotLottiePlayer
							src={cakeAnimation}
              autoplay
							loop
              speed = "2"
							background="transparent"
							>
							</DotLottiePlayer></>
  )
}

export default Home