import React, { useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Map from "../../components/Map/Map.jsx";
import { motion } from "framer-motion";

const Contact = () => {
  const [emailError, setEmailError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_qp35vwp",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_3r0uxfb",
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "e1QQRubcOVbnDZGk_"
      )
      .then(
        (result) => {
          setShowSuccessPopup(true);
          setTimeout(() => {
            setShowSuccessPopup(false);
          }, 3000); // Close the success popup after 3 seconds
        },
        (error) => {
          setEmailError("Failed to send email. Please try again.");
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
          {showSuccessPopup && (
            <div className="success-popup">
              <p>Email sent successfully!</p>
            </div>
          )}
        </div>
        <Map id="map" />
      </motion.div>
    </>
  );
};

export default Contact;
