import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfoContainer">
      <div className="contactInfoTitle">Where you can find me?</div>
      <div className="contactInfoEach">sgiraldo118@gmail.com</div>
      <div className="contactInfoEach">
        <a href="https://github.com/BolsitaDP" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
      <div className="contactInfoEach">
        <a
          href="https://www.linkedin.com/in/santiago-giraldo-2a6b1114a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
