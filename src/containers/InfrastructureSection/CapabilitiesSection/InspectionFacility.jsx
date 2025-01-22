import React, {useState} from 'react'
import InspectionFacilityimg from '../../../assets/images/3D_InspectionA1.jpg'

const InspectionFacility = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8">

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start"> 
        <img
          src={InspectionFacilityimg}
          alt="InspectionFacility"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>

       {/* Text Section */}
       <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">3D inspection Facility</h2>
        <p className="text-gray-600">
        3D inspection ensures geometric accuracy by scanning components and comparing them to CAD models.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Precision Measurement")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Precision Measurement</span>
              <span>{openSection === "Precision Measurement" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Precision Measurement" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
             3D inspection uses advanced scanning technology and coordinate measuring machines (CMM) to achieve highly precise measurements of components, ensuring they meet exact specifications.
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
              This process validates the accuracy of manufactured parts by comparing them to CAD models, identifying deviations, and ensuring consistent quality.
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
              Automated 3D inspection speeds up the quality control process, reducing manual effort while providing detailed and reliable analysis of components.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InspectionFacility
