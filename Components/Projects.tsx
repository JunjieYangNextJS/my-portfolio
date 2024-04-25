import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading pb-[2rem]">
        Pro<span className="text-yellow-400">Jects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1  lg:grid-cols-3 gap-[2rem] ">
        <div data-aos="fade-up">
          <a
            href="https://www.priders.net"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/socialMedia.jpg"
                alt="priders"
                layout="fill"
                style={{
                  width: "100%",
                  aspectRatio:
                    16 / 9 /* Adjust as needed based on image aspect ratio */,
                  overflow:
                    "hidden" /* Hide any overflowing parts of the image */,
                }}
              />
            </div>
          </a>

          <div>
            <p className=" text-white pt-5">
              This social media app is built with industry standard technologies
              featuring React, Nodejs, Express, Mongodb, Amazon S3, react-query,
              websockets, JWT authentication flow, REST APIs, etc. Mobile
              version is currently running in closed-testing on Android. If you
              are interested to join our closed testing group, please send us
              your email address associated with your Android phone. Your email
              will only be used for closed testing communication.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://yang-jewelry.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/e-commerce.jpg"
                alt="e-commerce"
                // height={400}
                // width={400}
                layout="fill"
                // className="object-contain"
                style={{
                  width: "100%",
                  aspectRatio:
                    16 / 9 /* Adjust as needed based on image aspect ratio */,
                  overflow:
                    "hidden" /* Hide any overflowing parts of the image */,
                }}
              />
            </div>
          </a>

          <div>
            <p className=" text-white pt-5">
              This e-commerce app is built with modern technologies featuring
              React, Nodejs, Express, Mongodb, Cloudinary, React-redux,
              contextAPI, TailwindCSS, JWT authentication flow, REST APIs etc.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <a
            href="https://cheap-and-yummy.vercel.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/foodFinder.jpg"
                alt="foodFinder"
                // height={400}
                // width={400}
                layout="fill"
                style={{
                  width: "100%",
                  aspectRatio:
                    16 / 9 /* Adjust as needed based on image aspect ratio */,
                  overflow:
                    "hidden" /* Hide any overflowing parts of the image */,
                }}

                // className="overflow:hidden"
              />
            </div>
          </a>

          <div>
            <p className=" text-white pt-5">
              This food finder app utilizes data from Yelp Fusion API and Google
              Map API. It is built with the newest technologies featuring Nextjs
              13 App router, Typescript, Zustand, TailwindCSS, react-query, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
