import React, { useEffect, useState } from "react";
import Guides from "../../components/guides/Guides";
import ArrowToRight from "../../components/arrows/toright/ArrowToRight";
import PorjectsCarousel from "./PorjectsCarousel";
import "./projects.css";

const Projects = ({ cameFrom, cameFromPage }) => {
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
    cameFrom("projects");
  };

  return (
    <div
      className={`container projectsContainer ${directionOut} ${directionIn}`}
    >
      <Guides down="" up="" left="" right="Home" />
      <ArrowToRight goTo={goTo} goToPage="" />
      <div className="projectsContent">
        <div className="title projectsTitle">Projects</div>
        <div className="projectsInfo">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          architecto, fugiat asperiores atque voluptatem aliquid dicta
          consectetur perspiciatis voluptate ut.
        </div>
        <div className="projectsCarousel">
          <PorjectsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Projects;
