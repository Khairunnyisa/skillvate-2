import { useState } from "react";

import Hero from "./components/hero";
import Partnership from "./components/partnership";
import Why from "./components/why";
import TrainingCard from "./components/training-card";
import Faq from "./components/faq";
import Trainer from "./components/trainer";
import Testimoni from "./components/testimoni";
import Footer from "./components/footer";
import Navbar from "../navbar/navbar";



function LandingPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Hero />
      <Partnership />
      <Why />
      <TrainingCard/>
      <Faq />
      <Trainer/>
      <Testimoni/>
      <Footer />
      
    </>
  );
}

export default LandingPage;
