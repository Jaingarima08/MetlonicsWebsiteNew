import React from 'react'
import AboutSection from '../containers/AboutSection/AboutSection'
import VisionMissionValues from '../containers/AboutSection/CoreSection'
// import OurJourney from '../containers/AboutSection/OurJourney'
import OurJourneyItem from '../containers/AboutSection/Journey'

const About = () => {
  return (
    
    <div className='my-24'>
      <AboutSection/>
      <VisionMissionValues/>
      <OurJourneyItem/>
      {/* <OurJourney/> */}
    </div>
  )
}

export default About