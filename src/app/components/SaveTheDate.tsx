import castleImage from "../../assets/carlowrie_red.png";
import {Link} from "react-router-dom";

export default function SaveTheDate() {
  return (
    <section className="min-h-screen bg-[#D4C5B9] relative mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-32">
      {/* Geometric elements */}
      <div className="absolute left-8 md:left-16 top-0 h-full w-px bg-[#1A1A1A]"></div>

      {/* Main content */}
      <div className="max-w-7xl ml-2 lg:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-[#1A1A1A] overflow-hidden relative rounded-[5px]">
              <img
                src={castleImage}
                alt="Carlowrie Castle"
                className="w-full h-full object-cover opacity-85 rounded-[5px]"
              />

              {/* Overlay text */}
              <div className="absolute inset-0 flex items-end p-8">
                <div className="bg-[#D4C5B9]/95 px-6 py-4 max-w-sm">
                  <p className="text-xs text-[#1A1A1A] leading-relaxed">
                    The fairy-tale setting where dreams come
                    true. Carlowrie Castle awaits to witness our
                    union in timeless elegance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Date info */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-xl tracking-[0.3em] text-[#1A1A1A]">
                    MARK YOUR CALENDAR
                  </span>
                  <div className="w-12 h-px bg-[#8B5A3C]"></div>
                </div>

                <h2 className="text-8xl md:text-8xl lg:text-9xl text-[#430813] font-light leading-none mb-4">
                  save
                </h2>
                <h2 className="text-8xl md:text-8xl lg:text-9xl text-[#430813] font-light leading-none">
                  the date
                </h2>
              </div>

              {/* Date details */}
              <div className="space-y-6 border-l-2 border-[#8B5A3C] pl-8">
                <div>
                  <p className="text-xl text-[#1A1A1A]/75 mb-1 tracking-wider">
                    DATE
                  </p>
                  <p className="text-2xl text-[#1A1A1A]">
                    Saturday, October 10th 2026
                  </p>
                </div>

                <div>
                  <p className="text-xl text-[#1A1A1A]/75 mb-1 tracking-wider">
                    TIME
                  </p>
                  <p className="text-2xl text-[#1A1A1A]">
                    1:30 PM - 1:00 AM
                  </p>
                </div>

                <div>
                  <p className="text-xl text-[#1A1A1A]/75 mb-1 tracking-wider">
                    LOCATION
                  </p>
                  <p className="text-2xl text-[#1A1A1A] mb-2">
                    Carlowrie Castle, Edinburgh
                  </p>
                  <Link
                      to="https://www.google.com/maps/place/Carlowrie+Castle/@55.9555322,-3.3781987,17z/data=!3m1!4b1!4m6!3m5!1s0x4887c5138fff3259:0x8fc1bb18458f8701!8m2!3d55.9555322!4d-3.3756238!16s%2Fg%2F11b6t_kfk8?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                  >
                    <p className="text-xl text-[#1A1A1A]/70">
                      Boathouse, Bridge Rd,
                      <br />
                      Kirkliston, Edinburgh EH29 9ES,
                      <br />
                      United Kingdom
                    </p>
                  </Link>

                </div>
              </div>

              {/* RSVP Button */}
              <div className="pt-6 flex lg:block justify-center lg:justify-start items-center lg:items-start">
                <Link
                    to="/rsvp"
                    className="inline-block px-10 py-4 bg-[#430813] text-[#D4C5B9] text-xs tracking-[0.3em] hover:bg-[#1A1A1A] transition-colors"
                >
                  RSVP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}