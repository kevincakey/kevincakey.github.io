import React from "react";
import "./Contact.scss";
import Banner from "../../components/Banner/Banner";
import emailjs from "@emailjs/browser";
import Map from "../../components/Map/Map.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qp35vwp",
        "template_3r0uxfb",
        e.target,
        "e1QQRubcOVbnDZGk_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const containerVariants = {
    hidden: {
      x: "100vw",
      filter: "blur(100px)",
    },
    visible: {
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        velocity: 1000,
        duration: 0.2,
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
    <>
      {/* <Banner></Banner> */}
      <motion.div
        id="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="title">Contact</h1>
        <div className="contactForm">
          <form onSubmit={sendEmail}>
            <input
              className="half"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="half"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea placeholder="Message" name="message" required></textarea>
            <input type="submit" value="SEND" />
          </form>
        </div>
        <Map id="map" />
      </motion.div>
    </>
  );
};

export default Contact;
