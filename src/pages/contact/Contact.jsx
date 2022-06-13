import React, { useEffect, useState } from "react";
import ArrowToUp from "../../components/arrows/toup/ArrowToUp";
import Guides from "../../components/guides/Guides";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./contact.css";

const Contact = ({ cameFrom, cameFromPage }) => {
  const [directionOut, setDirectionOut] = useState("");
  const [directionIn, setDirectionIn] = useState("");

  useEffect(() => {
    setDirectionIn(cameFromPage);
  }, []);

  const goTo = (data) => {
    switch (data) {
      case "down":
        setDirectionOut("down");
        break;
      case "up":
        setDirectionOut("up");
        break;
      case "right":
        setDirectionOut("right");
        break;
      case "left":
        setDirectionOut("left");
        break;

      default:
        break;
    }
    cameFrom("contact");
  };
  return (
    <div
      className={`container contactContainer ${directionOut} ${directionIn}`}
    >
      <Guides down="" up="Home" left="" right="" />
      <ArrowToUp goTo={goTo} goToPage="" />
      <div className="contactContent">
        <div className="title contactTitle">Contact</div>
        <div className="contactInfo">
          <ContactInfo />
          <div className="contactInfoMid">
            Or send me 
            <span>a message:</span>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
