import React, { useEffect } from "react";
import "./Home.scss";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import cakeAnimation from "../../assets/icons/cakeAnimation.lottie";
import { motion } from "framer-motion";
import splatSound from "../../assets/sounds/splat.mp3";

const Home = () => {
  const containerVariants = {
    hidden: {
      filter: "blur(100px)",
    },
    visible: {
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        velocity: 1000,
        duration: 2,
        bounce: 0.1,
      },
    },
    exit: {
      x: "-100vw",
      filter: "blur(100px)",
      transition: {
        type: "spring",
        velocity: 1000,
        duration: 0.2,
        bounce: 0.1,
      },
    },
  };
  return (
    <div id="cover">
      <div id="HomeContainer">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="lottie-container"
        >
          <DotLottiePlayer
            src={cakeAnimation}
            autoplay
            speed="2"
            background="transparent"
          ></DotLottiePlayer>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
