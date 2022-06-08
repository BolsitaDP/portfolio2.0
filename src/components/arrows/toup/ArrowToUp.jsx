import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import DelayedLink from "../../navbar/DelayedLink";
import "./arrowtoup.css";

const ArrowToUp = ({ goTo, goToPage }) => {
  const handleDown = () => {
    goTo("down");
  };

  return (
    <div className={`arrowToUpContainer`}>
      <DelayedLink delay={700} to={`/${goToPage}`}>
        <MdKeyboardArrowUp onClick={handleDown} className="arrowToUp" />
      </DelayedLink>
    </div>
  );
};

export default ArrowToUp;
