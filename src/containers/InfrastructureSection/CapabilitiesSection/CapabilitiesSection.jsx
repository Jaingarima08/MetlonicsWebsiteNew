import React from 'react'
import LaserCutting from './LaserCutting'
import PlasmaCutting from './PlasmaCutting'
import CNCPressBrake from './CNCPressBrake'
import RoboticWelding from './RoboticWelding'
import StressRelievingFurnaces from './StressRelievingFurnaces'
import ShotBlastingandChemicalTreatmentShop from './ShotBlastingandChemicalTreatmentShop'
import PowderLiquidPaintShop from './PowderLiquidPaintShop'
import InspectionFacility from './InspectionFacility'
import ShopFloor from './ShopFloor'
import FinalMachiningShop from './FinalMachiningShop'
import Fabrication from './Fabrication'

const CapabilitiesSection = () => {
  return (
    <>
      <div>
        <LaserCutting/>
        <PlasmaCutting/>
        <CNCPressBrake/>
        <RoboticWelding/>
        <StressRelievingFurnaces/>
        <ShotBlastingandChemicalTreatmentShop/>
        <PowderLiquidPaintShop/>
        <InspectionFacility/>
        <ShopFloor/>
        <FinalMachiningShop/>
        <Fabrication/>
      </div>
    </>
  )
}

export default CapabilitiesSection
