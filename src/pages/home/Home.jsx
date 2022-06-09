import React, { useEffect, useState } from "react";
import ArrowToDown from "../../components/arrows/todown/ArrowToDown";
import ArrowToRight from "../../components/arrows/toright/ArrowToRight";
import ArrowToUp from "../../components/arrows/toup/ArrowToUp";
import ArrowToLeft from "../../components/arrows/toleft/ArrowToLeft";
import Guides from "../../components/guides/Guides";
import "./home.css";

const Home = ({ cameFrom, cameFromPage }) => {
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
    cameFrom("home");
  };

  return (
    <div className={`container homeContainer ${directionOut} ${directionIn}`}>
      <Guides up="Skills" down="Contact" left="Projects" right="About Me" />
      <ArrowToUp goTo={goTo} goToPage="skills" />
      <ArrowToDown goTo={goTo} goToPage="contact" />
      <ArrowToRight goTo={goTo} goToPage="aboutme" />
      <ArrowToLeft goTo={goTo} goToPage="projects" />
      <div className="homeLeft">
        <div className="homeTitle">
          <span>Santiago</span>
          <span>Giraldo's</span>
        </div>
        <div className="homeSubtitle">Portfolio</div>
        <div className="homeSocials">
          <a href="http://a" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="http://a" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="homeRight">
        <div className="homeImg">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
