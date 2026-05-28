import Hero from "./components/hero";
import Partnership from "./components/partnership";
import Why from "./components/why";
import TrainingCard from "./components/training-card";

import Trainer from "./components/trainer";
import Testimoni from "./components/testimoni";
import Footer from "./components/footer";
import Navbar from "../navbar/navbar";
import Faq from "./components/faq";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partnership />
      <Why />
      <TrainingCard />
      <Faq/>
      <Trainer />
      <Testimoni />
      <Footer />
    </>
  );
}

export default LandingPage;