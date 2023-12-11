import { useRoutes, useLocation } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import TripsPage from "../pages/TripsPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  const routeElement = useRoutes([
    { path: "/home", element: <LandingPage></LandingPage> },
    { path: "/trips", element: <TripsPage></TripsPage> },
  ]);

  return (
    <AnimatePresence>
      <div key={location.pathname}>{routeElement}</div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
