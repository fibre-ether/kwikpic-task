import logo from "../assets/logo.png";
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="fixed z-50 top-0 w-full bg-transparent text-white h-[6.25rem] flex items-center font-semibold text-xl backdrop-blur-sm border-b-[1px] border-white/20 tracking-wide">
      <div className="w-[75%] flex justify-center">
        <div className="w-auto flex space-x-10 px-10 text-gray-400">
          <img src={logo} alt="logo" className="h-[2.1rem]" />
          <p> <Link to="/">Home</Link> </p>
          <p> <Link to="/about">About us</Link> </p>
          <p>FAQ</p>
          <p>Roadmap</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
      </div>
      <div className="w-[20%] flex h-[60%]">
        <div className="bg-[#1a1a1a] h-full rounded-full flex items-center w-auto">
          <p className="mx-6 text-base">Download Now</p>
          <div className="h-[80%] mr-2 bg-white text-black aspect-square rounded-full flex justify-center items-center border-[6px] border-black">
            <AiOutlineArrowDown size={23}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
