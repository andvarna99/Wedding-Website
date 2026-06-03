import BrideAndGroomImage from "../../assets/a+j_wes_anderson_shot.jpg"

import AthenaBridesmaidImage from "../../assets/athena_bridesmaid.jpeg"
import AbbyBridesmaidImage from "../../assets/abby_bridesmaid.jpeg"
import JennyBridesmaidImage from "../../assets/jenny_bridesmaid.jpg"
import LilyBridesmaidImage from "../../assets/lily_bridesmaid.jpeg"
import MicahBridesmaidImage from "../../assets/micah_bridesmaid.jpeg"
import SarahBridesmaidImage from "../../assets/sarah_bridesmaid.png"
import AnnieBridesmaidImage from "../../assets/annie_bridesmaid.jpg"
import NikkiBridesmaidImage from "../../assets/nikki_bridesmaid.jpeg"

import AndyGroomsmenImage from "../../assets/andy_groomsmen.jpeg"
import AveryGroomsmenImage from "../../assets/avery_groomsmen.jpeg"
import TravisGroomsmenImage from "../../assets/travis_groomsmen.jpeg"
import EvanGroomsmenImage from "../../assets/evan_groomsmen.jpeg"
import RyanGroomsmenImage from "../../assets/ryan_groomsmen.jpeg"
import BrennanGroomsmenImage from "../../assets/brennan_groomsmen.jpeg"
import LoganGroomsmenImage from "../../assets/logan_groomsmen.jpeg"
import AlexGroomsmenImage from "../../assets/alex_groomsmen.jpeg"
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Navigation from "../components/Navigation";

export default function BridalParty() {
  const brideAndGroom = {
    bride: {
      name: "Andrea Varnado",
      bio: "I never thought I would be lucky enough to find somebody like Jacob. He's someone I admire deeply and strive to be more like in every aspect of my life, so " +
          "saying I would marry him was the easiest 'yes' and the most certain thing I’ve ever done. He somehow always knows how to make me laugh when I’m taking life a little too seriously. " +
          "Finding someone that helps you grow more into yourself, while also growing together feels rare and special in a way that words can't fully describe. " +
          "I can't wait to celebrate our enduring love and connection with the people who helped shape us along the way. Love you all, and see you in Edinburgh!!"
    },
    groom: {
      name: "Jacob Boneta",
      bio: "The first night I met Andrea, I asked her a few questions that probably sounded random at the time. Looking back, they were anything but. " +
          "I was asking about family, about stories, and about the way she saw the world. I think I was really trying to understand whether " +
          "love could feel steady, safe, and full of wonder all at once. " +
          "In Andrea, I found all of that. Someone caring, deeply thoughtful, and somehow even more beautiful the more you get to know her. " +
          "She has a way of making life feel lighter without making it smaller, and making me feel known without needing me to explain everything. " +
          "All these years later, I’m still grateful for that first conversation, for every answer that followed, and for everyone who helped shape " +
          "the story we get to celebrate in Edinburgh."
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
      bio: "Hi, I’m the Maid of Honor and Andrea’s best friend, oh and also the Jacob’s little sister, " +
          "which means I’ve had a front row seat to this love story from every possible angle." +
          "I’ve known the bride since she was 14, back when life was mostly bad decisions, big dreams, " +
          "and figuring things out one day at a time. I’ve known the groom since long before he could " +
          "sleep in a room with the lights off by himself... so yes I have plenty of stories, " +
          "and yes I’m always willing to share them, all you’ll need to do is ask!" +
          "It has truly been a pleasure not only watching them grow into the incredible people they are " +
          "individually, but also getting to witness the way they have grown together as a couple. " +
          "I even had the honor and mild chaos-inducing satisfaction of setting them up on their very first date. " +
          "Seeing this whole journey come full circle has been such a joy." +
          "I look forward to celebrating them, supporting them, and of course continuing to annoy them in " +
          "Scotland and eventually for the rest of their lives." +
          "Cheers to Best friends and annoying little sisters!",
      image: AthenaBridesmaidImage
    },
    {
      name: "Abigail Faust",
      role: "Matron of Honor",
      bio: "I’m Abby, and I am SO pumped to be Andrea’s matron of honor!! " +
          "A&J are two of my favorite people in the world. My husband Avery and I knew Jacob just before he started dating Andrea - " +
          "it was obvious when they met that J was enamored and that they were a perfect match. Skip to today, " +
          "we now live down the street from A&J and enjoy bugging them for food and showing up uninvited. " +
          "Thankfully they’re too kind to tell us to **** off :) See you all in Scotland!",
      image: AbbyBridesmaidImage
    },
    {
      name: "Jennifer Hernandez",
      role: "Bridesmaid",
      bio: "Hey, I’m Jenny! I’ve been incredibly blessed to be part of the Boneta/Varnado clan since Andrea and I met in high school 10 years ago. One evening, " +
          "Andrea was at my house while Athena (MOH) and I helped her get ready for a first date. Now here we are — several years later — standing next to her as she marries that same man, Jacob." +
          "Being able to witness A + J’s love story from the very beginning, I’ve seen the love and commitment between them continue to grow and flourish. I feel so privileged to have shared so" +
          "many special moments with them as my found family — from being Tia to Gizmo and Juni, to karaoke dance parties, and now a wedding!" +
          "I can’t wait to celebrate Andrea & Jacob, create new memories, and shake some ass in Scotland! See y’all across the pond :) Cheers!",
      image: JennyBridesmaidImage
    },
    {
      name: "Lily Varnado",
      role: "Bridesmaid",
      bio: "I am so incredibly blessed to call Andrea my sister. My big sister has been there through every stage of my life, watching me grow, cheering me on, and inspiring me to dream big. " +
          "She may not even realize it, but when Andrea chose to attend NESA, she quietly gave me the courage to step outside the ordinary and follow in her footsteps by auditioning there myself. " +
          "I was still in high school when she met Jacob, the love of her life, and I have had the privilege of watching their love story unfold. Together, they have supported me through so many chapters " +
          "of my life. Thank you for loving me through all the ups and downs! Jacob, you have become such an important part of our family, and you never miss the chance to bring joy into our lives. " +
          "Andrea, I love you deeply! You and Jacob deserve a lifetime filled with love, happiness, and endless adventures. I am grateful to stand up with you on this special day, and I cannot wait " +
          "to see all the beautiful places this journey together will take you. Cheers!!",
      image: LilyBridesmaidImage
    },
    {
      name: "Micah Larson",
      role: "Bridesmaid",
      bio: "My name is Micah, and I am absolutely thrilled to be lovely Andrea's bridesmaid! I'm a close friend of Andrea and Jacob, " +
          "and the big sister to their dog, Juni. Although I only met Andrea and Jacob four years ago, " +
          "in that time we’ve become so close it feels like I’ve known them forever. I’ve been lucky enough to always live nearby, " +
          "and now just down the street, which means I’ve had a front-row seat to a big part of their journey. " +
          "From apartments to houses, from tears to dance parties, and from no Juni to ALL the Juni, it has been such a privilege to watch them grow. " +
          "Not only as two incredible individuals I deeply cherish, but as partners who consistently choose each other and stand strong together " +
          "in one beautiful relationship." +
          "A little about me: I LOVE love and am a big crier. So if you see me crying throughout the wedding… no, you didn’t. Rah!" +
          "I am beyond excited to celebrate these two in Scotland with all of you. Cheerio!",
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
      bio: "I first met Jacob in 2017 while driving a knockoff Jeep from the mid 1970s. We were offroading with a couple other guys when I accidentally drove " +
          "over the edge of a cliff, which led to a rather dramatic explosion that really should’ve ended it all for us." +
          "Fortunately, we were able to remember each others’ PUBG gamertags, group up, and grow an enduring friendship over many nights of playing video games, " +
          "singing the era-defining songs of the 90s and 2000s (usually to an unwilling audience), and tackling the toughest escape rooms around the country " +
          "(in matching custom nikes)." +
          "My first time meeting Andrea was in 2021, when the 3 of us bonded while dodging hungry animals at the natural bridge wildlife ranch outside of " +
          "San Antonio. That day we learned that there is no place to hide from a determined emu, and you really have to just close the sun roof." +
          "Jacob and Andrea share a natural, harmonious connection and I think that comes through especially in their shared love for music and singing." +
          "It’s been great to see the journey of Jacob and Andrea building a life together in San Antonio surrounded by friends and family. And I can’t " +
          "wait to be a part of their taking the next big step later this year. To a long and happy future!",
      image: AndyGroomsmenImage
    },
    {
      name: "Avery Faust",
      role: "Groomsman",
      bio: "Hi Everyone, I’m Avery. My wife Abby and I live about 5 minutes from the bride and groom. We bought our houses at the same time (mostly unplanned). Because " +
          "of this we hang out with these guys all the time, and always are having tons of laughs. Lot's more than you probably have ever had with them. Hence why I’m in the wedding party. " +
          "And you aren’t.",
      image: AveryGroomsmenImage
    },
    {
      name: "Travis Whiteaker",
      role: "Groomsman",
      bio: "Hi, I’m Travis. I met Jacob in 2017 through our mutual friend Evan, and we hit it off right away. " +
          "Even though our friendship has always been long-distance, he’s always been like a brother to me. " +
          "I met Andrea soon after they started dating, and I quickly understood why Jacob couldn’t stop talking about her. " +
          "It was obvious they were perfect for each other from the start. I’m so excited to celebrate them this " +
          "October and officially witness Jacob marrying way out of his league.",
      image: TravisGroomsmenImage
    },
    {
      name: "Evan Gray",
      role: "Groomsman",
      bio: "Howdy, I'm Evan! Jacob and I go all the way back to high school, and Andrea works with me — so between the two of them, " +
          "I basically can't escape the Bonetas. I was there one of the first times they met, and I like to think I played a pivotal role in their love story — " +
          "but the truth is they didn't need much help — some people just find each other! " +
          "Jacob is one of those rare people who challenge you to think differently about the world — endlessly creative, and never afraid to go deep. " +
          "After more than a decade of friendship with him and years of working alongside Andrea — one of the most talented and genuine people I know — " +
          "getting to watch these two build something so beautiful has been one of the best things I've had a front-row seat to. " +
          "Couldn't be more honored to stand with them in Scotland. Cheers to A+J!",
      image: EvanGroomsmenImage
    },
    {
      name: "Ryan Quihano",
      role: "Groomsman",
      bio: "Jacob and Andrea are two of my best friends and I’m really honored to be there to witness their best day ever with such an amazing group. More importantly, " +
          "I’m excited to celebrate with those party people.",
      image: RyanGroomsmenImage
    },
    {
      name: "Brennan Loy",
      role: "Groomsman",
      bio: "Hey there, I’m Brennan. I met Jacob about 17 years ago during those golden, unsupervised high school summers with fellow groomsmen Alex Poncio-Bock and Ryan Quijano. " +
          "We were typical teenage boys: staying up too late, playing video games, and quoting comedies that probably haven’t aged well. Jacob was effortlessly cool and tough to impress, " +
          "which only made you want to try harder. When I first met Andrea, it was obvious she matched his calm, confident energy. Since then, my fiancée, bridesmaid Sarah Jacobs and I " +
          "have been lucky to travel and make memories with them. It’s wild to think we went from kids with endless free time to standing beside each other at weddings, and I’m so grateful " +
          "for the friendship and history we share!",
      image: BrennanGroomsmenImage
    },
    {
      name: "Alex Poncio-Bock",
      role: "Groomsman",
      bio: "I’ve known Jacob and Andrea for years. I’ve also known from the second I knew them together as a team that they would get married. " +
          "I’m proud and honored to be here, to know and love them, and to finally experience the inevitable wedding I’ve always known would happen, " +
          "here in beautiful Scotland.",
      image: AlexGroomsmenImage
    },
    {
      name: "Logan Jung",
      role: "Groomsman",
      bio: "For the longest time, when people saw Jacob and me out grabbing a drink, they assumed we were dating. " +
          "Now that we both have these incredible women in our lives — and will presumably be wearing wedding rings — " +
          "people will probably assume we’re married to each other… unless our wives are around. As they say, two’s a couple, three’s a crowd." +
          "In all seriousness, there are a lot of life lessons baked into this friendship. It truly feels like we grew up together — " +
          "nearly ten years of knowing Jacob, and all the shenanigans that come with that. I couldn’t be happier for both of them, " +
          "and I’m incredibly grateful to be here celebrating this special day with you all.",
      image: LoganGroomsmenImage
    }
  ];

  return (
    <>
      <Navigation />
      <div className="size-full">
        {/* Bride and Groom Hero Section */}
        <div className="min-h-screen bg-[#1A1A1A] relative px-8 md:px-16 lg:px-24">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <ImageWithFallback
                src={brideAndGroom.both.image}
                alt={brideAndGroom.both.name}
                className="h-full w-full object-cover"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 via-black/30 to-black/70"></div>
          </div>

          {/* Geometric elements */}
          <div className="absolute left-8 md:left-16 top-0 h-full w-px bg-[#D4C5B9]/30 z-10"></div>
          <div className="absolute right-8 md:right-16 top-0 h-full w-px bg-[#D4C5B9]/30 z-10"></div>

          {/* Content Overlay - positioned in top 40% */}
          <div className="relative z-20 max-w-7xl mx-auto pt-32 pb-0">
            {/* Header - in top 40% of the section */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-12 h-px bg-[#8B5A3C]"></div>
                <h1 className="text-2xl md:text-4xl lg:text-7xl text-[#D4C5B9] font-light leading-none tracking-[0.3em]">
                  THE COUPLE
                </h1>
                <div className="w-12 h-px bg-[#8B5A3C]"></div>
              </div>
            </div>
          </div>

          {/* Bride and Groom Details - Framing the center */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-[30rem] max-w-7xl mx-auto">
            {/* The Bride - Left Side */}
            <div className="text-left md:text-right space-y-4 bg-black/40 backdrop-blur-sm p-8 border border-[#D4C5B9]/20">
              <div className="inline-block">
                <p className="text-sm text-[#8B5A3C] tracking-[0.2em] uppercase mb-2">The Bride</p>
                <h2 className="text-3xl md:text-4xl text-[#D4C5B9] font-light mb-4">
                  {brideAndGroom.bride.name}
                </h2>
                <div className="w-16 h-px bg-[#8B5A3C] md:ml-auto mb-4"></div>
              </div>
              <p className="text-[#D4C5B9]/80 text-sm md:text-base leading-relaxed">
                {brideAndGroom.bride.bio}
              </p>
            </div>

            {/* The Groom - Right Side */}
            <div className="text-left space-y-4 bg-black/40 backdrop-blur-sm p-8 border border-[#D4C5B9]/20">
              <div className="inline-block">
                <p className="text-sm text-[#8B5A3C] tracking-[0.2em] uppercase mb-2">The Groom</p>
                <h2 className="text-3xl md:text-4xl text-[#D4C5B9] font-light mb-4">
                  {brideAndGroom.groom.name}
                </h2>
                <div className="w-16 h-px bg-[#8B5A3C] mb-4"></div>
              </div>
              <p className="text-[#D4C5B9]/80 text-sm md:text-base leading-relaxed">
                {brideAndGroom.groom.bio}
              </p>
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
              Bridal Party
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
                          loading="lazy"
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
                          loading="lazy"
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
