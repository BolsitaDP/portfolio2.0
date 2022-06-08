import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import "./darkmode.css";

const Darkmode = ({ mode, icon }) => {
  return (
    <div className="modeContainer">
      <button onClick={mode} className="circularButton">
        {icon === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  );
};

export default Darkmode;
