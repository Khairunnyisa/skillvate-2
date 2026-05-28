import useGetFAQs from "../../hooks/getFAQs";
import Footer from "../landing-page/components/footer";
import Navbar from "../navbar/navbar";
import FaqCTA from "./components/cta";
import FaqHero from "./components/hero";
import FaqList from "./components/list-faq";


const FaqPage = () => {

  const { data, isLoading, error } = useGetFAQs({
    condition: true,
  });

  return (
    <>
      <Navbar/>
      <FaqHero/>
      <FaqList data={data}/>
      <FaqCTA/>
      <Footer/>
      
    </>
  );
};

export default FaqPage;
