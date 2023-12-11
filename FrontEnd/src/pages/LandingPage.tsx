import { ILandingPage } from "../types/pages/landingpage";
import { type FC } from "react";
import Header from "../sections/LandingPageSections/Header";
import { motion } from "framer-motion";
import { landingPageVariants, pageTranistion } from "../variants/PageVariants";

import SearchForm from "../sections/LandingPageSections/SearchForm";

const LandingPage: FC<ILandingPage> = () => {
  return (
    <motion.section
      className="landing-page relative min-h-[100vh]"
      initial="initial"
      animate="in"
      exit="out"
      variants={landingPageVariants}
      transition={pageTranistion}
    >
      <Header></Header>
      <SearchForm></SearchForm>
    </motion.section>
  );
};

export default LandingPage;
