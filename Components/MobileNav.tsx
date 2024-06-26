import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  const scrollToTopAndCloseNav = () => {
    window.scrollTo(0, 0);
    closeNav();
  };

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center overflow-auto">
        <div className="nav-link-mobile" onClick={scrollToTopAndCloseNav}>
          <a href="#Home">HOME</a>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <a href="#About">ABOUT</a>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <a href="#Services">SERVICES</a>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <a href="#History">HISTORY</a>
        </div>

        <div className="nav-link-mobile" onClick={closeNav}>
          <a href="#Projects">PROJECTS</a>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          {" "}
          <a href="#Videos">VIDEOS</a>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <a href="#Contact">CONTACT</a>
        </div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
