import Footer from "../landing-page/components/footer";
import Navbar from "../navbar/navbar";
import FaqCTA from "./components/cta";
import FaqHero from "./components/hero";
import FaqList from "./components/list-faq";


const FaqPage = () => {
  return (
    <>
      <Navbar/>
      <FaqHero/>
      <FaqList/>
      <FaqCTA/>
      <Footer/>
      
    </>
  );
};

export default FaqPage;
