import React, { useEffect } from "react";
import "./Home.scss";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import cakeAnimation from "../../assets/icons/cakeAnimation.lottie";
import { motion } from "framer-motion";
import splatSound from "../../assets/sounds/splat.mp3";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      const audio = new Audio(splatSound);
      audio.play().catch((error) => {
        // Log or handle the error
        console.error("Failed to play sound:", error);
      });
    }, 800); // Delay sound playback by 1.5 seconds
  }, []);

  return (
    <div id="cover">
      <div id="HomeContainer">
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            delay: 1,
            duration: 2,
            stiffness: 100,
          }}
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
