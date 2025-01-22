import React, {useState} from 'react'
import ShopFloorimg from '../../../assets/images/Shop_FloorA1.jpg'

const ShopFloor = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:py-10 space-y-6 md:space-y-0 md:space-x-8 bg-gray-50">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Shop Floor</h2>
        <p className="text-gray-600">
        The shop floor is the central area where all manufacturing processes are carried out efficiently and systematically.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Centralized Operations")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Centralized Operations</span>
              <span>{openSection === "Centralized Operations" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Centralized Operations" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              The shop floor serves as the hub for all manufacturing activities, where raw materials are transformed into finished products through various processes and equipment.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Streamlined Workflow")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Streamlined Workflow</span>
              <span>{openSection === "Streamlined Workflow" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Streamlined Workflow" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Efficient layout and organization on the shop floor optimize the workflow, reducing production time and minimizing delays between operations.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Monitoring and Control")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Monitoring and Control</span>
              <span>{openSection === "Monitoring and Control" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Monitoring and Control" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              The shop floor is equipped with systems for real-time monitoring and control, ensuring smooth operations, quality assurance, and adherence to production schedules.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={ShopFloorimg}
          alt="ShopFloor"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>
    </div>
  );
}

export default ShopFloor