import React, {useState} from 'react'
import Fabricationimg from '../../../assets/images/FabricationA1.jpg'

const Fabrication = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:py-10 space-y-6 md:space-y-0 md:space-x-8 bg-gray-50">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Fabrication</h2>
        <p className="text-gray-600">
        Fabrication combines processes like cutting, bending, and welding to create structures or parts.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Material Shaping")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Material Shaping</span>
              <span>{openSection === "Material Shaping" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Material Shaping" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Fabrication involves cutting, bending, and forming raw materials into desired shapes, creating the foundational structures for various applications.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Assembly")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Assembly</span>
              <span>{openSection === "Assembly" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Assembly" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Individual components are welded or fastened together during fabrication to build complete assemblies or subassemblies with precision and strength.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Custom Solutions")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Custom Solutions</span>
              <span>{openSection === "Custom Solutions" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Custom Solutions" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Fabrication allows for tailored designs and structures, meeting specific project requirements and accommodating unique industrial needs. 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={Fabricationimg}
          alt="Fabrication"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>
    </div>
  );
}

export default Fabrication