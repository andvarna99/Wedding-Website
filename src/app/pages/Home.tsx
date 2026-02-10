import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import OurStory from "../components/OurStory";
import SaveTheDate from "../components/SaveTheDate";
import EventDetails from "../components/EventDetails";

export default function Home() {
  return (
    <>
        <Navigation />
        <HeroSection />
        <OurStory />
        <SaveTheDate />
        <EventDetails />
    </>
  );
}
