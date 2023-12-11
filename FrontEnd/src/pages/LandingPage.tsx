import { ILandingPage } from "../types/pages/landingpage";
import { type FC } from "react";
import Header from "../sections/LandingPageSections/Header";

import SearchForm from "../sections/LandingPageSections/SearchForm";

const LandingPage: FC<ILandingPage> = () => {
  return (
    <section className="landing-page relative min-h-[100vh]">
      <Header></Header>
      <SearchForm></SearchForm>
    </section>
  );
};

export default LandingPage;
