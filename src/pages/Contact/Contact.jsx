import React from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Map from "../../components/Map/Map.jsx";

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

  return (
    <div id="contact-container">
      <h1 className="title">Contact</h1>
      <div className="contactForm">
        <form onSubmit={sendEmail}>
          <ul>
            <li className="half">
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className="half">
              <input type="email" name="email" placeholder="Email" required />
            </li>
            <li>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
      <Map id="map" />
    </div>
  );
};

export default Contact;
