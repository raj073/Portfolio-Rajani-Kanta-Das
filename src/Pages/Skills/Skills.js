import React from "react";
import TechnicalSkills from "../../Components/TechnicalSkills/TechnicalSkills";

const Skills = () => {
  return (
    <div className="my-5 mx-[7%] mt-8" id="skills">
      <div className="text-center mb-5">
        <h3 className="text-4xl font-bold mb-5">TECHNICAL SKILLS</h3>{" "}
        <hr className="border-1 border-blue-500 cursor-pointer hover:border-orange-500 duration-500" />
      </div>
      <TechnicalSkills></TechnicalSkills>
    </div>
  );
};

export default Skills;
