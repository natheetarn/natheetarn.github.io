import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#111111] text-gray-300 z-20">
      <div>
      <Link to="home" smooth duration={500} className="cursor-pointer font-extrabold text-transparent  bg-clip-text bg-gradient-to-r hover:from-[#00C9FF] from-gray-300 to-gray-300 hover:to-[#92FE9D]">
      Natheetarn P
            </Link></div>
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth duration={500} className="font-bold text-transparent
            transition-all ease-in duration-500  
            bg-clip-text bg-gradient-to-r hover:from-[#00C9FF] 
            from-gray-300 to-gray-300 hover:to-[#92FE9D] "
            >
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="about" smooth duration={500} offset={-100} className = "font-bold text-transparent  bg-clip-text bg-gradient-to-r hover:from-[#00C9FF] from-gray-300 to-gray-300 hover:to-[#92FE9D]">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to="skills" smooth duration={500} offset={-100} className = "font-bold text-transparent  bg-clip-text bg-gradient-to-r hover:from-[#00C9FF] hover:to-[#92FE9D] from-gray-300 to-gray-300">
              Skills
            </Link>
          </li>
          <li>
            {" "}
            <Link to="works" smooth duration={500} offset={-100} className="font-bold text-transparent  bg-clip-text bg-gradient-to-r hover:from-[#00C9FF] hover:to-[#92FE9D] from-gray-300 to-gray-300">
              Works
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1SOVmaSvVS5LHFMzR-WG58xPv-N56lqIj/view?usp=sharing"
              className="text-[#00C9FF] font-bold border-2 rounded border-[#00C9FF] px-4 py-3 items-center hover:bg-[#00c8ff53] "
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#111111] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">
          <Link to="home" smooth duration={500} offset={-100} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link to="about" smooth duration={500} offset={-100} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link to="skills" smooth duration={500} offset={-100} onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link to="works" smooth duration={500} onClick={handleClick}>
            Works
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1SOVmaSvVS5LHFMzR-WG58xPv-N56lqIj/view?usp=sharing"
            className="text-[#00C9FF] font-bold border-2 rounded border-[#00C9FF] px-4 py-3 items-center hover:bg-[#00c8ff53] text-4xl"
          >
            Resume
          </a>
        </li>
      </ul>

      {/*Social*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#111111]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://www.linkedin.com/in/natheetarn-panyakorn-7497a2213/"
              target={"_blank"}
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#111111]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/natheetarn"
              target={"_blank"}
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#111111]">
            <a
              className="flex justify-between items-center w-full text-[#EEEEEE]"
              href="mailto:natheetarn@gmail.com"
            >
              e-mail <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
