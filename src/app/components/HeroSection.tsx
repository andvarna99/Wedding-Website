import image_ada58e7e40d08004e54f01d15ef69ae212379896 from '../../assets/carlowrie_green.png';
import {useMemo} from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function HeroSection() {
  const petals = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const left = `${Math.random() * 100}%`;
      const delay = `${Math.random() * 20}s`;
      const duration = `${15 + Math.random() * 10}s`;
      return { id: i, left, delay, duration };
    });
  }, []);

  return (
    <section className="min-h-screen bg-[#D4C5B9] relative px-8 md:px-16 lg:px-24 py-40">
      {/* Main content */}
      <div className="max-w-7xl mx-auto mt-10 md:mt-40">
        {/* Falling Petals */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="petals">
            {petals.map(({ id, left, delay, duration }) => (
                <div
                    key={id}
                    className="petal animate-fall"
                    style={{
                      left,
                      animationDelay: delay,
                      animationDuration: duration,
                    }}
                />
            ))}
          </div>
        </div>
        <div className="relative">
          {/* Large typography */}
          <div className="relative z-10 -mt-20 md:-mt-28">
            <h5 className="text-4xl leading-[0.85] tracking-tight text-[#430813] opacity-50 font-light mb-16">
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
              <ImageWithFallback
                  src={
                    image_ada58e7e40d08004e54f01d15ef69ae212379896
                  }
                  alt="Carlowrie Castle"
                  className="w-full h-full object-cover sepia-50"
              />
            </div>
          </div>

          {/* Description and couple names */}
          <div className="z-10 mt-15 flex flex-col md:flex-row justify-between items-start">
            <div className="max-w-lg mt-16">
              <p className="text-4xl leading-[0.85] tracking-tight text-[#430813] opacity-50 font-light">
                An elegant celebration of love as we unite two
                hearts in the historic beauty around Edinburgh.
              </p>
            </div>

            <div className=" gap-3 grid col-1">
              {/* Number */}
              <div className="z-10 text-6xl text-right md:text-8xl text-[#430813]">
                <p>10.10.26</p>

                <p className="text-2xl text-[#430813] font-bold">
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