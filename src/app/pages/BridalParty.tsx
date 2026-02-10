import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Navigation from "../components/Navigation";

export default function BridalParty() {
  const bridesmaids = [
    {
      name: "Sarah Mitchell",
      role: "Maid of Honor",
      bio: "Andrea's sister and best friend since childhood. Sarah has been there through every milestone and adventure.",
      image: "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk3NDA4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Emily Chen",
      role: "Bridesmaid",
      bio: "College roommate turned lifelong friend. Emily's creativity and spirit brighten every room.",
      image: "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk3NDA4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Jessica Rodriguez",
      role: "Bridesmaid",
      bio: "Andrea's work colleague who became family. Jessica's wit and wisdom are unmatched.",
      image: "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk3NDA4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Sarah Mitchell",
      role: "Maid of Honor",
      bio: "Andrea's sister and best friend since childhood. Sarah has been there through every milestone and adventure.",
      image: "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk3NDA4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Emily Chen",
      role: "Bridesmaid",
      bio: "College roommate turned lifelong friend. Emily's creativity and spirit brighten every room.",
      image: "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk3NDA4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Jessica Rodriguez",
      role: "Bridesmaid",
      bio: "Andrea's work colleague who became family. Jessica's wit and wisdom are unmatched.",
      image: "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk3NDA4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Emily Chen",
      role: "Bridesmaid",
      bio: "College roommate turned lifelong friend. Emily's creativity and spirit brighten every room.",
      image: "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk3NDA4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Jessica Rodriguez",
      role: "Bridesmaid",
      bio: "Andrea's work colleague who became family. Jessica's wit and wisdom are unmatched.",
      image: "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk3NDA4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const groomsmen = [
    {
      name: "Michael Thompson",
      role: "Best Man",
      bio: "Jacob's brother and partner in crime. Michael has always had Jacob's back through thick and thin.",
      image: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHN1aXQlMjBmb3JtYWx8ZW58MXx8fHwxNzY5Njc1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "David Park",
      role: "Groomsman",
      bio: "Jacob's childhood best friend. They've shared countless memories from playground to present.",
      image: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHN1aXQlMjBmb3JtYWx8ZW58MXx8fHwxNzY5Njc1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Ryan O'Connor",
      role: "Groomsman",
      bio: "University roommate and adventure buddy. Ryan brings joy and laughter wherever he goes.",
      image: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHN1aXQlMjBmb3JtYWx8ZW58MXx8fHwxNzY5Njc1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Michael Thompson",
      role: "Best Man",
      bio: "Jacob's brother and partner in crime. Michael has always had Jacob's back through thick and thin.",
      image: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHN1aXQlMjBmb3JtYWx8ZW58MXx8fHwxNzY5Njc1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "David Park",
      role: "Groomsman",
      bio: "Jacob's childhood best friend. They've shared countless memories from playground to present.",
      image: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHN1aXQlMjBmb3JtYWx8ZW58MXx8fHwxNzY5Njc1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Ryan O'Connor",
      role: "Groomsman",
      bio: "University roommate and adventure buddy. Ryan brings joy and laughter wherever he goes.",
      image: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHN1aXQlMjBmb3JtYWx8ZW58MXx8fHwxNzY5Njc1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "David Park",
      role: "Groomsman",
      bio: "Jacob's childhood best friend. They've shared countless memories from playground to present.",
      image: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHN1aXQlMjBmb3JtYWx8ZW58MXx8fHwxNzY5Njc1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Ryan O'Connor",
      role: "Groomsman",
      bio: "University roommate and adventure buddy. Ryan brings joy and laughter wherever he goes.",
      image: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHN1aXQlMjBmb3JtYWx8ZW58MXx8fHwxNzY5Njc1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#D4C5B9] px-8 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Geometric elements */}
        <div className="absolute left-8 md:left-16 top-24 h-[calc(100%-6rem)] w-px bg-[#1A1A1A]/20"></div>
        <div className="absolute right-8 md:right-16 top-1/2 w-2 h-2 bg-[#8B5A3C]"></div>

        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-16 md:mb-24">
            <div className="flex items-center gap-6 mb-8">
          <span className="text-xs tracking-[0.3em] text-[#1A1A1A]">
            OUR CLOSEST FRIENDS
          </span>
              <div className="w-12 h-px bg-[#8B5A3C]"></div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#8B5A3C] font-light leading-none mb-4">
              Bridal
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#8B5A3C] font-light leading-none">
              Party
            </h1>
            <p className="mt-8 text-lg text-[#1A1A1A]/70 max-w-2xl">
              Meet the wonderful people who will be standing beside us on our special day.
            </p>
          </div>

          {/* Bridesmaids */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl text-[#430813] font-light mb-12">
              Bridesmaids
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {bridesmaids.map((person, index) => (
                  <div key={index} className="group">
                    <div className="aspect-[3/4] bg-[#1A1A1A]/10 mb-6 overflow-hidden">
                      <ImageWithFallback
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl text-[#1A1A1A] font-light">
                        {person.name}
                      </h3>
                      <p className="text-xs tracking-[0.2em] text-[#8B5A3C]">
                        {person.role}
                      </p>
                      <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                        {person.bio}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Groomsmen */}
          <div>
            <h2 className="text-4xl md:text-5xl text-[#430813] font-light mb-12">
              Groomsmen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {groomsmen.map((person, index) => (
                  <div key={index} className="group">
                    <div className="aspect-[3/4] bg-[#1A1A1A]/10 mb-6 overflow-hidden">
                      <ImageWithFallback
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl text-[#1A1A1A] font-light">
                        {person.name}
                      </h3>
                      <p className="text-xs tracking-[0.2em] text-[#8B5A3C]">
                        {person.role}
                      </p>
                      <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                        {person.bio}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
