import React from 'react';
import homeconnect from '../../assets/images/homeconnect.jpg';

const ExploreMetlonics = () => {
  return (
    <>
      <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] relative flex justify-center items-center pt-6">
        <img
          src={homeconnect}
          alt="homeconnect"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/4 left-0 lg:left-4 text-white py-6 px-4 sm:px-8 lg:px-16 ">
          <h1 className="text-2xl md:text-3xl font-bold py-4">Explore Metlonics</h1>
          <a href='/contact' className="mt-4 px-4 py-2 text-xl bg-blue-500 text-white rounded shadow hover:bg-blue-600">
            Get Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default ExploreMetlonics;
