import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a] ">
      <h1 className="heading">
        MY
        <span className="text-yellow-400"> VIDEOS</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <a
          href="https://www.youtube.com/watch?v=6XfDG3xmPOs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <div className="w-[100%] relative h-[400px] ">
              <Image
                src="/images/blog3.jpg"
                alt="blog"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
              <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto ">
                April 17th, 2024
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5] " />
                  <p className="text-white">By Junjie</p>
                </div>
                <div className="flex items-center space-x-3 ">
                  <VideoCameraIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                  <p className="text-white">Beginner Friendly</p>
                </div>
              </div>
              <p className="mt-[1rem] text-white text-[18px] font-semibold">
                useDebouncedValue Explained: Mastering Debounced Inputs in React
                Hooks [Solve Real-World Dev Issues]
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://www.youtube.com/watch?v=NDUsz4Gysfw"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <div className="w-[100%] relative h-[400px] ">
              <Image
                src="/images/blog2.jpg"
                alt="blog"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
              <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto ">
                April 17th,2023
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5] " />
                  <p className="text-white">By Junjie</p>
                </div>
                <div className="flex items-center space-x-3 ">
                  <VideoCameraIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                  <p className="text-white">Advanced Topic</p>
                </div>
              </div>
              <p className="mt-[1rem] text-white text-[18px] font-semibold">
                Dynamically Manage a list of textInputs with Refs in React
                [Solve Real-World Dev Issues]
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://www.youtube.com/watch?v=MHYeBauOKDc&t=321s"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <div className="w-[100%] relative h-[400px] ">
              <Image
                src="/images/blog1.jpg"
                alt="blog"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
              <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto ">
                April 17th,2023
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5] " />
                  <p className="text-white">By Junjie</p>
                </div>
                <div className="flex items-center space-x-3 ">
                  <div className="flex items-center space-x-3 ">
                    <VideoCameraIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                    <p className="text-white">Introductory</p>
                  </div>
                </div>
              </div>
              <p className="mt-[1rem] text-white text-[18px] font-semibold">
                State Management Made Easy: Ditch the Boilerplate with Zustand
                [Solve Real-World Dev Issues]
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blog;
