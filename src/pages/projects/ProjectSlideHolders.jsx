import React from "react";

const ProjectSlideHolders = ({ href, img, label }) => {
  return (
    <div className="slide-holder">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img alt="" src={img} />
      </a>

      <p className="legend">{label}</p>
    </div>
  );
};

export default ProjectSlideHolders;
