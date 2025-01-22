import React from 'react'
import CapabilitiesSection from './CapabilitiesSection/CapabilitiesSection'

const Capabilities = () => {
  return (
    <>
      <div className='px-4 sm:px-8 md:px-20 py-6 md:py-10 items-center justify-center'>
      <h1 className='text-start text-2xl md:text-3xl font-bold text-gray-700'>Our Capabilities</h1>
      <p className='text-gray-600 py-2'>We continually invest in advanced technologies and equipment across every stage of our manufacturing processes to ensure we meet the highest standards. Our extensive facilities include:</p>
      <CapabilitiesSection/>
      <div>
      <h1 className='text-start text-2xl md:text-3xl font-bold text-gray-700'>Why Our Infrastructure Matters</h1>
      <p className='text-gray-600 py-2'>Our infrastructure plays a critical role in our ability to consistently deliver quality products that meet the most stringent standards. From design to production, we leverage these advanced capabilities to offer complete solutions, tailored to the specific needs of our clients across a wide range of industries.</p>

      <p className='text-gray-600'>At Metlonics, we don't just build products - we build trust. Our commitment to cutting-edge infrastructure ensures that every fabrication is crafted with the utmost precision, safety, and reliability.</p>
      </div>
      </div>
    </>
  )
}

export default Capabilities
