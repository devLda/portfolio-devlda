import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// UI Component
import MobileNav from "../Nav/MobileNav.jsx";
import WebNav from "../Nav/WebNav.jsx";
import DarkModeBuuton from "../UI/DarkModeButton.jsx";
import { useContext } from "react";
import { DarkmodeContext } from "../../App.jsx";

const Header = ({ childrenProp }) => {
  const { isLandscapeMobile } = childrenProp;
  const Darkmode = useContext(DarkmodeContext);
  // console.log("isDark: ", Darkmode);
  return (
    <header
      className={` 
    ${isLandscapeMobile ? "h-1/6" : "h-12 lg:h-[10%]"}
    min-h-9 relative flex items-center bg-amber-300 dark:bg-black dark:opacity-90 z-[15]`}
    >
      <div
        className={`
        ${isLandscapeMobile ? "max-w-full" : ""}
        container mx-auto flex lg:items-end justify-between`}
      >
        {/* Logo */}
        <Link to={""}>
          {/* Viết ký tự đặc biệt "<" thêm dấu {''} */}
          <h1 className="text-2xl sm:text-4xl font-primaryNomal font-semibold text-white">
            {"<DucAnh />"}
          </h1>
        </Link>

        <div className="flex gap-2 lg:gap-4 xl:gap-8">
          {/* Web Nav */}
          <div className="hidden lg:flex">
            <WebNav />
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <MobileNav childrenProp={childrenProp} />
          </div>

          {/* Hiệu ứng giúp nút bấm Darkmode sinh động hơn */}
          <motion.div
            whileTap={{ scale: 0.92 }}
            onClick={() => {
              Darkmode?.setDark(!Darkmode?.isDark);
            }}
          >
            {/* styled component vẫn bao gồm những default prop */}
            {/* sử dụng "checked" thay vì "defaultChecked" */}
            <DarkModeBuuton checked={Darkmode?.isDark} />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
