import React from 'react'
import ImageSlide from '../containers/HomeSection/ImageSlide'
import WelcomeToMetlonics from '../containers/HomeSection/WelcomeToMetlonics'
import OurExpertise from '../containers/HomeSection/OurExpertise'
import WhyChooseMetlonics from '../containers/HomeSection/WhyChooseMetlonics'
import Statistics from '../containers/HomeSection/DataStatistics'
import ExploreMetlonics from '../containers/HomeSection/ExploreMetlonics'

const Home = () => {
  return (
    <>
    <div className='overflow-hidden mt-20'>
    <ImageSlide/>
    <WelcomeToMetlonics/>
    <OurExpertise/>
    <WhyChooseMetlonics/>
    <Statistics />
    <ExploreMetlonics/>
    </div>
    </>
  )
}

export default Home