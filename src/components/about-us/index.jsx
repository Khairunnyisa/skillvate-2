import useGetAboutUs from "../../hooks/getAboutUs";
import Footer from "../landing-page/components/footer";
import Navbar from "../navbar/navbar";
import AboutHero from "./components/hero";
import HistorySection from "./components/history";
import StatsSection from "./components/stats";
import VisionMission from "./components/vision-mission";



const AboutUsPage = () => {

  const { data, isLoading, error } = useGetAboutUs({
    condition: true,
  });

  
  return (
    <>
      <Navbar/>
      <AboutHero data={data}/>
      <StatsSection data={data}/>
      <VisionMission data={data}/>
      <HistorySection/>
      <Footer/>
    </>
  );
};

export default AboutUsPage;
