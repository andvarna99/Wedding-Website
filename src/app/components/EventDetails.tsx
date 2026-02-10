export default function EventDetails() {
  return (
    <section className="min-h-screen bg-[#1A1A1A] relative px-8 md:px-16 lg:px-24 py-24 md:py-32">
      {/* Geometric elements */}
      <div className="absolute right-8 md:right-16 top-0 h-full w-px bg-[#D4C5B9]/30"></div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-px bg-[#8B5A3C]"></div>
            <span className="text-xs tracking-[0.3em] text-[#D4C5B9]">
              EVENT DETAILS
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl text-[#8B5A3C] font-light leading-tight">
            Celebration
          </h2>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* Ceremony */}
          <div className="border-t border-[#D4C5B9]/20 pt-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-3xl text-[#D4C5B9] font-light">
                Ceremony
              </h3>
              <span className="text-4xl text-[#8B5A3C]/30 font-light">
                01
              </span>
            </div>
            <p className="text-sm text-[#D4C5B9]/80 leading-relaxed mb-4">
              The ceremony will take place in the castle's
              orangery, a stunning venue steeped in elegance.
            </p>
            <p className="text-xs text-[#D4C5B9]/60">
              <span className="text-[#8B5A3C]">
                Arrival Time:
              </span>{" "}
              1:30 PM
            </p>
            <p className="text-xs text-[#D4C5B9]/60">
              <span className="text-[#8B5A3C]">
                Ceremony Time:
              </span>{" "}
              2:00 PM
            </p>
            <p className="text-xs text-[#D4C5B9]/60">
              <span className="text-[#8B5A3C]">
                Cocktail Hour:
              </span>{" "}
              3:00 PM
            </p>
          </div>

          {/* Reception */}
          <div className="border-t border-[#D4C5B9]/20 pt-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-3xl text-[#D4C5B9] font-light">
                Reception
              </h3>
              <span className="text-4xl text-[#8B5A3C]/30 font-light">
                02
              </span>
            </div>
            <p className="text-sm text-[#D4C5B9]/80 leading-relaxed mb-4">
              Join us for an evening of celebration in the
              castle's beautiful orangery, with dinner and
              dancing under the chandeliers.
            </p>
            <p className="text-xs text-[#D4C5B9]/60">
              <span className="text-[#8B5A3C]">Time:</span> 5:00
              PM - 1:00 AM
            </p>
          </div>

          {/* Dinner */}
          <div className="border-t border-[#D4C5B9]/20 pt-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-3xl text-[#D4C5B9] font-light">
                Dinner
              </h3>
              <span className="text-4xl text-[#8B5A3C]/30 font-light">
                03
              </span>
            </div>
            <p className="text-sm text-[#D4C5B9]/80 leading-relaxed mb-4">
              A sumptuous seasonal menu featuring modern yet
              classic dishes after cocktail hour.
            </p>
            <p className="text-xs text-[#D4C5B9]/60">
              <span className="text-[#8B5A3C]">
                Dress Code:
              </span>{" "}
              Formal Cocktail Attire
            </p>
          </div>

          {/* Bar */}
          <div className="border-t border-[#D4C5B9]/20 pt-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-3xl text-[#D4C5B9] font-light">
                Bar
              </h3>
              <span className="text-4xl text-[#8B5A3C]/30 font-light">
                04
              </span>
            </div>
            <p className="text-sm text-[#D4C5B9]/80 leading-relaxed mb-4">
              There will be a cash bar, along with cocktail hour
              drinks served before dinner.
            </p>
            <p className="text-xs text-[#D4C5B9]/60">
              <span className="text-[#8B5A3C]">Special:</span>{" "}
              Signature cocktails available
            </p>
          </div>
        </div>

        {/* RSVP Section */}
        <div className="border-t border-[#D4C5B9]/20 pt-16">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h3 className="text-5xl md:text-6xl text-[#8B5A3C] font-light">
              Andrea & Jacob
            </h3>

            <div className="space-y-2">
              <p className="text-sm text-[#D4C5B9]">
                Kindly respond by
              </p>
              <p className="text-2xl text-[#D4C5B9] font-light">
                July 10th, 2026
              </p>
            </div>

            <div className="pt-6 space-y-1">
              <p className="text-xs text-[#D4C5B9]/60 tracking-widest">
                CONTACT
              </p>
              <p className="text-sm text-[#D4C5B9]">
                a+j@bonetawedding.com
              </p>
            </div>

            {/* Decorative element */}
            <div className="flex items-center justify-center gap-4 pt-8">
              <div className="w-12 h-px bg-[#8B5A3C]"></div>
              <div className="w-2 h-2 bg-[#8B5A3C] rounded-full"></div>
              <div className="w-12 h-px bg-[#8B5A3C]"></div>
            </div>

            {/* Final note */}
            <p className="text-xs text-[#D4C5B9]/60 leading-relaxed max-w-md mx-auto pt-4">
              We can't wait to celebrate this special day with
              you. Your presence means the world to us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}