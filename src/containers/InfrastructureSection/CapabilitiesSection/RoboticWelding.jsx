import React, {useState} from 'react'
import RoboticWeldingimg from '../../../assets/images/Robotic_WeldingA1.jpg'

const RoboticWelding = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8">

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start"> 
        <img
          src={RoboticWeldingimg}
          alt="RoboticWelding"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>

       {/* Text Section */}
       <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Robotic Welding</h2>
        <p className="text-gray-600">
        Robots perform precise and consistent welding tasks, improving efficiency and quality in fabrication.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Consistency")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Consistency</span>
              <span>{openSection === "Consistency" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Consistency" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Robotic welding ensures consistent, high-quality welds by eliminating human errors. It maintains uniformity in each weld, even in repetitive tasks.
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
              Robotic welding increases productivity by automating the welding process, reducing cycle times, and enabling round-the-clock operation.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Safety")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Safety</span>
              <span>{openSection === "Safety" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Safety" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              By automating welding tasks, robotic systems minimize human exposure to hazardous fumes, heat, and sparks, enhancing workplace safety.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoboticWelding
