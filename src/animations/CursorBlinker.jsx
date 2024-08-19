import { motion } from "framer-motion";

// Variant hiệu ứng cursor nhấp nháy
const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const CursorBlinker = () => {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-5/6 w-1 translate-y-1 bg-white"
    />
  );
};

export default CursorBlinker;
