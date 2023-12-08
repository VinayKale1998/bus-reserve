import { ILandingPage } from "../types/pages/landingpage";
import { type FC } from "react";
import Header from "../sections/LandingPageSections/Header";
import Body from "../sections/LandingPageSections/Body";

const LandingPage: FC<ILandingPage> = () => {
  return (
    <section className="landing-page relative min-h-[100vh]">
      <Header></Header>
      <Body></Body>
    </section>
  );
};

export default LandingPage;
