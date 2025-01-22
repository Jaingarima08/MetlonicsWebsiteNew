import { motion } from "framer-motion";

const journeyData = [
  { year: "1969", detail: "Foundation of Metlonics" },
  { year: "1975", detail: "Foundation of SEPSA in PINTO (SPAIN)" },
  { year: "1985", detail: "First sale of a PA System for Metro Madrid (SPAIN)" },
  { year: "1995", detail: "First sale of an auxiliary converter for Metro Madrid (SPAIN)" },
  { year: "2005", detail: "Expansion into global markets with innovative solutions" },
  { year: "2015", detail: "Introduction of cutting-edge technologies in rail systems" },
  { year: "2024", detail: "Revolutionized PA Systems with smart technology" },
];

const OurJourneyItem = ({ year, detail, position, className }) => (
  <motion.div
    className={`absolute flex flex-col group ${className}`}
    style={{
      top: position.top,
      left: position.left,
    }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    {/* Year */}
    <p className="absolute text-sm lg:text-lg font-semibold text-blue-700 bg-blue-200 px-2 py-1 rounded shadow-md -translate-y-4">
      {year}
    </p>

    {/* Detail (hidden by default, visible on hover) */}
    <p className="mt-2 text-xs md:text-base font-semibold text-gray-100 bg-blue-500 px-2 py-1 rounded shadow-md w-auto max-w-xs hidden group-hover:block translate-y-3">
      {detail}
    </p>
  </motion.div>
);

const OurJourney = () => {
  const positions = [
    { top: "450px", left: "3%" },
    { top: "400px", left: "15%" },
    { top: "350px", left: "27%" },
    { top: "300px", left: "38%" },
    { top: "250px", left: "51%" },
    { top: "200px", left: "62%" },
    { top: "150px", left: "74%" },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-24 py-6 md:py-8 bg-gray-200 my-8 h-[650px] relative items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h1>
      <div className="relative w-full min-h-screen">
        {/* Stairs with Connecting Lines */}
        {positions.map((_, index) => {
          if (index === 0) return null; // Skip the first position
          const prev = positions[index - 1];
          const curr = positions[index];

          return (
            <div key={index}>
              {/* Horizontal Line */}
              <div
                className="absolute h-[70px] w-[20px] bg-blue-500"
                style={{
                  top: prev.top,
                  left: prev.left,
                  width: `calc(${curr.left} - ${prev.left})`,
                }}
              ></div>
              {/* Vertical Line */}
              <div
                className="absolute w-[80px] bg-blue-500"
                style={{
                  top: curr.top,
                  left: curr.left,
                  height: `calc(${prev.top} - ${curr.top})`,
                }}
              ></div>
            </div>
          );
        })}

        {/* Journey Items */}
        {journeyData.map((item, index) => (
          index === 7 ? null : (
            <OurJourneyItem
              key={index}
              year={item.year}
              detail={item.detail}
              position={positions[index]}
              className="bg-gray-200"
            />
          )
        ))}
      </div>
    </div>
  );
};

export default OurJourney;
