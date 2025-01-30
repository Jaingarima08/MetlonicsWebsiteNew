import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import WorldMap from "../../assets/images/locationMap"; // Update with correct path

const locations = [
  {
    id: 1, name: "Metlonics - USA", country: "USA & Canada", code: "USCA001",
    position: { desktop: { top: "34%", left: "12.6%" }, mobile: { top: "29.5%", left: "6.2%" } },
    details: "Country: USA, State: Florida, City: Melbourne, ZIP Code: 32901"
  },
  // {
  //   id: 5, name: "Metlonics Industries Pvt. Ltd.", country: "India", code: "IN002",
  //   position: { desktop: { top: "33.4%", left: "57.5%" }, mobile: { top: "28.5%", left: "39.8%" } },
  //   details: "Company: Metlonics Industries Pvt. Ltd., Country: India, State: Punjab, City: Mohali, Area: Industrial Area Phase VII, PIN Code: 160055"
  // },
  {
    id: 6, name: "Metlonics Kurali India", country: "India", code: "IN003",
    position: { desktop: { top: "33%", left: "60.3%" }, mobile: { top: "29%", left: "46%" } },
    details: "Address: Jhingran Road, Village Chanalon, Kurali, Punjab, India, PIN Code: 140103"
  }
];

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        🌍 Our Global Locations
      </h1>

      {/* World Map */}
      <div className="relative w-full max-w-5xl h-full md:h-[500px]">
        <img src={WorldMap} alt="World Map" className="w-full h-full object-contain md:object-cover" />

        {/* Location Markers */}
        {locations.map((location) => (
          <div
            key={location.id}
            className={`absolute flex flex-col items-center text-xs md:text-sm font-semibold cursor-pointer transition-all duration-300 ${
              selectedLocation?.id === location.id ? "text-red-600 font-bold scale-105" : "text-gray-700 hover:text-red-500"
            }`}
            style={{
              top: isMobile ? location.position.mobile.top : location.position.desktop.top,
              left: isMobile ? location.position.mobile.left : location.position.desktop.left,
              
            }}
            onClick={() => setSelectedLocation(location)}
          >
            <FaLocationDot className="text-xs md:text-xl " />
            <span className="mt-1 text-xs md:text-sm bg-white shadow-md rounded-md px-2 py-1 text-center">{location.name}</span>
          </div>
        ))}
      </div>

      {/* Location Details Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 animate-fadeIn">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">{selectedLocation.name}</h2>
            <p className="mt-2 text-gray-700 text-sm sm:text-base">{selectedLocation.details}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all duration-300 w-full"
              onClick={() => setSelectedLocation(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
