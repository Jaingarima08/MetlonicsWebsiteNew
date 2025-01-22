import React from 'react';
import ContactImage from '../../assets/images/ContactImg.jpg';

const ContactImg = () => {
  return (
    <div className="relative w-full  h-[40vh] sm:h-[50vh] lg:h-[80vh] items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-left"
        style={{
          backgroundImage: `url(${ContactImage})`, // Correct format
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Content */}
      <div className="relative text-start py-28 md:py-48 px-6 md:px-16 text-white max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-semibold">
          How Can We Help You?
        </h1>
        <p className="mt-2 text-xs md:text-base">
          Whether you're searching for a new engineering partner or starting a
          new career, we would love to hear from you.
        </p>
      </div>
    </div>
  );
}

export default ContactImg;
