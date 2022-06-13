import React from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qluehla",
        "template_60vyekr",
        e.target,
        "tnDG3RakwpWrY8TPs"
      )
      .then(
        function (response) {
          console.log("Success!", response.status, response.text);
        },
        function (error) {
          console.log("Failed...", error);
        }
      );
  };
  return (
    <form className="contactForm" onSubmit={sendEmail}>
      <div className="contactFormName">
        <input
          type="text"
          className="contactFormInput"
          placeholder="Your name"
          name="name"
        />
      </div>
      <div className="contactFormEmail">
        <input
          type="email"
          className="contactFormInput"
          placeholder="Your email"
          name="email"
        />
      </div>
      <div className="contactFormMessage">
        <textarea
          className="contactFormInput"
          id="textarea"
          placeholder="Your message"
          name="message"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button type="submit" className="contactFormSubmitButton">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
