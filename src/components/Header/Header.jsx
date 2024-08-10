import React from "react";
import { Link } from "react-router-dom";

// Component Header
import MobileNav from "../MobileNav/MobileNav";
import WebNav from "../WebNav/WebNav";

const Header = () => {
  return (
    <header className="py-8 lg:py-12">
      <div className="container mx-auto xl:flex xl:items-end xl:justify-between">
        {/* Logo */}
        <Link to={""}>
          <h1 className="text-4xl text-yellow-400">{'<DucAnh />'}</h1>
        </Link>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

        {/* Web Nav */}
        <div className="hidden xl:flex">
          <WebNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
