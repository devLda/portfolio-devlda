import { motion } from "framer-motion";
import slider1 from "../../assets/avatar/avatar.jpg";
import slider2 from "../../assets/Logo/LogoLDA.png";
import slider3 from "../../assets/Logo/LogoLDA-trans.png";
import slider4 from "../../assets/RestApi.png";
import { useState } from "react";

const slider = [slider1, slider2, slider3, slider4];
const Slider = () => {
  const [positionIndexes, setPositionIndex] = useState(
    slider.map((item, index) => index)
  );
  const handleChange = (i) => {
    setPositionIndex((prev) => {
      // console.log("prev ", prev);
      const updatedIndexes = prev.map((prevIndex) => {
        let result = (prevIndex + i) % slider.length;
        if (result < 0) result += slider.length;
        return result;
      });
      // console.log("updatedIndexes ", updatedIndexes);
      return updatedIndexes;
    });
  };
  const positions = ["center", "left", "right", "left1"];
  const imageVariants = {
    center: { y: "0%", x: "0%", scale: 1, zIndex: 5 },
    left: { y: "-50%", x: "0%", scale: 0.75, zIndex: 2 },
    right: { y: "50%", x: "0%", scale: 0.75, zIndex: 2 },
    left1: { y: "150%", x: "0%", scale: 0.5, zIndex: 1 },
  };
  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      {slider.map((img, index) => {
        return (
          <motion.img
            key={index}
            src={img}
            alt={img}
            className="rounded-xl"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "40%", position: "absolute" }}
          ></motion.img>
        );
      })}

      <button
        className="py-2 px-4 bg-blue-400 text-white absolute top-1/2 left-0"
        onClick={() => handleChange(-1)}
      >
        Trước
      </button>
      <button
        className="py-2 px-4 bg-blue-400 text-white absolute top-1/2 right-0"
        onClick={() => handleChange(1)}
      >
        Tiếp
      </button>
    </div>
  );
};

export default Slider;
