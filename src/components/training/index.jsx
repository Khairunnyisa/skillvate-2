import Footer from "../landing-page/components/footer";
import Navbar from "../navbar/navbar";
import DetailTrainingCard from "./components/card-detail-training";
import TrainingHero from "./components/hero";

const TrainingPage = () => {
  return (
    <>
      <Navbar />
      <TrainingHero />
      <DetailTrainingCard/>
      <Footer/>
    </>
  );
};

export default TrainingPage;
