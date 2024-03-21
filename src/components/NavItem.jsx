import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ content = "Isi", path = "/" }) => {
  return (
    <a
      href={path}
      className="inline-block m-2 text-paragraph py-2 px-[0.1rem] relative text-center transition-all duration-[150ms]
              after:contents[''] after:w-0 after:h-[4px] after:inline-block after:absolute after:bottom-0 after:left-0 after:bg-secondary after:transition-all after:duration-[400ms]
              hover:after:w-full hover:after:transition-all hover:after:duration-[400ms]"
    >
      <li>
        <Link to={path}>{content}</Link>
      </li>
    </a>
  );
};

export default NavItem;
