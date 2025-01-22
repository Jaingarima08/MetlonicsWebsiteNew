import React, {useState} from 'react'
import PlasmaCuttingimg from '../../../assets/images/plasma-cutting'

const PlasmaCutting = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8">

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={PlasmaCuttingimg}
          alt="PlasmaCutting"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>

       {/* Text Section */}
       <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Plasma Cutting</h2>
        <p className="text-gray-600">
        Plasma cutting employs an accelerated jet of hot plasma to cut conductive materials like steel and aluminum.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Versatility")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Versatility</span>
              <span>{openSection === "Versatility" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Versatility" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Plasma cutting is versatile and can cut through a wide range of conductive materials, including steel, aluminum, and copper, regardless of thickness.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Speed")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Speed</span>
              <span>{openSection === "Speed" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Speed" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Plasma cutting is faster than many traditional cutting methods, making it ideal for projects where time efficiency is critical.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Cost-Effectiveness")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Cost-Effectiveness</span>
              <span>{openSection === "Cost-Effectiveness" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Cost-Effectiveness" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Compared to other cutting techniques, plasma cutting is more economical, especially for thicker materials, while still maintaining quality and precision.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlasmaCutting
