import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import DelayedLink from "../../navbar/DelayedLink";
import "./arrowtoleft.css";

const ArrowToRight = ({ goTo, goToPage }) => {
  const handleRight = () => {
    goTo("right");
  };
  return (
    <div className={`arrowToLeftContainer`}>
      <DelayedLink delay={700} to={`/${goToPage}`}>
        <MdKeyboardArrowLeft onClick={handleRight} className="arrowToLeft" />
      </DelayedLink>
    </div>
  );
};

export default ArrowToRight;
