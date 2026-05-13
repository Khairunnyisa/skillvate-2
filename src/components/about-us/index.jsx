import Footer from "../landing-page/components/footer";
import Navbar from "../navbar/navbar";
import AboutHero from "./components/hero";
import HistorySection from "./components/history";
import StatsSection from "./components/stats";
import VisionMission from "./components/vision-mission";



const AboutUsPage = () => {
  return (
    <>
      <Navbar/>
      <AboutHero/>
      <StatsSection/>
      <VisionMission/>
      <HistorySection/>
      <Footer/>
    </>
  );
};

export default AboutUsPage;
