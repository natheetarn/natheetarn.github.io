import React from "react";

const About = () => {
  return (
    <div name = "about" className="w-full min-h-screen bg-[#111111]">
      <div className="max-w-[850px] mx-auto px-12 flex flex-col justify-center items-center h-full space-y-4">
        <h1 className="font-extrabold my-4 text-5xl sm:text-7xl text-transparent  bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
          About
        </h1>
        <p className="text-gray-200 text-sm sm:text-lg">
          &emsp;A <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] pr-1">software engineering student </span> 
          with a burning passion, a quick learner, and a cadet at 42Bangkok.
        </p>
        <p className="text-gray-200 text-sm sm:text-lg">
          &emsp;I've been programming since highschool, focusing on <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">C/C++ language and competitive programming.</span> My Programming journey begins with POSN(also known as Olympic) informatics camp,
          where I passed the regional test and advanced to second round, learning a lot of data structure and algorithms.
        </p>
        <p className="text-gray-200 text-sm sm:text-lg">
          &emsp;In my free time, I've been studying web programming<span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">(HTML, CSS, JS, React)</span> on my own, using online resources such as Coursera, Udemy, freeCodeCamp, etc.
          I've built many personal projects by myself to improve my skills.
        </p>
        <p className="text-gray-200 text-sm sm:text-lg">
          &emsp;I'm looking to further improve my skills and find experience in real work environment
        </p>
      </div>
    </div>
  );
};

export default About;
