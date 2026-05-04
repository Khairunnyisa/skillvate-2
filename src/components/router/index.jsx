import { createBrowserRouter } from "react-router-dom";


import LandingPage from "../landing-page";
import ListTraining from "../list-training";
import TrainingPage from "../training";
import FaqHero from "../faq/components/hero";
import FaqPage from "../faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/training-list",
    element: <ListTraining />,
  },
  {
    path: "/training",
    element: <TrainingPage />,
  },
    {
      path: "/faq",
      element: <FaqPage />,
    },
  //   {
  //     path: "/faq",
  //     element: <FaqPage />,
  //   },
]);

export default router;
