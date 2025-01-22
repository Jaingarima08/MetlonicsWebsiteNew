import React from "react";
import BogieFrame from "../../assets/images/Fully_Assembled_Bogie.jpg";
import HeadStock from "../../assets/images/Head_Stock_img.jpg";
import ArmouredVechicleShell from "../../assets/images/Armoured_Vechicle_Shell.jpg";
import TractionTransfomerTank from "../../assets/images/Traction_Transfomer_Tank.jpg";
import Chassis from "../../assets/images/Chassis_img.jpg";

const expertises = [
  {
    id: "01",
    title: "Bogie Frame",
    image: BogieFrame,
    description: "At Metlonics, our Bogie Frames are expertly designed to ensure safety, durability, and optimal performance for regional trains, metros, and locomotives. With precision engineering, high-strength materials, and compliance with global standards, we deliver reliable solutions tailored to the needs of modern railways.",
  },
  {
    id: "02",
    title: "Head Stock",
    image: HeadStock,
    description: "Metlonics specializes in manufacturing Head Stocks that provide structural integrity and safety for rail vehicles. Designed with precision and built using robust materials, our head stocks ensure reliable performance and meet the rigorous demands of modern railway systems.",
  },
  {
    id: "03",
    title: "Armoured Vechicle Shell",
    image: ArmouredVechicleShell,
    description: "Metlonics produces Armoured Vehicle Shells with advanced engineering to ensure maximum durability and protection. Designed for defence applications, these shells are built to withstand extreme conditions and provide unmatched reliability in critical operations.",
  },
  {
    id: "04",
    title: "Traction Transfomer Tank",
    image: TractionTransfomerTank,
    description: "Metlonics specializes in manufacturing Traction Transformer Tanks engineered for efficient cooling and durability. These tanks are designed to meet the rigorous demands of railway and industrial applications, ensuring reliable performance and long-lasting operation.",
  },
  {
    id: "05",
    title: "Chassis",
    image: Chassis,
    description: "At Metlonics, we design and fabricate Chassis with precision engineering, ensuring durability and optimal performance. Our chassis solutions cater to diverse industries, offering robust support for heavy-duty applications.",
  },
];

const OurExpertise = () => {
  return (
    <div className="bg-gray-200 py-6 px-4 sm:px-8 lg:px-20">
    <h1 className='text-start text-2xl md:text-3xl font-bold pb-4 text-gray-700'>Our Expertise</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        {expertises.map((expertise) => (
          <div
            key={expertise.id}
            className="relative w-full h-auto shadow-lg rounded-lg overflow-hidden  group"
          >
            {/* expertise Image */}
            <img
              src={expertise.image}  
              alt={expertise.title}
              className="w-full h-full object-contain"
            />
             <h3 className="text-xl font-semibold mb-2 text-center text-gray-700">{expertise.title}</h3>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 bg-opacity-90 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-semibold mb-2">{expertise.title}</h3>
              <p className="text-sm">{expertise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExpertise;
