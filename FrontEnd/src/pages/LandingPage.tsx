import { ILandingPage } from "../types/pages/landingpage";
import { type FC } from "react";
import Header from "../sections/LandingPageSections/Header";

const LandingPage: FC<ILandingPage> = () => {
  return (
    <section>
      <Header></Header>
    </section>
  );
};

export default LandingPage;
