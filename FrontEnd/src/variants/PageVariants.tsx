const landingPageVariants = {
  initial: { x: 0 },
  in: { x: 0 },
  out: { x: "-100%" }, // Slides out to the left
};

const tripsPageVariants = {
  initial: { x: "100%" }, // Starts off-screen to the right
  in: { x: 0 }, // Slides in from the right
  out: { x: "100%" }, // Slides out to the right
};
const pageTranistion = {
  type: "tween",
  ease: "easeIn",
  duration: 0.5,
};

export { landingPageVariants, tripsPageVariants, pageTranistion };
