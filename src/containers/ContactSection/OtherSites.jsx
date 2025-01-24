import React, {useState} from 'react'

const locations = [
  {
    id: 1,
    name: "Metlonics - USA",
    country: "USA & Canada",
    Phone: "USA : +1 (321) 3397404",
    Phone1: "CANADA : +1 (514) 2963919",
    Email: "Email : pierre@metlonics.com",     
    details: "Pierre St Onge - Sales, Marketing & Operations, Address: Unit 204, 1819 Riverview Drive, Melbourne, Florida, USA 32901"
  },
  {
    id: 2,
    name: "Metlonics - Technical & Sales Support",
    country: "USA",
    Phone: "USA : +1 (518) 488 0255",
    Email: "Email : ray@metlonics.com",
    details: "Raymond Farrara - Technical & Sales Support"
  },
  {
    id: 3,
    name: "Metlonics - Sales Europe",
    country: "Luxembourg",
    Phone: "EU : (352) 621741 850",
    Email: "Email : steve@metlonics.com",
    details: "Steve Van Wynendaele - Sales Europe"
  },
  {
    id: 4,
    name: "Metlonics - Costing & Supplier Development",
    country: "India",
    Phone: "IN : (+91) 9878690330",
    WhatsApp: "NZ :  (+64) 21915421",
    Email: "Email : sandeep@metlonics.com",
    details: "Sandeep Singh - Costing & Supplier Development"
  }
];

const OtherSites = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className='bg-gray-100'>
    <div className="container mx-auto px-4 md:px-12 py-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">Site Under Maintenance / Updation</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <div
            key={location.id}
            className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setExpandedId(expandedId === location.id ? null : location.id)}
          >
            {/* Location Name */}
            <h2 className="text-lg font-semibold text-gray-900">{location.name}</h2>

            {/* Country & Code */}
            <p className="text-gray-600 text-sm mt-1">
              {location.country} 
            </p>

            {/* Expandable Details */}
            {expandedId === location.id && (
              <div className="mt-4 flex flex-col text-gray-700 text-sm border-t pt-3">
                <p>{location.Phone}</p>
                <p>{location.Phone1}</p>
                <p>{location.WhatsApp}</p>
                <p>{location.Email}</p>
                <p>{location.details}</p>
              </div>
            )}

            {/* Expand/Collapse Indicator */}
            <p className="text-blue-500 text-sm mt-3">{expandedId === location.id ? "Hide Details ▲" : "Show Details ▼"}</p>
          </div>
        ))}
      </div> 
    </div>
    </div>
  )
}

export default OtherSites






 