import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className="bg-black text-white h-[5.5rem] flex items-center font-semibold text-lg">
      <div className="w-[75%] flex justify-center">
        <div className="w-[65%] flex justify-between px-10 text-gray-400">
        <img src={logo} alt="logo" className='h-[2.1rem]'/>
          <p>Home</p>
          <p>About us</p>
          <p>FAQ</p>
          <p>Roadmap</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
      </div>
      <div className="w-[25%] flex h-[65%]">
        <div className="bg-[#1a1a1a] h-full rounded-full flex items-center">
          <p className="mx-4">Download Now</p>
          <div className="h-[80%] mr-2 bg-white text-black aspect-square rounded-full flex justify-center items-center border-[6px] border-black">
            !
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
