import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import DelayedLink from "../../navbar/DelayedLink";
import "./arrowtodown.css";

const ArrowToDown = ({ goTo, goToPage }) => {
  const handleUp = () => {
    goTo("up");
  };

  return (
    <div className={`arrowToDownContainer`}>
      <DelayedLink delay={700} to={`/${goToPage}`}>
        <MdKeyboardArrowDown onClick={handleUp} className="arrowToDown" />
      </DelayedLink>
    </div>
  );
};

export default ArrowToDown;
