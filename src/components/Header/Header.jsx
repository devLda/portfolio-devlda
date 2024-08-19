import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// UI Component
import MobileNav from "../UI/MobileNav.jsx";
import WebNav from "../UI/WebNav.jsx";
import DarkModeBuuton from "../UI/DarkModeButton.jsx";

const Header = () => {
  return (
    <header className="relative h-1/5 py-4 lg:py-8">
      <div className="container mx-auto flex lg:items-end justify-between">
        {/* Logo */}
        <Link to={""}>
          {/* Viết ký tự đặc biệt "<" thêm dấu {''} */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-primaryNomal font-semibold text-white">
            {"<DucAnh />"}
          </h1>
        </Link>

        <div className="flex gap-2 lg:gap-4 xl:gap-8">
          {/* Web Nav */}
          <div className="hidden lg:flex">
            <WebNav />
          </div>

          <div className="lg:hidden">
            <MobileNav />
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
