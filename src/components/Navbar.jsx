import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#111111] text-gray-300 z-20">
      <div className="text-[#FFD369]">logo</div>
      <div>
        <ul className="hidden md:flex">
          <li>Home </li>
          <li>About</li>
          <li>Works</li>
          <li>
            <a target = "_blank" rel = "noreferrer" href = "https://drive.google.com/file/d/1SOVmaSvVS5LHFMzR-WG58xPv-N56lqIj/view?usp=sharing" className="text-[#00C9FF] font-bold border-2 rounded border-[#00C9FF] px-4 py-3 items-center hover:bg-[#00c8ff53] ">
              Resume
            </a>
          </li>
        </ul>
      </div>
      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/*Mobile*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#111111] flex flex-col justify-center items-center'}>
        <li className=  "py-6 text-4xl">Home</li>
        <li className = "py-6 text-4xl">About</li>
        <li className = "py-6 text-4xl">Works</li>
        <li>
            <a target = "_blank" rel = "noreferrer" href = "https://drive.google.com/file/d/1SOVmaSvVS5LHFMzR-WG58xPv-N56lqIj/view?usp=sharing" className="text-[#00C9FF] font-bold border-2 rounded border-[#00C9FF] px-4 py-3 items-center hover:bg-[#00c8ff53] text-4xl">
              Resume
            </a>
          </li>
      </ul>

      {/*Social*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-">
            <a className="flex justify-between items-center w-full text-gray-300 "
            href="https://www.linkedin.com/in/natheetarn-panyakorn-7497a2213/"
            target={'_blank'} rel='noreferrer'>
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#111111]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/natheetarn"
            target={'_blank'} rel='noreferrer'>
              GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#111111]">
            <a className="flex justify-between items-center w-full text-[#EEEEEE]"
            href="/">
              e-mail <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
