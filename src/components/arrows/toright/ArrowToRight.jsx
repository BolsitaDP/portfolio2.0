import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import DelayedLink from "../../navbar/DelayedLink";
import "./arrowtoright.css";

const ArrowToRight = ({ goTo, goToPage }) => {
  const handleLeft = () => {
    goTo("left");
  };
  return (
    <div className={`arrowToRightContainer`}>
      <DelayedLink delay={700} to={`/${goToPage}`}>
        <MdKeyboardArrowRight onClick={handleLeft} className="arrowToRight" />
      </DelayedLink>
    </div>
  );
};

export default ArrowToRight;
