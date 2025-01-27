import React from 'react'
import ContactImg from '../containers/ContactSection/ContactImg'
import ContactForm from '../containers/ContactSection/ContactForm'
import MapComponent from '../containers/ContactSection/MapComponent'
import OtherSites from '../containers/ContactSection/OtherSites'

const Contact = () => {
  return (
    <div className='mt-20'>
      <ContactImg/>
      <ContactForm/>
      <MapComponent/>
      <OtherSites/>
    </div>
  )
}

export default Contact