import React, {useState} from 'react'
import StressRelievingFurnacesimg from '../../../assets/images/Stress_RelievingA1.jpg'

const StressRelievingFurnaces = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:py-10 space-y-6 md:space-y-0 md:space-x-8 bg-gray-50">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Stress Relieving Furnaces</h2>
        <p className="text-gray-600">
        These furnaces reduce residual stresses in metal components to improve structural integrity and durability.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Durability")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Durability</span>
              <span>{openSection === "Durability" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Durability" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Stress relieving furnaces improve the durability of metal components by reducing internal stresses, which can lead to cracks or deformations during usage.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Uniformity")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Uniformity</span>
              <span>{openSection === "Uniformity" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Uniformity" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              These furnaces provide uniform heat treatment, ensuring that all parts of the component are evenly relieved of stress, maintaining structural consistency.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Efficiency")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Efficiency</span>
              <span>{openSection === "Efficiency" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Efficiency" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Designed for optimal performance, stress relieving furnaces reduce processing time and energy consumption while delivering reliable results for large-scale operations.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={StressRelievingFurnacesimg}
          alt="StressRelievingFurnaces"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>
    </div>
  );
}

export default StressRelievingFurnaces
