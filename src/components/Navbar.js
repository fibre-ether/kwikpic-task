import logo from "../assets/logo.png";
import { AiOutlineArrowDown } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsTwitter, BsTelegram, BsLinkedin, BsYoutube} from 'react-icons/bs'
import { useLocation } from 'react-router-dom';
function Navbar() {
  const location = useLocation()
  const [expanded, setExpanded] = useState(false)
  return (
    <div className={`fixed z-50 top-0 w-screen text-white ${expanded ? "h-full bg-black flex-col" : "h-[6.25rem] bg-transparent items-start"} flex font-semibold text-base lg:text-xl backdrop-blur-sm border-b-[1px] border-white/20 tracking-wide transition-all`}>
      <div className="lg:hidden sm:flex w-full flex items-center justify-between px-10 h-[6.25rem]">
        <img src={logo} alt="logo" className="h-[2.1rem]" />
        <GiHamburgerMenu size={30} onClick={()=>setExpanded(!expanded)}/>
      </div>
      {expanded && 
        <div className="h-[calc(100vh-6.25rem)] flex flex-col text-gray-400">
          <div className="h-[13%] px-10 "><Link to='/'>Home</Link></div>
          <div className="h-[13%] px-10 "><Link to='/about'>About us</Link></div>
          <div className="h-[13%] px-10 ">FAQ</div>
          <div className="h-[13%] px-10 ">Roadmap</div>
          <div className="h-[13%] px-10 ">Careers</div>
          <div className="h-[13%] px-10 ">Blog</div>
          <div className="h-[5%] flex items-center justify-center">Join the community</div>
          <div className="h-[15%] flex items-center justify-around text-white">
          <BsTwitter size={30} /> <BsTelegram size={30} /> <BsLinkedin size={30} /> <BsYoutube size={30} /> 
          </div>
        </div>
      }
      <div className="w-[75%] justify-center items-center lg:flex hidden h-[6.25rem]">
        <div className="w-auto flex space-x-10 px-10 text-gray-400">
          <img src={logo} alt="logo" className="h-[2.1rem]" />
          <p> <Link to="/" className={`${location.pathname==="/" && "text-white"}`}>Home</Link> </p>
          <p> <Link to="/about" className={`${location.pathname==="/about" && "text-white"}`}>About us</Link> </p>
          <p>FAQ</p>
          <p>Roadmap</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
      </div>
      <button className="w-[20%] lg:flex hidden items-center h-[6.25rem]">
        <div className="bg-[#1a1a1a] h-[60%] rounded-full flex items-center w-auto">
          <p className="mx-6 text-base">Download Now</p>
          <div className="h-[80%] mr-2 bg-white text-black aspect-square rounded-full flex justify-center items-center border-[6px] border-black">
            <AiOutlineArrowDown size={23}/>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Navbar;
