import React, {useState} from 'react'
import PowderLiquidPaintShopimg from '../../../assets/images/Paint_BoothA1.jpg'

const PowderLiquidPaintShop = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:py-10 space-y-6 md:space-y-0 md:space-x-8 bg-gray-50">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Powder/Liquid Paint Shop</h2>
        <p className="text-gray-600">
        This ensures a smooth, durable finish and protects metal surfaces from corrosion.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Surface Protection")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Surface Protection</span>
              <span>{openSection === "Surface Protection" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Surface Protection" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              Powder and liquid paints create a protective layer on metal surfaces, shielding them from corrosion, wear, and environmental damage.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection(" Aesthetic Appeal")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span> Aesthetic Appeal</span>
              <span>{openSection === " Aesthetic Appeal" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === " Aesthetic Appeal" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
              These paint finishes provide a smooth, uniform, and visually appealing coating available in a variety of colors and textures.
              </div>
            </div>
          </div>

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
              The high-quality coatings ensure long-lasting performance, maintaining the structural and visual integrity of the components under demanding conditions.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={PowderLiquidPaintShopimg}
          alt="PowderLiquidPaintShop"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>
    </div>
  );
}

export default PowderLiquidPaintShop
