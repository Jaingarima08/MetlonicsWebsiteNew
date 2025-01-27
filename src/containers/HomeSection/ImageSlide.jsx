import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner_second from "../../assets/images/Banner_second.jpg";
import Banner_2 from "../../assets/images/Banner_2.jpg";

const ImageSlide = () => {
  // Create a ref for the slider
  const sliderRef = useRef(null);

  const settings = {
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    dots: true, // Added dots for navigation
    arrows: false, // Removed arrows for cleaner look
  };

  return (
    <div className="w-full h-[25vh] md:h-[70vh] lg:h-[80vh] relative flex "> 
      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings} className="w-full h-full">
        {/* Slide 1 */}
        <div className="relative w-full h-full">
          <img
            src={Banner_second}
            alt="Banner_second"
            className="  w-full h-[23vh] md:h-[70vh] lg:h-[80vh] object-cover"
          />
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-full">
          <img
            src={Banner_2}
            alt="Banner_2"
            className="  w-full h-[23vh] md:h-[70vh] lg:h-[80vh] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlide;
