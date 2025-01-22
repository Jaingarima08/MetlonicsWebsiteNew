import React from 'react';
// import { FaArrowUp } from 'react-icons/fa';
import { IoIosArrowDropup } from "react-icons/io";

const BackToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={handleScrollToTop}
    >
        <IoIosArrowDropup className="text-white hover:text-[#EA5256] w-6 h-6 md:w-8 md:h-8 z-auto" />
    </div>
  );
};

export default BackToTop;
