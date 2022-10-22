import React from "react";
import { BiCode } from "react-icons/bi";
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#111111]">
      <div className="max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full space-y-4">
        <p className="text-gray-300">Hi, my name is</p>
        <h1 className="font-extrabold text-4xl sm:text-7xl text-transparent  bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">Natheetarn</h1>
        <h2 className="text-lg sm:text-3xl text-[#27ebe1]">A Student/Developer.</h2>
        <p className="text-gray-400 py-4 max-w-[600px]">
            I'm a 2nd year software engineering student, currently looking for an internship
        </p>
        <div>
            <Link to = 'works' smooth duration = {500} className="text-[#00C9FF] max-w-[160px] font-bold border-2 rounded border-[#00C9FF] px-6 py-3 my-2 flex items-center hover:bg-[#00c8ff53] animate-pulse cursor-pointer">
                My works 
                <span>
                    <BiCode className="ml-3"/>
                </span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
