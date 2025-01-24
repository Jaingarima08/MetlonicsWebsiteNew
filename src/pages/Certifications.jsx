import React from 'react'
import CertificateGallery from '../containers/CertificateSection/CertificateGallery'
import CertificateImg from '../containers/CertificateSection/CertificationImg'

const Certifications = () => {
  return (
    <div className='mt-24'>
    <CertificateImg/>
      <CertificateGallery/>
    </div>
  )
}

export default Certifications
