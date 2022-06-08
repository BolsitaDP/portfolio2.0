import React from "react";

const EachSkill = ({ title, percentage }) => {
  return (
    <div className="skillsEachSkill">
      <div className="skillsEachSkillNeumorphism1">
        <div className="skillsEachSkillNeumorphism2">
          <div className="skillsEachSkillTitle">{title}</div>
          <div className="skillsEachSkillPercentage">{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default EachSkill;
