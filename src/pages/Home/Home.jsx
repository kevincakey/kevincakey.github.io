import React from "react";
import "./Home.scss";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import cakeAnimation from "../../assets/icons/cakeAnimation.lottie";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="cover">
      <div id="HomeContainer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
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
