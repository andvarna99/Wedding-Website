import Navigation from "../components/Navigation";

export default function Schedule() {
  const scheduleItems = [
    {
      time: "1:30 PM",
      event: "Guest Arrival",
      description: "Guests arrive at the castle for the ceremony.",
      location: "Castle Grounds"
    },
    {
      time: "2:00 PM",
      event: "Ceremony",
      description: "Join us as we say our vows in front of our closest friends and loved ones",
      location: "Castle Orangery"
    },
    {
      time: "2:30 PM",
      event: "Drinks Reception / Wedding Portraits",
      description: "Enjoy cocktails and canapés while we capture our first moments as newlyweds",
      location: "Piano Room / Library Bar"
    },
    {
      time: "4:00 PM",
      event: "Call to Dinner",
      description: "A delicious three-course meal prepared by our renowned chefs",
      location: "Castle Grounds"
    },
    {
      time: "4:30 PM",
      event: "Wedding Party Entrances",
      description: "A delicious three-course meal prepared by the castle's renowned chefs",
      location: "Castle Orangery"
    },
    {
      time: "5:00 PM",
      event: "Wedding Banquet & Speeches",
      description: "A delicious three-course meal prepared by the castle's renowned chefs",
      location: "Castle Orangery"
    },
    {
      time: "7:00 PM",
      event: "Cake Cutting",
      description: "Join us for a sweet celebration with our wedding cake",
      location: "Castle Orangery"
    },
    {
      time: "7:30 PM",
      event: "First Dance",
      description: "Watch as we take our first dance as husband and wife",
      location: "Castle Orangery"
    },
    {
      time: "8:00 PM",
      event: "Evening Reception",
      description: "Dance the night away with live music and entertainment",
      location: "Castle Orangery"
    },
    {
      time: "10:00 PM",
      event: "Late Night Bites",
      description: "Enjoy a few late night snacks in between the party",
      location: "Castle Orangery"
    },
    {
      time: "12:30 AM",
      event: "Last Dance",
      description: "One final dance to close out our perfect day",
      location: "Castle Orangery"
    }
  ];

  return (
      <>
        <Navigation />
        <div className="min-h-screen bg-[#D4C5B9] px-8 md:px-16 lg:px-24 py-16 md:py-24">
          {/* Geometric elements */}
          <div className="absolute left-8 md:left-16 top-24 h-[calc(100%-6rem)] w-px bg-[#1A1A1A]/20"></div>
          <div className="absolute left-20 md:left-28 top-1/3 w-2 h-2 bg-[#8B5A3C]"></div>

          <div className="max-w-5xl mx-auto">
            {/* Page Header */}
            <div className="mb-16 md:mb-24">
              <div className="flex items-center gap-6 mb-8">
            <span className="text-xs tracking-[0.3em] text-[#1A1A1A]">
              OCTOBER 10, 2026
            </span>
                <div className="w-12 h-px bg-[#8B5A3C]"></div>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#8B5A3C] font-light leading-none mb-4">
                Wedding
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#8B5A3C] font-light leading-none">
                Schedule
              </h1>
              <p className="mt-8 text-lg text-[#1A1A1A]/70 max-w-2xl">
                A timeline of our special day. We can't wait to celebrate with you from ceremony to last dance.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-12 md:space-y-16">
              {scheduleItems.map((item, index) => (
                  <div key={index} className="relative flex gap-8 md:gap-16">
                    {/* Time */}
                    <div className="w-24 md:w-32 flex-shrink-0">
                      <p className="text-2xl md:text-3xl font-light text-[#430813]">
                        {item.time}
                      </p>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 pb-12 border-b border-[#1A1A1A]/10 last:border-0">
                      <h3 className="text-2xl md:text-3xl text-[#1A1A1A] font-light mb-3">
                        {item.event}
                      </h3>
                      <p className="text-[#1A1A1A]/70 mb-2 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-xs tracking-[0.2em] text-[#8B5A3C]">
                        {item.location}
                      </p>
                    </div>
                  </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 md:mt-24 p-8 bg-[#1A1A1A]/5">
              <h3 className="text-xl text-[#1A1A1A] font-light mb-4">
                Important Notes
              </h3>
              <ul className="space-y-2 text-[#1A1A1A]/70">
                <li>• Please arrive 15 minutes before the ceremony begins</li>
                <li>• Dress code: Black tie optional</li>
                <li>• Transportation will be provided between venues</li>
                <li>• The venue is accessible for guests with mobility needs</li>
              </ul>
            </div>
          </div>
        </div>
      </>
  );
}
