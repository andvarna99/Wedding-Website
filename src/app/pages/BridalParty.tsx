import AndreaBrideImage from "../../assets/bride_placeholder.jpeg"
import JacobGroomImage from "../../assets/groom_placeholder.jpeg"
import BrideAndGroomImage from "../../assets/bride_and_groom_placeholder.jpg"

import AthenaBridesmaidImage from "../../assets/athena_bridesmaid.jpeg"
import AbbyBridesmaidImage from "../../assets/abby_bridesmaid.jpeg"
import JennyBridesmaidImage from "../../assets/jenny_bridesmaid.jpeg"
import LilyBridesmaidImage from "../../assets/lily_bridesmaid.jpeg"
import MicahBridesmaidImage from "../../assets/micah_bridesmaid.jpeg"
import SarahBridesmaidImage from "../../assets/sarah_bridesmaid.png"
import AnnieBridesmaidImage from "../../assets/annie_bridesmaid.jpg"
import NikkiBridesmaidImage from "../../assets/nikki_bridesmaid.jpeg"

import AndyGroomsmenImage from "../../assets/andy_groomsmen.jpeg"
import AveryGroomsmenImage from "../../assets/avery_groomsmen.jpeg"
import TravisGroomsmenImage from "../../assets/travis_placeholder.jpeg"
import EvanGroomsmenImage from "../../assets/evan_groomsmen.jpeg"
import RyanGroomsmenImage from "../../assets/ryan_placeholder.jpeg"
import BrennanGroomsmenImage from "../../assets/brennan_placeholder.jpeg"
import LoganGroomsmenImage from "../../assets/logan_placeholder.jpeg"
import AlexGroomsmenImage from "../../assets/alex_placeholder.jpeg"
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Navigation from "../components/Navigation";

