import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Stairs from "./Stair";

const StairEffect = () => {
  const location = useLocation();
  return (
    /*
        #FarmerMotion #AnhOctKnow
        Các dùng AnimatePresence: 
        + Khi cần animate trước khi component unmounted 
        (thuộc tính "exit": chỉ sử dụng được trong AnimatePresence)
        + Multiple Children
    */
    <AnimatePresence>
      <div key={location.pathname}>
        <motion.div
          initial={{ top: "0%" }}
          animate={{
            top: "100%",
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-screen h-screen fixed flex z-30"
        >
          <Stairs />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default StairEffect;
