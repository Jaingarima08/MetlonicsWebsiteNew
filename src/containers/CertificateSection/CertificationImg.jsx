import React from 'react'
import CertificationImg from '../../assets/images/Certificationimg.jpg'

const CertificateImg = () => {
  return (
    <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] relative flex justify-end pt-6 overflow-hidden">
      {/* Background Image */}
      <img
        src={CertificationImg}
        alt="CertificationImg"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="absolute top-1/3 md:max-w-4xl py-6 px-4 md:px-16 text-white">
        <h1 className="text-2xl md:text-4xl font-bold ">Why Cetification?</h1>
        <p className='md:py-2 text-xs md:text-base'>Certifications validate a company's commitment to quality, safety, and compliance with international standards. They ensure that products and services meet industry-specific regulations, enhancing credibility and trust among customers. Ultimately, Obtaining certifications also helps businesses expand into global markets by meeting legal and regulatory requirements. 
        </p>
      </div>
    </div>
  );
}

export default CertificateImg