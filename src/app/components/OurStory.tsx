import image_93c93de743383983e25d1187e49686217172077d from "../../assets/a+j_engagement.png";

export default function OurStory() {
  return (
    <section className="min-h-screen bg-[#1A1A1A] relative px-8 md:px-16 lg:px-24 py-24 md:py-32">
      {/* Geometric elements */}
      <div className="absolute right-8 md:right-16 top-0 h-full w-px bg-[#D4C5B9]"></div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Text content */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-px bg-[#8B5A3C]"></div>
                <span className="text-xl tracking-[0.3em] text-[#D4C5B9]">
                  OUR STORY
                </span>
              </div>

              <h2 className="text-8xl md:text-7xl lg:text-8xl text-[#8B5A3C] font-light leading-tight mb-12">
                The road to
                <br />
                forever...
              </h2>
            </div>

            <div className="space-y-6 max-w-lg">
              <p className="text-[#D4C5B9] leading-relaxed text-xl">
                Some love stories begin quietly, almost
                unnoticed, until you realize they’ve been
                unfolding all along.
                <br></br>
                <br></br>
                Andrea and Jacob were brought together through
                someone they both already loved deeply: Athena.
                Andrea’s best friend, and Jacob’s little sister.
                Through every turn, there was a pull neither of
                them could ignore.
                <br></br>
                What started as an introduction became a
                conversation, then a connection, then a
                commitment. They learned each other in moments
                both ordinary and transformative, discovering
                that love isn’t just stumbled upon, it’s chosen,
                over and over again. In loving each other, they
                not only found their person, but a life that
                felt fuller, steadier, and unmistakably right.
                <br></br>
                <br></br>
                They are endlessly grateful to Athena for
                setting this story in motion, and to the friends
                who became family along the way. What they've
                built together is more than a love story, it’s a
                shared home, and a future they cannot wait to
                continue into.
              </p>
            </div>

            {/* Number indicator */}
            <div className="flex items-end gap-4">
              <span className="text-6xl font-light text-[#8B5A3C]">
                10.10.2026
              </span>
              <div className="w-24 h-px bg-[#8B5A3C] mb-4"></div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative lg:translate-y-16">
            <div className="relative w-100">
              {/* Decorative square */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border border-[#8B5A3C]/30"></div>

              {/* Main image */}
              <div className="relative aspect-[3/4] bg-[#1A1A1A] overflow-hidden rounded-[5px]">
                <img
                  src={
                    image_93c93de743383983e25d1187e49686217172077d
                  }
                  alt="Andrea and Jacob"
                  className="w-full h-full object-cover opacity-90 rounded-[5px] sepia-50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-24 flex items-center justify-center">
          <svg width="200" height="2" className="opacity-30">
            <line
              x1="0"
              y1="1"
              x2="200"
              y2="1"
              stroke="#8B5A3C"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}