import React from 'react'
import Railway from '../../assets/images/Railway.jpg'
import Defence from '../../assets/images/Defence.jpg'
import Mining from '../../assets/images/Mining.jpg'
import Automotive from '../../assets/images/Automotive.jpg'
import Agriculture from '../../assets/images/Agriculture.jpg'


const industries = [
  {
    title: "Railways",
    description: "Manufacturing bogie frames and assemblies for regional trains, metro systems, and locomotives.",
    image: Railway,
  },
  {
    title: "Defence",
    description: "Providing robust and reliable solutions to meet the rigorous demands of defence applications.",
    image: Defence,
  },
  {
    title: "Mining and Earthmoving",
    description: "Fabrications built to withstand extreme conditions and ensure operational efficiency.",
    image: Mining,
  },
  {
    title: "Automotive",
    description: " Delivering durable, high-performance components for vehicles and machinery.",
    image: Automotive,
  },
  {
    title: "Agriculture",
    description: "Tractors and farming equipment in lush green fields.",
    image: Agriculture,
  },
];

const AboutSection = () => {
  return (  
    <div className='px-4 sm:px-8 md:px-20 py-6 md:py-10 items-center justify-center'>
      <h1 className='text-start text-2xl md:text-3xl font-bold pb-2 text-gray-700'>About Us</h1>
        <p className='text-gray-600'>At Metlonics, we are committed to engineering excellence, innovation, and precision. As a leading manufacturer, we specialize in high-safety critical fabrications, delivering solutions tailored to the rigorous demands of various industries. Our expertise ensures reliability, quality, and adherence to strict safety standards, making us a trusted partner in the field. From design to production, we focus on meeting and exceeding client expectations with advanced technology and dedicated craftsmanship.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
      {industries.map((industry, index) => (
        <div
          key={index}
          className="rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-gray-500 text-white 
            cursor-pointer"
        >
          <img
            src={industry.image}
            alt={industry.title}
            loading="lazy"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 ">
            <h2 className="text-xl font-semibold mb-2">{industry.title}</h2>
            <p className="text-white ">{industry.description}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};




export default AboutSection