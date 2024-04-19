/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center ">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
            HI, I'M <span className="text-yellow-400">Junjie Yang!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92] ">
            I'm a passionate developer with 4 years of experience building
            user-centric web and mobile applications. I leverage my expertise in
            React, React Native, NextJS, NodeJS, and other technologies to craft
            beautiful, functional, and responsive apps that meet your specific
            needs.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <div className="px-[2rem] py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p>Find me on</p>
              {/* <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" /> */}
            </div>
            {/* <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5] " />
              <p className="text-[20px] font-semibold text-white ">
                Watch The Video
              </p>
            </button> */}
            <div className="flex gap-10">
              <a
                href="https://www.youtube.com/channel/UC9xyfURZ-_N2YnNAZV0MrmA"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/images/youtube.png"
                  alt="youtube"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/junjie-yang-848495222/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/images/linkedin.png"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://github.com/JunjieYangNextJS"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/images/github.png"
                  alt="github"
                  width={40}
                  height={40}
                  style={{ borderRadius: 5 }}
                />
              </a>
              {/* <a
                href="https://twitter.com/Jsquareapples"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/images/x.jpg"
                  alt="twitter"
                  width={30}
                  height={30}
                />
              </a> */}
            </div>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/MyFace.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
