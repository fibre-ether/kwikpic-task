import devices from "../assets/devices.png";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

function Home() {
  let ele1 = useRef(null)
  let ele2 = useRef(null)
  let ele3 = useRef(null)
  let ele4 = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    var tl1 = gsap.timeline({repeat: -1});
    tl1.to(ele1, {y: -10, duration: 1});
    tl1.to(ele1, {y: 0, duration: 1});

    var tl2 = gsap.timeline({repeat: -1});
    tl2.to(ele2, {y: -10, duration: 1});
    tl2.to(ele2, {y: 0, duration: 1});

    var tl3 = gsap.timeline({repeat: -1});
    tl3.to(ele3, {y: -10, duration: 1});
    tl3.to(ele3, {y: 0, duration: 1});

    var tl4 = gsap.timeline({repeat: -1});
    tl4.to(ele4, {y: -10, duration: 1});
    tl4.to(ele4, {y: 0, duration: 1});

    gsap.to('.left', {
      x: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".left",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to('.right', {
      x: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".right",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })
    
    const textBoxes = gsap.utils.toArray('.textbox');
    textBoxes.forEach((box, i) => {
      const anim = gsap.fromTo(box, {opacity: 0}, {duration: 1, opacity: 1});
      ScrollTrigger.create({
        trigger: box,
        start: "top 70%",
        animation: anim,
        toggleActions: 'play pause resume reset',
      });
    });
  })



  return (
    <div className="bg-black tracking-wider overflow-x-clip">
      {/* Section 1 */}
      <div className="h-screen relative">
              <img ref={el => ele1=el} src={img1} alt="1" className="left absolute h-32 md:h-40 aspect-square top-[20%] left-[10%]"/>
              <img ref={el => ele2=el} src={img2} alt="2" className="left absolute h-40 md:h-56 aspect-square bottom-[10%] left-[5%]"/>
              <img ref={el => ele3=el} src={img3} alt="3" className="right absolute h-32 md:h-40 aspect-square top-[20%] right-[10%]"/>
              <img ref={el => ele4=el} src={img4} alt="4" className="right absolute h-40 md:h-56 aspect-square bottom-[10%] right-[5%]"/>
            
        <div className="z-20 relative h-full text-white flex flex-col justify-center items-center">
          <p className="mt-5 text-4xl md:text-7xl font-bold">10% returns.</p>
          <p className="mt-5 text-4xl md:text-7xl font-bold">Now yours.</p>
          <p className="mt-7 text-base md:text-3xl font-medium">
            Invest and grow your stablecoins.
          </p>
          <div className="bg-white text-black h-20 w-52 rounded-xl border-[3px] border-gray-400 flex justify-center items-center text-lg md:text-xl font-semibold mt-12 glow transition-shadow">
            Invest now
          </div>
        </div>
        {/* bg circles */}
        <div className="z-10 absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-blue-400 opacity-50 w-80 aspect-square rounded-full blur-[500px]"></div>
          <div className="bg-red-400 opacity-50  w-80 aspect-square rounded-full blur-[500px]"></div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-auto flex text-center lg:text-left">
        <div className="sticky top-0 h-screen w-[45%] lg:flex sm:hidden justify-center items-center">
          <img src={devices} alt="devices" className="scale-50" />
        </div>
        <div className="h-auto text-white lg:w-[55%] flex flex-col sm:items-center sm:text-center space-y-10 md:space-y-0">
          <div className="h-[30vh] lg:h-screen w-full flex flex-col justify-center items-start pl-10 pr-20 textbox">
            <p className="lg:leading-[4.25rem] text-4xl lg:text-7xl font-bold mb-8">
              They grow so fast
            </p>
            <p className="lg:leading-normal text-base lg:text-2xl text-gray-400">
              Your USDTs and USDCs feel so at home here, that they will grow by
              10% by the end of the year. Allow your stable coins to generate
              stable returns for you.
            </p>
          </div>
          <div className="h-[30vh] lg:h-screen w-full flex flex-col justify-center items-start pl-10 pr-20 textbox">
            <p className="lg:leading-[4.25rem] text-4xl lg:text-7xl font-bold mb-8">
              No secrets, no fine print
            </p>
            <p className="lg:leading-normal text-base lg:text-2xl text-gray-400">
              There are no hidden fees on Flint. Whatever charges you will incur
              will be shared with you upfront. We take transparency seriously.
            </p>
          </div>
          <div className="h-[30vh] lg:h-screen w-full flex flex-col justify-center items-start pl-10 pr-20 textbox">
            <p className="lg:leading-[4.25rem] text-4xl lg:text-7xl font-bold mb-8">
              Unconditionally unclocked
            </p>
            <p className="lg:leading-normal text-base lg:text-2xl text-gray-400">
              There are no lock-in periods on Flint. You can withdraw anytime
              and have the funds in your wallet instantly. We keep your
              investment liquid, even when its growing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