export default function BridalParty() {
  const brideAndGroom = {
    bride: {
      name: "Andrea Varnado",
      image: AndreaBrideImage,
      bio: "Insert sentence for Andrea here..."
    },
    groom: {
      name: "Jacob Boneta",
      image: JacobGroomImage,
      bio: "Insert sentence for Jacob here..."
    },
    both: {
      name: "Jacob + Andrea",
      image: BrideAndGroomImage
    }
  };

  const bridesmaids = [
    {
      name: "Athena Boneta",
      role: "Maid of Honor",
      bio: "Insert Paragraph for athena here...",
      image: AthenaBridesmaidImage
    },
    {
      name: "Abigail Faust",
      role: "Matron of Honor",
      bio: "I’m Abby, and I am SO pumped to be Andrea’s bridesmaid!! " +
          "A&J are two of my favorite people in the world. My husband Avery and I knew Jacob just before he started dating Andrea - " +
          "it was obvious when they met that J was enamored and that they were a perfect match. Skip to today, " +
          "we now live down the street from A&J and enjoy bugging them for food and showing up uninvited. " +
          "Thankfully they’re too kind to tell us to **** off :) See you all in Scotland!",
      image: AbbyBridesmaidImage
    },
    {
      name: "Jennifer Hernandez",
      role: "Bridesmaid",
      bio: "Insert Paragraph for jenny here...",
      image: JennyBridesmaidImage
    },
    {
      name: "Lily Varnado",
      role: "Bridesmaid",
      bio: "Insert Paragraph for lily here...",
      image: LilyBridesmaidImage
    },
    {
      name: "Micah Larson",
      role: "Bridesmaid",
      bio: "Insert Paragraph for micah here...",
      image: MicahBridesmaidImage
    },
    {
      name: "Sarah Jacobs",
      role: "Bridesmaid",
      bio: "Hi, I’m Sarah! Andrea and I met as bratty little kids doing musical theatre, and even then her beauty and talent were unmatched. " +
          "Fast forward 10 years: we reconnected when Andrea started dating Jacob (a friend of my fiancé Brennan) during an amazing day at Six Flags and I knew immediately they were something special. " +
          "I’m so grateful for life’s plot twists — never did I imagine I’d grow up to call Andrea one of my best friends, be A+J’s neighbor, watch them welcome little Junie, witness their engagement, " +
          "and stand beside them at their very own fairytale wedding. Cheers to the future Mr. and Mrs. Boneta!",
      image: SarahBridesmaidImage
    },
    {
      name: "Nikki Poncio-Bock",
      role: "Bridesmaid",
      bio: "I met Andrea in September 2020 when I started dating my now-husband, Alex (he’s also one of Jacob’s groomsmen)! " +
          "Today, Alex and I live in LA with our son and 2 cats. My favorite thing about Andrea is her compassion and genuine interest in others. " +
          "I’ve loved getting to know her more over the years and I’m so excited to stand by her side in October!",
      image: NikkiBridesmaidImage
    },
    {
      name: "Annie Millerbernd",
      role: "Bridesmaid",
      bio: "I met Jacob and Andrea on Dec. 31, 2019. Logan, my husband and longtime friend of Jacob, brought me there to celebrate the new year, just the four of us. " +
          "Both of our relationships were somewhat new at the time and I remember wondering if Logan and I fit as effortlessly as they seemed to. " +
          "Over the next six years, our relationships sort of grew up together. We adopted dogs, moved, bought houses, made new friends, got new jobs -- " +
          "Andrea and I both went on very important hair journeys. Even when life got busy and connections were harder to maintain, the four of us never grew apart." +
          "The opportunity to watch two people grow in love over several years is rare; it's one of the best parts of life. " +
          "I'm so fortunate to have a friendship in these two that I know will be lifelong, and I couldn't be more honored to be part of their special day.",
      image: AnnieBridesmaidImage
    }
  ];

  const groomsmen = [
    {
      name: "Andy Pellett",
      role: "Best Man",
      bio: "Insert Paragraph for Andy here...",
      image: AndyGroomsmenImage
    },
    {
      name: "Avery Faust",
      role: "Groomsman",
      bio: "Insert Paragraph for Avery here...",
      image: AveryGroomsmenImage
    },
    {
      name: "Travis Whittaker",
      role: "Groomsman",
      bio: "Insert Paragraph for Travis here...",
      image: TravisGroomsmenImage
    },
    {
      name: "Evan Gray",
      role: "Best Man",
      bio: "Insert Paragraph for Evan here...",
      image: EvanGroomsmenImage
    },
    {
      name: "Ryan Quihano",
      role: "Groomsman",
      bio: "Insert Paragraph for Ryan here...",
      image: RyanGroomsmenImage
    },
    {
      name: "Brennan Loy",
      role: "Groomsman",
      bio: "Insert Paragraph for Brennan here...",
      image: BrennanGroomsmenImage
    },
    {
      name: "Alex Poncio-Bock",
      role: "Groomsman",
      bio: "Insert Paragraph for Alex here...",
      image: AlexGroomsmenImage
    },
    {
      name: "Logan Jung",
      role: "Groomsman",
      bio: "Insert Paragraph for Logan here...",
      image: LoganGroomsmenImage
    }
  ];

  return (
    <>
      <Navigation />
      {/* Bride and Groom Hero Section */}
      <div className="min-h-screen bg-[#1A1A1A] relative px-8 md:px-16 lg:px-24 py-16">
        {/* Geometric elements */}
        <div className="absolute left-8 md:left-16 top-0 h-full w-px bg-[#D4C5B9]/30"></div>
        <div className="absolute right-8 md:right-16 top-0 h-full w-px bg-[#D4C5B9]/30"></div>

        <div className="max-w-7xl mx-auto mt-32">
          {/* Header */}
          <div className="mb-16 text-center border-b-2 border-[#8B5A3C]">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-12 h-px bg-[#8B5A3C]"></div>
              <h1 className="text-2xl md:text-4xl lg:text-7xl text-[#D4C5B9] font-light leading-none mb-4 tracking-[0.3em]">
                THE HAPPY COUPLE
              </h1>
              <div className="w-12 h-px bg-[#8B5A3C]"></div>
            </div>
            <div className="text-center flex items-center justify-center">
              <div className="rounded-full flex items-center justify-center gap-6 mb-8 aspect-[3/4] size-80 bg-[#D4C5B9]/10 mb-6 overflow-hidden">
                <ImageWithFallback
                    src={brideAndGroom.both.image}
                    alt={brideAndGroom.both.name}
                    className="h-full w-full object-cover transition-all duration-500 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Bride and Groom Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Bride */}
            <div className="group">
              <div className="space-y-3 text-center">
                <h1 className="text-4xl tracking-[0.2em] text-[#D4C5B9] mb-5">
                  THE GROOM
                </h1>
                <h3 className="text-3xl text-[#D4C5B9] font-light">
                  {brideAndGroom.groom.name}
                </h3>
                <p className="text-xl text-[#D4C5B9]/70 leading-relaxed max-w-sm mx-auto">
                  {brideAndGroom.groom.bio}
                </p>
              </div>
            </div>

            {/* Groom */}
            <div className="group">
              <div className="space-y-3 text-center">
                <p className="text-4xl tracking-[0.2em] text-[#D4C5B9] mb-5">
                  THE BRIDE
                </p>
                <h3 className="text-3xl text-[#D4C5B9] font-light">
                  {brideAndGroom.bride.name}
                </h3>
                <p className="text-xl text-[#D4C5B9]/70 leading-relaxed max-w-sm mx-auto">
                  {brideAndGroom.bride.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#D4C5B9] px-8 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Geometric elements */}
        <div className="absolute left-8 md:left-16 top-24 h-[calc(100%-6rem)] w-px bg-[#1A1A1A]/20"></div>

        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 md:mb-16">
            <div className="flex items-center gap-6 mb-8">
          <span className="tracking-[0.3em] text-[#1A1A1A]">
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
            <p className="mt-8 text-2xl text-[#1A1A1A]/70 max-w-2xl">
              Meet the wonderful people who will be standing beside us on our special day.
            </p>
          </div>

          {/* Bridesmaids */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl text-[#430813] font-light mb-6">
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
                      <h3 className="text-4xl text-[#1A1A1A] font-light">
                        {person.name}
                      </h3>
                      <p className="text-xl tracking-[0.2em] text-[#8B5A3C]">
                        {person.role}
                      </p>
                      <p className="text-[#1A1A1A]/70 leading-relaxed">
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
                      <h3 className="text-4xl text-[#1A1A1A] font-light">
                        {person.name}
                      </h3>
                      <p className="text-2xl tracking-[0.2em] text-[#8B5A3C]">
                        {person.role}
                      </p>
                      <p className="text-xl text-[#1A1A1A]/70 leading-relaxed">
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
