
import Footer from "../landing-page/components/footer";
import Navbar from "../navbar/navbar";
import TrainerHero from "./components/hero";
import ListTrainer from "./components/trainer-card";



const TrainerPage = () => {
  return (
    <>
     <Navbar variant="overlay" />
      <TrainerHero/>
      <ListTrainer/>
      <Footer/>
      
      
      
    </>
  );
};

export default TrainerPage;
