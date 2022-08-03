import devices from '../assets/devices.png'

function Home() {
  return (
    <div className="bg-black tracking-wider">
      {/* Section 1 */}
      <div className="h-screen relative">
        <div className="z-20 relative h-full text-white flex flex-col justify-center items-center">
          <p className="mt-5 text-7xl font-bold">10% returns.</p>
          <p className="mt-5 text-7xl font-bold">Now yours.</p>
          <p className="mt-7 text-3xl font-medium">
            Invest and grow your stablecoins.
          </p>
          <div className="bg-white text-black h-20 w-52 rounded-xl border-[3px] border-gray-400 flex justify-center items-center text-xl font-semibold mt-12 glow transition-shadow">
            Invest now
          </div>
        </div>
        <div className="z-10 absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-red-400 opacity-50  w-80 aspect-square rounded-full blur-[500px]"></div>
          <div className="bg-blue-400 opacity-50 w-80 aspect-square rounded-full blur-[500px]"></div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-auto flex">
        <div className="sticky top-0 h-screen w-[45%] flex justify-center items-center">
          <img src={devices} alt="devices" className='scale-50'/>   
        </div>
        <div className="h-[300vh] text-white w-[55%] flex flex-col">
          <div className="h-screen w-full flex flex-col justify-center items-start pl-10 pr-20">
            <p className="leading-[4.25rem] text-7xl font-bold mb-8">They grow so fast</p>
            <p className="leading-normal text-2xl text-gray-400">Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you.</p>
          </div>
          <div className="h-screen w-full flex flex-col justify-center items-start pl-10 pr-20">
            <p className="leading-[4.25rem] text-7xl font-bold mb-8">No secrets, no fine print</p>
            <p className="leading-normal text-2xl text-gray-400">There are no hidden fees on Flint. Whatever charges you will incur will be shared with you upfront. We take transparency seriously.</p>
          </div>
          <div className="h-screen w-full flex flex-col justify-center items-start pl-10 pr-20">
            <p className="leading-[4.25rem] text-7xl font-bold mb-8">Unconditionally unclocked</p>
            <p className="leading-normal text-2xl text-gray-400">There are no lock-in periods on Flint. You can withdraw anytime and have the funds in your wallet instantly. We keep your investment liquid, even when its growing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
