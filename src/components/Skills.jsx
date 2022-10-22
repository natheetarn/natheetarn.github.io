import React from "react";
import Skill from "./Skill";
import { skills } from "../constants";

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-[#111111]">
      <div className = "max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full space-y-4">
        <h1 className="font-extrabold my-4 text-5xl sm:text-7xl text-transparent  bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] ">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center items-center">
          {
              skills.map((skill) => {
                return (
                  <Skill key = {skill.id} title={skill.title} logo={skill.logo}></Skill>
                )
              })
          } 
        </div>
      </div>
    </div>
  );
};

export default Skills;
