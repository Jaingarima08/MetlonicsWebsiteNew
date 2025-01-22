import React, {useState} from 'react'
import ShotBlastingandChemicalTreatmentShopimg from '../../../assets/images/Shot_BlastingA1.jpg'

const ShotBlastingandChemicalTreatmentShop = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8">

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start"> 
        <img
          src={ShotBlastingandChemicalTreatmentShopimg}
          alt="ShotBlastingandChemicalTreatmentShop"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>

       {/* Text Section */}
       <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Shot Blasting and Chemical Treatment Shop</h2>
        <p className="text-gray-600">
        Shot blasting cleans and prepares surfaces, while chemical treatments enhance corrosion resistance and finish.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Surface Preparation")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Surface Preparation</span>
              <span>{openSection === "Surface Preparation" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Surface Preparation" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Shot blasting effectively cleans and prepares metal surfaces by removing rust, scale, and impurities, creating an ideal surface for coatings or further treatments.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Corrosion Resistance")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Corrosion Resistance</span>
              <span>{openSection === "Corrosion Resistance" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Corrosion Resistance" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Chemical treatments enhance corrosion resistance by applying protective layers or passivating the metal surface, ensuring long-term durability.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Finish Quality")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Finish Quality</span>
              <span>{openSection === "Finish Quality" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Finish Quality" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              The combined processes provide a smooth, uniform finish, improving the aesthetic and functional quality of metal components for industrial and commercial use.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShotBlastingandChemicalTreatmentShop