import React from "react"


const OurJourney = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20 py-6 md:py-8 bg-gray-200 my-8 h-[730px]">
      <h1 className="text-start text-3xl font-bold  text-gray-800">
        Our Journey
      </h1>
      <hr className="border-gray-500 py-2"/>
      <div className="relative w-full">
      <div className="absolute w-[499px] md:w-[1240px] h-1 bg-gray-500 top-[478px] md:top-[458px] left-0 md:left-0 rotate-[-49deg] md:rotate-[-20deg] origin-bottom-left md:origin-bottom-left"></div>


      <div className="absolute flex flex-col items-center top-[467px] md:top-[450px]" style={{ left: "-2%" }}>
  {/* Year */}
  <div className="w-4 md:w-6 h-4 md:h-6 bg-red-500 rounded-full border-4 border-white shadow-md"></div>
  <div className="absolute top-[23px] md:top-[40px] text-center group">
    <p className="text-base md:text-lg font-semibold text-red-500">1969</p>
    {/* Description */}
    <p className="text-xs md:text-sm text-gray-600 min-w-[150px] md:min-w-[200px] hidden group-hover:block md:block">
      Foundation of Metlonics
    </p>
  </div>
</div>


<div className="absolute flex flex-col items-center top-[400px] md:top-[373px]" style={{ left: "16%" }}>
  <div className="w-4 md:w-6 h-4 md:h-6 bg-red-500 rounded-full border-4 border-white shadow-md"></div>
  <div className="absolute top-[-40px] md:top-[-70px] text-center group">
  <p className="text-xs md:text-sm text-gray-600 min-w-[150px] md:min-w-[200px] hidden group-hover:block md:block">Foundation of SEPSA in PINTO (SPAIN)</p>
    <p className="text-base md:text-lg font-semibold text-red-500">1975</p>
  </div>
</div>

<div className="absolute flex flex-col items-center top-[339px] md:top-[303px]" style={{ left: "32%" }}>
  <div className="w-4 md:w-6 h-4 md:h-6 bg-red-500 rounded-full border-4 border-white shadow-md"></div>
  <div className="absolute top-[30px] md:top-[40px] text-center group">
    <p className="text-base md:text-lg font-semibold text-red-500">1985</p>
    <p className="text-xs md:text-sm text-gray-600 min-w-[150px] md:min-w-[200px] hidden group-hover:block md:block">First sale of a PA System for Metro Madrid (SPAIN)</p>
  </div>
</div>

<div className="absolute flex flex-col items-center top-[280px] md:top-[235px]" style={{ left: "48%" }}>
  <div className="w-4 md:w-6 h-4 md:h-6 bg-red-500 rounded-full border-4 border-white shadow-md"></div>
  <div className="absolute   top-[-80px] md:top-[-90px] text-center group">
  <p className="text-xs md:text-sm text-gray-600 min-w-[150px] md:min-w-[200px] hidden group-hover:block md:block">First sale of an auxiliary converter for Metro Madrid (SPAIN)</p>
    <p className="text-base md:text-lg font-semibold text-red-500">1995</p>
  </div>
</div>

<div className="absolute flex flex-col items-center top-[218px] md:top-[166px]" style={{ left: "64%" }}>
  <div className="w-4 md:w-6 h-4 md:h-6 bg-red-500 rounded-full border-4 border-white shadow-md"></div>
  <div className="absolute top-[25px] md:top-[40px] text-center group">
    <p className="text-base md:text-lg font-semibold text-red-500">2005</p>
    <p className="text-xs md:text-sm text-gray-600 min-w-[150px] md:min-w-[200px] hidden group-hover:block md:block">First sale of a PA System for Metro Madrid (SPAIN)</p>
  </div>
</div>

<div className="absolute flex flex-col items-center top-[157px] md:top-[93px]" style={{ left: "81%" }}>
  <div className="w-4 md:w-6 h-4 md:h-6 bg-red-500 rounded-full border-4 border-white shadow-md"></div>
  <div className="absolute top-[-70px] md:top-[-70px] text-center group">
  <p className="text-xs md:text-sm text-gray-600 min-w-[150px] md:min-w-[200px] hidden group-hover:block md:block">First sale of a PA System for Metro Madrid (SPAIN)</p>
    <p className="text-base md:text-lg font-semibold text-red-500">2015</p>
  </div>
</div>

<div className="absolute flex flex-col items-center top-[95px] md:top-[24px]" style={{ left: "97%" }}>
  <div className="w-4 md:w-6 h-4 md:h-6 bg-red-500 rounded-full border-4 border-white shadow-md"></div>
  <div className="absolute top-[25px] md:top-[40px] text-center group">
    <p className="text-base md:text-lg font-semibold text-red-500">2024</p>
<p className="text-xs md:text-sm text-gray-600 min-w-[150px] md:min-w-[200px] hidden group-hover:block md:block">First sale of a PA System for (SPAIN)</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default OurJourney;
