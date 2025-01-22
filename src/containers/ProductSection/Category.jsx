import React, { useState } from "react";

const categories = [
  { 
    name: "Railway", 
    count: 12, 
    subcategories: ["FULLY ASSEMBLED BOGIE", "BOGIE FRAME", "LOCOMOTIVE BOGIE FRAME", "HEAD STOCK", "END UNDER FRAME", "TRACTION TRANSFORMER TANK", "BOLSTER", "AIR TOWER", "BREAK BEAM", "HOUSING COUPLING", "LIFTING BEAM", "RESERVOIR"] 
  },
  { name: "Defence", count: 1, subcategories: ["Armoured Vechicle Shell"] },
  { name: "Mining", count: 2, subcategories: ["Cobra 230", "Chassis"] },
  { name: "LCV", count: 10, subcategories: ["FORK ASSEMBLY", "LID ROOF VENTILATOR", "BRACKET MASTER CYCLINDER", "DUST SHIIELD COVER", "ROCKER ARM COVER", "MOUNTING BRACKET", "RECLINER SIDE MOUNTING", "OIL PAN", "HOOK SAFTY ASSEMBLY", "CONNECTING LEVER"] },
  { name: "Tractor", count: 7, subcategories: ["SIDE PANNEL", "PADDLE SET", "FRONT AXLE BRACKET", "FRONT GRILL", "DASH BOARD ASSEMBLY", "TOP BONNET ASSEMBLY", "AIR CLEANER ASSEMBLY"] },
  { name: "Towing", count: 6, subcategories: ["CASING", "TOW ASSEMBLY", "MOUNTING ASSEMBLY", "TOW MOUNT", "TOW MOUNT(1)", "SUPPORT"] },
  { name: "Others", count: 3, subcategories: ["DIAPHRAM", "DIAPHRAM(1)", "FIRE EXTINGUISHER SHELL"] },
];

const Category = ({ onSelectCategory, onSelectSubcategory }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <>
      <h2 className="text-lg font-semibold text-gray-700">Filter by</h2>

      {/* View All Button */}
      <div
        className="text-center text-blue-500 font-semibold cursor-pointer py-2 bg-gray-100 rounded-lg my-2 hover:bg-gray-200 transition"
        onClick={() => {
          onSelectCategory(null);
          onSelectSubcategory(null);
        }}
      >
        View All
      </div>

      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="font-semibold">
            {/* Category Name */}
            <div
              className="flex justify-between items-center cursor-pointer p-3 text-[#EA5256] bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              onClick={() => onSelectCategory(category.name)}
            >
              <span>{category.name} ({category.count})</span>
              <span
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(index);
                }}
              >
                {openCategory === index ? "▲" : "▼"}
              </span>
            </div>

            {/* Subcategories Dropdown */}
            {openCategory === index && (
              <ul className="ml-2 mt-2 space-y-1 bg-gray-50 p-2 rounded-lg">
                {category.subcategories.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-gray-700 cursor-pointer hover:text-blue-500 text-sm"
                    onClick={() => onSelectSubcategory(sub)}
                  >
                    - {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
