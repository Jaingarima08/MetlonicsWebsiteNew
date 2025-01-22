import React from 'react'
import InfrastructureSection from '../containers/InfrastructureSection/InfrastructureSection'
import Capabilities from '../containers/InfrastructureSection/Capabilities'

const Infrastructure = () => {
  return (
    <div className='mt-24'>
      <InfrastructureSection/>
      <Capabilities/>
    </div>
  )
}

export default Infrastructure