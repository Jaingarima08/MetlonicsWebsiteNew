import React, {useState} from 'react'
import FinalMachiningShopimg from '../../../assets/images/Final_MachiningA1.jpg'

const FinalMachiningShop = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8">

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start"> 
        <img
          src={FinalMachiningShopimg}
          alt="FinalMachiningShop"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>

       {/* Text Section */}
       <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Final Machining Shop</h2>
        <p className="text-gray-600">
        The final machining process ensures all components meet dimensional tolerances and surface finish requirements.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Precision Finishing")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Precision Finishing</span>
              <span>{openSection === "Precision Finishing" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Precision Finishing" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              The final machining shop ensures components meet exact dimensional tolerances and surface finish requirements, providing the highest level of precision.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Customization")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Customization</span>
              <span>{openSection === "Customization" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Customization" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              This stage allows for the customization of parts to specific requirements, ensuring compatibility with complex assemblies and specialized applications.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Quality Assurance")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Quality Assurance</span>
              <span>{openSection === "Quality Assurance" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Quality Assurance" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Final machining incorporates rigorous quality checks, ensuring that each part adheres to the desired specifications before leaving the shop floor.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalMachiningShop
