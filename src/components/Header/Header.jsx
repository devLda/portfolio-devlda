import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// UI Component
import MobileNav from "../UI/MobileNav.jsx";
import WebNav from "../UI/WebNav.jsx";
import DarkModeBuuton from "../UI/DarkModeButton.jsx";

const Header = ({ childrenProp }) => {
  const { isLandscapeMobile } = childrenProp;
  return (
    <header
      className={` 
    ${isLandscapeMobile ? "h-1/6" : "h-[8%] lg:h-[10%]"}
    relative flex items-center`}
    >
      <div className={`
        ${isLandscapeMobile ? "max-w-full" : ""}
        container mx-auto flex lg:items-end justify-between`}>
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
          <motion.div whileTap={{ scale: 0.92 }}>
            <DarkModeBuuton />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
