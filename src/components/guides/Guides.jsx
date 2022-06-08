import React from "react";
import "./guides.css";

const Guides = ({ up, down, left, right }) => {
  return (
    <div className="guidesContainer">
      <div className="guide guideUp">{`${up}`}</div>
      <div className="guide guideDown">{`${down}`}</div>
      <div className="guide guideLeft">{`${left}`}</div>
      <div className="guide guideRight">{`${right}`}</div>
    </div>
  );
};

export default Guides;
