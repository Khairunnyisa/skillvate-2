import { createBrowserRouter } from "react-router-dom";


import LandingPage from "../landing-page";

import TrainingPage from "../training";
import FaqHero from "../faq/components/hero";
import FaqPage from "../faq";
import AboutUsPage from "../about-us";
import ListTraining from "../training-schedule";
import TrainerPage from "../trainer";
import TrainingDetailPage from "../detail-training";

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
    {
      path: "/about-us",
      element: <AboutUsPage />,
    },
    {
      path: "/trainer",
      element: <TrainerPage />,
    },
    {
  path: "/training/:slug",
  element: <TrainingDetailPage />,
}
]);

export default router;
