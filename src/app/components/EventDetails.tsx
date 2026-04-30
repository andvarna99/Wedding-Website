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
            <span className="text-xl tracking-[0.3em] text-[#D4C5B9]">
              EVENT DETAILS
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl text-[#8B5A3C] font-light leading-tight">
            Celebration
          </h2>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-24">
          {/* Ceremony */}
          <div className="border-t border-[#D4C5B9]/20 pt-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-5xl text-[#D4C5B9] font-light">
                Ceremony
              </h3>
              <span className="text-4xl text-[#8B5A3C]/75 font-bold mr-2 lg:mr-0">
                01
              </span>
            </div>
            <p className="text-xl text-[#D4C5B9]/80 leading-relaxed mb-4">
              The ceremony will take place in the castle's
              orangery, a stunning venue steeped in elegance. Plan to arrive to the castle 30 minutes in advance,
              please do not be late for this event as the schedule for the evening is only so flexible.
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">
                Arrival Time:
              </span>{" "}
              1:30 PM - 2:00 PM
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">
                Ceremony Time:
              </span>{" "}
              2:00 PM - 2:30 PM
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">
                Dress Code:
              </span>{" "}
              Formal Attire (Not white-tie but not cocktail attire: think midi - floor length dresses, tailored jumpsuits, well-fitted suits, etc... If any questions arise don't hesitate to reach out or ask or chat bot!)
            </p>
          </div>

          {/* Reception */}
          <div className="border-t border-[#D4C5B9]/20 pt-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-5xl text-[#D4C5B9] font-light">
                Reception
              </h3>
              <span className="text-4xl text-[#8B5A3C]/75 font-bold mr-2 lg:mr-0">
                02
              </span>
            </div>
            <p className="text-xl text-[#D4C5B9]/80 leading-relaxed mb-4">
              Join us for an evening of celebration at Carlowrie Castle. Feel free to explore the halls and grounds, just be sure not to miss the important event timing.
              The reception will begin after the ceremony: starting with cocktail hour and canapes, leading into speeches and dinner, with the cake cutting and first dances to follow.
              As we dance the night away, snacks will be served later in the night to keep everyone satisfied with last call for the bar ending the night around 1:00 AM
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">
                Cocktail Hour / Wedding Portraits:
              </span>{" "}
              2:30 PM - 4:00 PM
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">Call to Dinner:</span> 4:00 PM - 4:30 PM
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">Dinner & Speeches:</span> 4:30 PM - 8:30 PM
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">Late Night Bites:</span> 9:30 PM - 10:00 PM
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">Last Call:</span> 12:30 PM
            </p>
          </div>

          {/* Food */}
          <div className="border-t border-[#D4C5B9]/20 pt-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-5xl text-[#D4C5B9] font-light">
                Food
              </h3>
              <span className="text-4xl text-[#8B5A3C]/75 font-bold mr-2 lg:mr-0">
                03
              </span>
            </div>
            <p className="text-xl text-[#D4C5B9]/80 leading-relaxed mb-4">
              Canapes will be served during cocktail hour, providing guests with 3 elevated options to choose from.
              Dinner will consist of a delicious three-course meal featuring seasonal and classic scottish dishes.
              After dinner has concluded, the wedding cake will be cut and served. For anyone who'd like a snack later in the night
              we'll be providing some late-night bites as well.
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">
                Canapes:
              </span>{" "}
              2:30 PM - 4:30 PM
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">Dinner:</span> 4:30 PM - 7:30 PM
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">Late Night Bites:</span> 9:30 PM - 10:00 PM
            </p>
          </div>

          {/* Drinks */}
          <div className="border-t border-[#D4C5B9]/20 pt-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-5xl text-[#D4C5B9] font-light">
                Drinks
              </h3>
              <span className="text-4xl text-[#8B5A3C]/75 font-bold mr-2 lg:mr-0">
                04
              </span>
            </div>
            <p className="text-xl text-[#D4C5B9]/80 leading-relaxed mb-4">
              Each guest will be provided with champagne on arrival to the venue, along with a glass during cocktail hour after the ceremony.
              Once the reception has begun each guest will be offered about 2 glass of red or white wine.
              After that, we've got your first round covered.
              Any other drinks you'd like will be through the cash bar which will be flowing until last call around 12:30 AM.
            </p>
            <p className="text-xl text-[#D4C5B9]/75">
              <span className="text-[#8B5A3C]">Signature cocktails:</span>
              <p className="text-[#D4C5B9]/80">
                - Old Fashioned
              </p>
              <p className="text-[#D4C5B9]/80">
                - Amaretto Sour
              </p>
              <p className="text-[#D4C5B9]/80">
                - Margarita
              </p>
            </p>
          </div>
        </div>

        {/* RSVP Section */}
        <div className="border-t border-[#D4C5B9] pt-16">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h3 className="text-5xl md:text-6xl text-[#8B5A3C] font-light">
              Andrea & Jacob
            </h3>

            <div className="space-y-2">
              <p className="text-xl text-[#D4C5B9]">
                Kindly respond by
              </p>
              <p className="text-2xl text-[#D4C5B9] font-light">
                July 15th, 2026
              </p>
            </div>

            <div className="pt-6 space-y-1">
              <p className="text-md text-[#D4C5B9]/60 tracking-widest">
                CONTACT
              </p>
              <p className="text-md text-[#D4C5B9]">
                andvarnado+bonetawedding@gmail.com
              </p>
            </div>

            {/* Decorative element */}
            <div className="flex items-center justify-center gap-4 pt-8">
              <div className="w-12 h-px bg-[#8B5A3C]"></div>
              <div className="w-2 h-2 bg-[#8B5A3C] rounded-full"></div>
              <div className="w-12 h-px bg-[#8B5A3C]"></div>
            </div>

            {/* Final note */}
            <p className="text-xl text-[#D4C5B9]/60 leading-relaxed max-w-md mx-auto pt-4">
              We can't wait to celebrate this special day with
              you. Your presence means the world to us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}