import React from "react";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="h-[88px] w-full bg-primary flex items-center justify-center fixed z-[999]">
      <div className="flex items-center justify-between w-4/5">
        <div>
          <a
            href="/"
            className="text-subTitle font-subTitle tracking-[2px]
          lg:text-subTitle"
          >
            <h1>
              Faruq
              <span className="text-secondary text-subTitle font-subTitle">
                HZ
              </span>
            </h1>
          </a>
        </div>

        {/* Awal Navbar */}
        <nav
          id="navbar"
          className="absolute left-0 hidden shadow-lg top-14 lg:static lg:block lg:shadow-none"
        >
          <ul className="flex flex-col items-center justify-between w-full px-8 mx-2 lg:block lg:w-auto lg:px-0 lg:mx-0">
            <NavItem content="Beranda" />
            <NavItem content="Tentang Saya" path="/about" />
            <NavItem content="Prestasi" path="/prestasi" />
            <NavItem content="Portofolio" path="/portofolio" />
            <NavItem content="Blog" path="/blog" />
          </ul>
        </nav>
        {/* Akhir Navbar */}

        {/* Awal Navbar Mobile */}
        <div className="flex items-center lg:hidden">
          <button
            id="hamburger-btn"
            type="button"
            className="absolute block right-8"
          >
            <span className="transition duration-500 origin-top-left hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="transition duration-500 origin-bottom-left hamburger-line"></span>
          </button>
        </div>
        {/* Akhir Navbar Mobile */}
      </div>
    </header>
  );
};

export default Header;
