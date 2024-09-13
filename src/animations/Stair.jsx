import { delay, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const timeDelay = (index) => {
  const totalElement = 6;
  return (totalElement - index - 1) * 0.1;
};

const Stair = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: timeDelay(index),
            }}
            className="h-full w-full relative bg-amber-300 dark:bg-blue-500 dark:opacity-90 pointer-events-none"
          ></motion.div>
        );
      })}
    </>
  );
};

export default Stair;
