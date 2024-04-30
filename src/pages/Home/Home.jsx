import React from "react";
import "./Home.scss";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import cakeAnimation from "../../assets/icons/cakeAnimation.lottie";
import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: {
      x: "-100vw",
      filter: "blur(100px)",
    },
    visible: {
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        velocity: 1000,
        duration: 0.5,
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

  // const bannerVariants = {
  //   hidden: {
  //     opacity: 1,
  //     y: "-100%",
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       duration: 5,
  //     },
  //   },
  //   visible: {
  //     opacity: 0,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       duration: 5,
  //     },
  //   },
  //   exit: {
  //     opacity: 1,
  //     y: "-100%",
  //     transition: {
  //       duration: 6,
  //     },
  //   },
  // };

  return (
    <>
      {/* <AnimatePresence>
        <motion.div
          id="banner-wrapper"
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Banner id="banner"></Banner>
        </motion.div>
      </AnimatePresence> */}
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
    </>
  );
};

export default Home;
