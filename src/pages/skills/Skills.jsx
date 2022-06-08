import React, { useEffect, useState } from "react";
import ArrowToDown from "../../components/arrows/todown/ArrowToDown";
import Guides from "../../components/guides/Guides";
import EachSkill from "./EachSkill";
import "./skills.css";

const Skills = ({ cameFrom, cameFromPage }) => {
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
    cameFrom("skills");
  };

  return (
    <div className={`container skillsContainer ${directionOut} ${directionIn}`}>
      <Guides down="Home" up="" left="" right="" />
      <ArrowToDown goTo={goTo} goToPage="" />
      <div className="skillsContent">
        <div className="title skillsTitle">Skills</div>
        <div className="skillsInfo">
          As a react-focused junior web developer, I have distinguished skills
          in HTML, CSS, and JavaScript. Also in my learning path were PHP,
          MySQL, some CSS frameworks and some JavaScript libraries that I used
          according to my needs. Currently I focus on improving my programming
          in React. I personally prefer to use CSS without frameworks because I
          feel like I have more control over what I do, but I have no problem
          using Bootstrap or Tailwind.
        </div>
        <div className="skillsCards">
          <EachSkill title="HTML" percentage="70" />
          <EachSkill title="CSS" percentage="80" />
          <EachSkill title="JS" percentage="60" />
          <EachSkill title="PHP" percentage="60" />
          <EachSkill title="MySQL" percentage="70" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
