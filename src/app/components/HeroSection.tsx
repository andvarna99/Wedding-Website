import image_ada58e7e40d08004e54f01d15ef69ae212379896 from '../../assets/carlowrie_green.png';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#D4C5B9] relative px-8 md:px-16 lg:px-24 py-10">
      {/* Main content */}
      <div className="max-w-7xl mx-auto mt-10 md:mt-40">
        <div className="relative">
          {/* Large typography */}
          <div className="relative z-10 -mt-16 md:-mt-20">
            <h5 className="text-3xl leading-[0.85] tracking-tight text-[#430813] opacity-50 font-light mb-5">
              Join us this fall for the wedding of
            </h5>
            <h1 className="font-script text-[6rem] md:text-[10rem] lg:text-[14rem] leading-[0.85] tracking-tight text-[#430813] font-light">
              Andrea & Jacob
            </h1>
          </div>

          {/* Side text */}
          <div className="absolute  -translate-y-1/2 -rotate-90 origin-left">
            <span className="text-xs tracking-[0.3em] text-[#1A1A1A]"></span>
          </div>

          <div className="absolute -right-0 bottom-3 -z-0 w-64 md:w-64 h-64 md:h-64 flex justify-end ml-auto opacity-50">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                  src={
                    image_ada58e7e40d08004e54f01d15ef69ae212379896
                  }
                  alt="Carlowrie Castle"
                  className="w-full h-full object-cover sepia-50"
              />
            </div>
          </div>

          {/* Description and couple names */}
          <div className="z-10 -mt-15 flex flex-col md:flex-row justify-between items-start">
            <div className="max-w-xs mt-16">
              <p className="text-1xl leading-[0.85] tracking-tight text-[#430813] opacity-50 font-light">
                An elegant celebration of love as we unite two
                hearts in the historic beauty around Edinburgh.
              </p>
            </div>

            <div className="-mt-16 gap-3 grid col-1">
              {/* Number */}
              <div className="z-10 text-6xl text-right md:text-8xl text-[#430813] font-light">
                <p>10.10.26</p>

                <p className="text-2xl text-[#430813]">
                  Carlowrie Castle, Edinburgh, Scotland
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}