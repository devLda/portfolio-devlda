import { animate, motion, useMotionValue, useTransform } from "framer-motion";

import CursorBlinker from "../../animations/CursorBlinker";
import Avatar from "../../assets/avatar/avatar.jpg";
import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

// Gom chung các component có cùng dạng về 1 Array để dễ maintance
const aboutCareer = [
  {
    quantity: "1.5",
    describe_1: "Năm",
    describe_2: "kinh nghiệm",
  },
  {
    quantity: "09",
    describe_1: "Kỹ năng",
    describe_2: "công nghệ",
  },
  {
    quantity: "02",
    describe_1: "Dự án",
    describe_2: "thực tế",
  },
  {
    quantity: "03",
    describe_1: "Dự án",
    describe_2: "cá nhân",
  },
];

// const containerVariants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.3,
//       ease: "easeOut",
//       delayChildren: 0.3,
//       staggerChildren: 0.1,
//     },
//   },
// };

const textVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  const [isLandscapeMobile] = useOutletContext();
  console.log("isLand ", isLandscapeMobile);
  const textIndex = useMotionValue(0);
  const texts = ["Lê Đức Anh", "Nhà phát triển web"];
  const baseText = useTransform(textIndex, (lastest) => texts[lastest] || "");

  // #FarmerMotion khởi tạo MotionValue: là giá chị theo dõi trạng thái và vận tóc của hoạt ảnh
  const countText = useMotionValue(0);

  // #FarmerMotion useTransform: hàm trả về một MotionValue mới biến đổi output của 1 hoặc nhiều MotionValue khác
  // tách từng ký tự để hiển thị
  const rounded = useTransform(countText, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );

  const updatedThisRound = useMotionValue(true);

  const widthDevice = useRef(window.innerWidth);

  useEffect(() => {
    // animate(): được sử dụng để khởi động và điều khiển animations
    animate(countText, 60, {
      type: "tween",
      delay: 1.6,
      duration: 2.5,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate: (lastest) => {
        if (updatedThisRound.get() === true && lastest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && lastest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });

    // animate(countText, 100, {
    //   onUpdate: (lastest) => console.log(lastest),
    // });
  }, []);
  return (
    <div
      className={`w-full h-full grid ${
        isLandscapeMobile ? "grid-rows-6" : "grid-rows-6 lg:grid-rows-4"
      }`}
    >
      <div
        className={`${
          isLandscapeMobile
            ? "grid-cols-3 "
            : "grid-rows-5 lg:row-span-3 lg:grid-rows-3 lg:grid-cols-3"
        } grid row-span-5`}
      >
        <div
          className={`${
            isLandscapeMobile
              ? "col-span-2 justify-evenly"
              : "row-span-3 lg:col-span-2 justify-evenly lg:justify-center gap-0 lg:gap-8"
          }  flex flex-col`}
        >
          <h1
            className={`${
              isLandscapeMobile
                ? "text-3xl"
                : "text-2xl sm:text-4xl lg:text-5xl xl:text-6xl"
            } font-primaryNomal tracking-[0.15em] text-white`}
          >
            Xin chào,Tôi là
          </h1>
          {/* <motion.div
            variants={containerVariants}
            animate="visible"
            initial="hidden"
          >
          </motion.div> */}
          <motion.span variants={textVariants} className="flex items-baseline">
            <motion.span
              className={`${
                isLandscapeMobile
                  ? "text-4xl"
                  : "text-2xl xs:text-3xl sm:text-5xl xl:text-7xl"
              }
           font-primaryNomal tracking-widest text-blue-500`}
            >
              {displayText}
            </motion.span>
            {/* Khi text dài ra hoặc thu lại thì cursor sẽ tự động đi theo */}
            <CursorBlinker />
            <h1
              className={`${
                isLandscapeMobile
                  ? "text-4xl"
                  : "text-2xl xs:text-3xl sm:text-7xl lg:text-6xl xl:text-7xl"
              }
               font-primaryNomal text-transparent`}
            >
              {"|"}
            </h1>
          </motion.span>
          <h3
            className={`
            ${
              isLandscapeMobile
                ? "w-full sm:w-5/6 text-xs sm:text-base"
                : "w-full lg:w-5/6 text-xs xs:text-base sm:text-xl xl:text-2xl"
            }
             font-primary tracking-[0.15em] font-medium text-white`}
          >
            "Cống hiến giá trị - Nhận lại thành công"
          </h3>
          <h3
            className={`
            ${
              isLandscapeMobile
                ? "w-full sm:w-5/6 text-xs sm:text-base"
                : "w-full lg:w-5/6 text-xs xs:text-base sm:text-xl xl:text-2xl"
            }
             font-primary tracking-[0.15em] font-medium text-white`}
          >
            Trau dồi kiến thức mới và thực hành thành thạo luôn là ưu tiên của
            tôi
          </h3>
        </div>
        <div
          className={`
          ${
            isLandscapeMobile
              ? "col-span-1"
              : "row-span-2 lg:row-span-3 lg:col-span-1"
          }
           w-full flex justify-center items-center`}
        >
          <div
            className={`
            ${
              isLandscapeMobile
                ? "w-40 sm:w-48 h-40 sm:h-48"
                : "w-32 h-32 xs:w-48 xs:h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-8w-80 xl:w-96  xl:h-96"
            }
            p-4 flex justify-center`}
          >
            <img
              className="w-full h-full rounded-full"
              src={Avatar}
              alt="avatar"
            />
          </div>
        </div>
      </div>

      {/* <div className="row-span-1 flex flex-wrap items-center justify-between">
        {aboutCareer.map((item, index) => {
          return (
            <div key={index} className="flex basis-1/2 gap-4">
              <h3 className="text-6xl text-center text-blue-500 tracking-wider">
                {item.quantity}
              </h3>
              <div className="flex flex-col">
                <p className="text-lg text-white font-medium tracking-widest">
                  {item.describe_1}
                </p>
                <p className="text-lg text-white font-medium tracking-widest">
                  {item.describe_2}
                </p>
              </div>
            </div>
          );
        })}
      </div> */}

      <div
        className={`
        ${isLandscapeMobile ? "flex-nowrap" : "flex-wrap lg:flex-nowrap"}
        row-span-1 flex items-center justify-between`}
      >
        {aboutCareer.map((item, index) => {
          return (
            <div
              key={index}
              className={`
                ${isLandscapeMobile 
                  ? "flex gap-2" : "basis-1/2 lg:basis-auto grid grid-cols-5 lg:flex lg:gap-4"
                }
                `}
            >
              {index % 2 === 1 &&
                widthDevice.current > 640 &&
                !isLandscapeMobile && (
                  <div className={`lg:hidden col-span-1`}></div>
                )}
              <h3
                className={`
                ${isLandscapeMobile ? "text-3xl" : "text-3xl sm:text-5xl md:text-6xl"}
                col-span-2 flex justify-center text-blue-500 tracking-wider`}
              >
                {item.quantity}
              </h3>
              <div
                className={`
                ${
                  index % 2 === 1 && widthDevice.current > 640
                    ? "col-span-2"
                    : "col-span-3"
                }
                flex flex-col`}
              >
                <p
                  className={`
                  ${isLandscapeMobile ? "text-xs" : "text-xs sm:text-base md:text-lg"}
                   text-white font-medium tracking-widest`}
                >
                  {item.describe_1}
                </p>
                <p
                  className={`
                  ${
                    isLandscapeMobile ? "text-xs" : "text-xs sm:text-base md:text-lg"
                  } text-white font-medium tracking-widest`}
                >
                  {item.describe_2}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
