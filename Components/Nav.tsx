import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB/MOBILE
          <span className="text-yellow-300">DEV</span>
        </h1>
        <div className="nav-link" onClick={() => window.scrollTo(0, 0)}>
          <a href="#Home">HOME</a>
        </div>
        <div className="nav-link">
          <a href="#About">ABOUT</a>
        </div>
        <div className="nav-link">
          <a href="#Services">SERVICES</a>
        </div>

        <div className="nav-link">PROJECT</div>
        <div className="nav-link">BLOG</div>
        <div className="nav-link">CONTACT</div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
