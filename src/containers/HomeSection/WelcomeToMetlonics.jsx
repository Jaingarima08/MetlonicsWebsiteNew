import React from 'react'

const WelcomeToMetlonics = () => {
  return (
    <>
      <div className='px-4 sm:px-8 lg:px-20 pb-4 md:py-10  items-center justify-center'> 
        <h1 className='text-start text-2xl md:text-3xl font-bold text-gray-700'>Welcome to Metlonics</h1>

        <p className='py-2 text-gray-600'>At <strong>Metlonics</strong>, we pride ourselves on being a leader in high-safety critical fabrications, delivering precision-engineered solutions for various industries. As a trusted partner in the manufacturing sector, we specialize in:</p>

        <ul className='list-disc list-inside text-gray-600'>
          <li><strong>Bogie Frames and Bogie Assemblies</strong> for regional trains, metros, and locomotives.</li>

          <li className='py-2'><strong>Heavy Engineering Fabrications</strong> for defence, mining, earthmoving, automotive, and agricultural sectors.</li>
        </ul>

        <p className='text-gray-600'>Our commitment to quality, innovation, and safety has established us as a preferred choice for clients across the globe.</p>
      </div>
     
    </>
  )
}

export default WelcomeToMetlonics