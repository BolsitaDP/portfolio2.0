import React, { useEffect, useState } from "react";
import Guides from "../../components/guides/Guides";
import ArrowToLeft from "../../components/arrows/toleft/ArrowToLeft";
import "./aboutme.css";

const Aboutme = ({ cameFrom, cameFromPage }) => {
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
    cameFrom("aboutme");
  };
  return (
    <div
      className={`container aboutmeContainer ${directionOut} ${directionIn}`}
    >
      <Guides up="" down="" left="Home" right="" />
      <ArrowToLeft goTo={goTo} goToPage="" />
      Aboutme
    </div>
  );
};

export default Aboutme;
