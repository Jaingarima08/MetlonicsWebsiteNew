import React, {useState} from 'react'
import LaserCuttingimg from '../../../assets/images/laser_cuttingA1.jpg'

const LaserCutting = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:py-10 space-y-6 md:space-y-0 md:space-x-8 bg-gray-50">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Laser Cutting</h2>
        <p className="text-gray-600">
        Laser cutting uses a focused laser beam to cut or engrave materials. It's ideal for achieving intricate designs and high accuracy.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Precision")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Precision</span>
              <span>{openSection === "Precision" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Precision" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Laser cutting offers unparalleled precision by using a focused laser beam to cut materials. This allows for intricate designs and fine details, making it ideal for high-accuracy projects.
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
              Laser cutting is highly efficient, offering faster processing speeds compared to traditional methods. This efficiency reduces production time and minimizes material waste.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Accuracy")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Accuracy</span>
              <span>{openSection === "Accuracy" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Accuracy" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              The high accuracy of laser cutting ensures consistent results, with minimal deviations in dimensions. This is crucial for projects requiring tight tolerances and exact specifications.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={LaserCuttingimg}
          alt="LaserCutting"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>
    </div>
  );
}

export default LaserCutting
