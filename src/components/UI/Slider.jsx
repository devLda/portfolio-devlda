import { motion } from "framer-motion";
// import slider1 from "../../assets/avatar/avatar.jpg";
// import slider2 from "../../assets/Logo/LogoLDA.png";
// import slider3 from "../../assets/Logo/LogoLDA-trans.png";
// import slider4 from "../../assets/RestApi.png";
import { useState } from "react";
import ItemProject from "./ItemProject";
import listProject from "../../utils/listProject";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

// const slider = [slider1, slider2, slider3, slider4];
const Slider = () => {
  const [isLandscapeMobile] = useOutletContext();
  const [positionIndexes, setPositionIndex] = useState(
    listProject.map((item, index) => index)
  );
  const handleChange = (i) => {
    setPositionIndex((prev) => {
      console.log("prev ", prev);
      const updatedIndexes = prev.map((prevIndex) => {
        let result = (prevIndex + i) % listProject.length;
        if (result < 0) result += listProject.length;
        return result;
      });
      console.log("updatedIndexes ", updatedIndexes);
      return updatedIndexes;
    });
  };
  const positions = ["center", "left", "right"];
  const imageVariants = {
    center: { y: "0%", x: "0%", scale: 1, zIndex: 5 },
    left: { y: "-25%", x: "20%", scale: 0.75, zIndex: 2 },
    // right: { y: "25%", x: "-20%", scale: 0.75, zIndex: 2 },
    // left1: { y: "150%", x: "0%", scale: 0.5, zIndex: 1 },
  };
  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      {listProject.map((list, index) => {
        return (
          <motion.div
            key={index}
            className={`
              ${isLandscapeMobile ? "h-full" : "h-full md:h-fit"}
              absolute rounded-xl`}
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          >
            <ItemProject key={index} childrenProp={list} />
          </motion.div>
        );
      })}

      {/* <motion.img
            key={index}
            src={img}
            alt={img}
            className="rounded-xl"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "40%", position: "absolute" }}
          ></motion.img> */}
      <div className="h-full w-screen z-[3] bg-black opacity-60"></div>
      <button
        className="absolute top-1/2 left-0 py-2 px-2 sm:px-4 text-4xl bg-blue-400 text-white z-10 opacity-30 hover:opacity-100"
        onClick={() => handleChange(-1)}
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute top-1/2 right-0 py-2 px-2 sm:px-4 text-4xl bg-blue-400 text-white z-10 opacity-30 hover:opacity-100"
        onClick={() => handleChange(1)}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Slider;
