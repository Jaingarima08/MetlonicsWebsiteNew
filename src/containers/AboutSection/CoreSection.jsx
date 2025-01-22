import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars, faRocket, faGem } from "@fortawesome/free-solid-svg-icons";

const InfoCard = ({ borderColor, icon, titleColor, title, description }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 text-center h-auto w-[350px] md:w-[330px]">
      {/* Top border */}
      <div
        className={`absolute top-0 left-0 w-full h-8 rounded-t-lg ${borderColor}`}
      ></div>
      {/* Icon */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 shadow-md">
        {icon}
      </div>
      {/* Title */}
      <h3 className={`text-xl font-semibold mt-8 mb-4 ${titleColor}`}>{title}</h3>
      {/* Description */}
      <div className="text-gray-600 space-y-2 ">
        {description.map((text, index) => (
          <p key={index} className="flex items-start ">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

const VisionMissionValues = () => {
  return (
  <>
   <div className='bg-gray-200 py-6 px-4 sm:px-8 lg:px-20 '>
    <h1 className='text-start text-2xl md:text-3xl font-bold text-gray-700'>Our Philosophy</h1>
    <hr className="border-gray-500  py-2"/>
    <div className="flex flex-wrap justify-center gap-8 p-10 ">
      <InfoCard
        borderColor="bg-blue-500"
        icon={<FontAwesomeIcon icon={faBinoculars} className="text-blue-500 text-2xl" />}
        titleColor= "text-blue-500"
        title="Our Vision"
        description={[
          "Metlonics is dedicated to engineering and delivering advanced fabrications that set new global standards in safety, quality, and innovation. Our expertise spans diverse industries, ensuring cutting-edge solutions tailored to each sector's needs. With a commitment to excellence, we aim to redefine benchmarks and empower industries worldwide."
        ]}
      />
      <InfoCard
        borderColor="bg-yellow-500"
        icon={<FontAwesomeIcon icon={faRocket} className="text-yellow-500 text-2xl" />}
        titleColor= "text-yellow-500"
        title="Our Mission"
        description={[
          "to be a global leader in providing high-safety critical engineering solutions. This vision underlines the commitment to helping industries achieve enhanced efficiency and reliability through their offerings. It reflects Metlonics' focus on innovation, precision, and setting benchmarks in quality and safety standards globally."
        ]}
      />
      <InfoCard
        borderColor="bg-red-500"
        icon={<FontAwesomeIcon icon={faGem} className="text-red-500 text-2xl" />}
        titleColor= "text-red-500"
        title="Our Values"
        description={[
          "This statement encapsulates Metlonics' mission to deliver engineering excellence. By focusing on cutting-edge fabrications, the company aims to set global standards in safety, quality, and innovation. Through its tailored solutions, Metlonics drives progress across diverse industries, reinforcing its role as a trusted and forward-thinking partner."
        ]}
      />
    </div>
    </div>
    </>
  );
};

export default VisionMissionValues;
