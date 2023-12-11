import { FC } from "react";
import { motion } from "framer-motion";
import { tripsPageVariants, pageTranistion } from "../variants/PageVariants";
import { useNavigate } from "react-router-dom";
const TripsPage: FC = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/home");
  };

  return (
    <motion.section
      className="trips-page h-[100vh] flex items-center "
      initial="initial"
      animate="in"
      exit="out"
      variants={tripsPageVariants}
      transition={pageTranistion}
    >
      <button className="bg-white p-2 m-auto" onClick={clickHandler}>
        {" "}
        Navigate to home
      </button>
    </motion.section>
  );
};

export default TripsPage;
