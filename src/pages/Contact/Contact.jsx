import React, { useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Map from "../../components/Map/Map.jsx";
import { motion } from "framer-motion";

const Contact = () => {
  const [emailError, setEmailError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = e.target;

    // Validate email format
    if (!validateEmail(email.value)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Send email using emailjs
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

    // Reset form and clear email error
    e.target.reset();
    setEmailError("");
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const containerVariants = {
    hidden: {
      x: "50vw",
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
      x: "-50vw",
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
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <Map id="map" />
      </motion.div>
    </>
  );
};

export default Contact;
