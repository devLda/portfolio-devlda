import React from "react";
import { Link } from "react-router-dom";

// UI Component
import MobileNav from "../UI/MobileNav.jsx";
import WebNav from "../UI/WebNav.jsx";
import DarkModeBuuton from "../UI/DarkModeButton.jsx";

const Header = () => {
  return (
    <header className="py-4 lg:py-8">
      <div className="container mx-auto xl:flex xl:items-end xl:justify-between">
        {/* Logo */}
        <Link to={""}>
          {/* Viết ký tự đặc biệt "<" thêm dấu {''} */}
          <h1 className="text-4xl text-yellow-500">{"<DucAnh />"}</h1>
        </Link>

        <div className="flex gap-8">
          {/* Mobile Nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>

          {/* Web Nav */}
          <div className="hidden xl:flex">
            <WebNav />
          </div>

          <DarkModeBuuton />
        </div>
      </div>
    </header>
  );
};

export default Header;
