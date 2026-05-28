
import { data } from "react-router-dom";
import Footer from "../landing-page/components/footer";
import Navbar from "../navbar/navbar";
import TrainerHero from "./components/hero";
import ListTrainer from "./components/trainer-card";
import useGetTrainer from "../../hooks/getTrainer";



const TrainerPage = () => {
  const { data, isLoading, error } = useGetTrainer({
    condition: true,
  });

  

  return (
    <>
     <Navbar variant="overlay" />
      <TrainerHero data={data}/>
      <ListTrainer data={data}/>
      <Footer/>
      
      
      
    </>
  );
};

export default TrainerPage;
