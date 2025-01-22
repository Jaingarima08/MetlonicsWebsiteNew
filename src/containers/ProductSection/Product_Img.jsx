import React from "react";
import ProductImg from "../../assets/images/ProductImg.jpg";

const Product_Img = () => {
  return (
    <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] relative flex justify-center items-center pt-6 overflow-hidden">
      {/* Background Image */}
      <img
        src={ProductImg}
        alt="Product"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="absolute top-1/3 left-0 lg:left-12 text-white py-6 px-4 sm:px-8 lg:px-16">
        <h1 className="text-2xl md:text-4xl font-bold py-4 ">Our Products</h1>
      </div>
    </div>
  );
};

export default Product_Img;
