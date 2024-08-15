import React, { useState } from "react";
import { Link } from "react-router-dom";

// UI Component
import MobileNav from "../UI/MobileNav.jsx";
import WebNav from "../UI/WebNav.jsx";
import DarkModeBuuton from "../UI/DarkModeButton.jsx";

// Icons Material
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="py-4 lg:py-8">
      <div className="container mx-auto flex lg:items-end justify-between">
        {/* Logo */}
        <Link to={""}>
          {/* Viết ký tự đặc biệt "<" thêm dấu {''} */}
          <h1 className="text-4xl font-primaryNomal text-white">
            {"<DucAnh />"}
          </h1>
        </Link>

        <div className="flex gap-2 lg:gap-4 xl:gap-8">
          {/* Mobile Nav */}
          {openNav && (
            <div className="lg:hidden">
              <MobileNav />
            </div>
          )}

          {/* Web Nav */}
          <div className="hidden lg:flex">
            <WebNav />
          </div>

          <DarkModeBuuton />

          <MenuIcon
            className="lg:hidden"
            sx={{
              marginTop: "-4px",
              fontSize: 48,
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              setOpenNav(!openNav)
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
