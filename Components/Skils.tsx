import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Work <span className="text-yellow-400">History</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <SkilsItem
          title="MERN Stack Developer"
          year="2020 - present"
          description="I bring over 4 years of professional experience crafting dynamic and user-friendly web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). I'm passionate about building robust and scalable web experiences. I'm proficient in all aspects of the MERN development cycle, from planning and development to deployment and maintenance."
        />
        <SkilsItem
          title="React Native Developer"
          year="2023 - present"
          description="Over 4 years of experience with React have equipped me to excel in mobile development using React Native. Leveraging Expo, Node.js, and MongoDB, I craft high-performing mobile applications that prioritize a seamless user experience and robust security. My expertise in React allows me to translate web development knowledge into efficient and user-friendly mobile solutions."
        />
        {/* <SkilsLanguage
            skill1="html"
            skill2="css"
            skill3="javascript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          /> */}

        {/* <div>
          <SkilsItem title="Next Js Developer" year="2018 - 2021" />
          <SkilsItem title="Node Js Developer" year="2021 - 2023" />
          <SkilsLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="TypeScript"
            level1="w-[81%]"
            level2="w-[78%]"
            level3="w-[60%]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Skils;
