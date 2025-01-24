import React, { useState } from "react";
import WeldingCertificate from '../../assets/images/Certificates/EN_15085_CL1_277_14_4_2027.jpg';
import IRIS_Certificate from '../../assets/images/Certificates/IRIS-Certificate.jpg';
import bsi_OHS_Certificate from '../../assets/images/Certificates/ISO_45001_2018.jpg';
import ISO_TUV_Certificate from '../../assets/images/Certificates/ISO-9001-2015-Unit-2-(TUV).jpg';
import ISO_NABCB_Certificate from '../../assets/images/Certificates/ISO-9001-2015-Unit-2-(NABCB).jpg';
import bsi_EMS_Certificate from '../../assets/images/Certificates/ISO-14001-2015.jpg';
import PressureEquipment_Certificate from '../../assets/images/Certificates/TN-PED-3-1-5004-23-DIN-EN-ISO-3834.jpg';
import TestWelders_Certificate from '../../assets/images/Certificates/PED-Module-A2-Certificate-Metlonics.jpg';

const certificates = [
  { id: 1, name: "EN 15085 CL1 Welding Certificate", issuer: "TÜV Rheinland", date: "Issued: June 2024", image: WeldingCertificate, details: "This certificate ensures compliance with EN 15085 CL1 standards for railway welding applications." },
  { id: 2, name: "IRIS Certification", issuer: "International Railway Industry Standard", date: "Issued: September 2022", image: IRIS_Certificate, details: "IRIS certification confirms compliance with quality standards for railway equipment manufacturing." },
  { id: 3, name: "ISO 45001:2018 (Occupational Health & Safety)", issuer: "BSI Group", date: "Issued: June 2022", image: bsi_OHS_Certificate, details: "This certificate confirms that our company meets the ISO 45001:2018 standard for workplace health and safety." },
  { id: 4, name: "ISO 9001:2015 (Quality Management - TÜV)", issuer: "TÜV Rheinland", date: "Issued: May 2024", image: ISO_TUV_Certificate, details: "This certification ensures that our quality management system meets international standards." },
  { id: 5, name: "ISO 9001:2015 (Quality Management - NABCB)", issuer: "NABCB (National Accreditation Board for Certification Bodies)", date: "Issued: 2022", image: ISO_NABCB_Certificate, details: "This certification confirms compliance with ISO 9001:2015 quality management system standards." },
  { id: 6, name: "ISO 14001:2015 (Environmental Management System)", issuer: "BSI Group", date: "Issued: June 2022", image: bsi_EMS_Certificate, details: "This certification ensures compliance with environmental management standards." },
  { id: 7, name: "Pressure Equipment Directive (PED) Certification", issuer: "DIN EN ISO 3834", date: "Issued: Feb 2024", image: PressureEquipment_Certificate, details: "This certificate confirms compliance with the Pressure Equipment Directive for welding processes." },
  { id: 8, name: "Certified Welders (PED Module A2)", issuer: "Metlonics", date: "Issued: 2023", image: TestWelders_Certificate, details: "This certificate confirms the qualification of welders under PED Module A2 for pressure equipment." }
];

const CertificateGallery = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="bg-gray-100">
    <div className="container mx-auto px-4 md:px-12 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-center">
         Our Certifications
      </h1>

      {/* Grid Layout for Certificates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 hover:shadow-xl transition-all duration-300">
            {/* Click Image to Open Fullscreen */}
            <img 
              src={certificate.image} 
              alt={certificate.name} 
              className="w-full h-40 object-cover rounded-md cursor-pointer" 
              onClick={() => setFullscreenImage(certificate.image)} 
            />

            {/* Certificate Name */}
            <h2 className="text-lg font-semibold text-gray-900 mt-4">{certificate.name}</h2>

            {/* Issuer & Date */}
            <p className="text-gray-600 text-sm mt-1">{certificate.issuer}</p>
            <p className="text-gray-500 text-xs">{certificate.date}</p>

            {/* Show Details Button */}
            <button 
              className="mt-4 text-blue-500 text-sm underline focus:outline-none" 
              onClick={() => setSelectedId(selectedId === certificate.id ? null : certificate.id)}
            >
              {selectedId === certificate.id ? "Hide Details ▲" : "Show Details ▼"}
            </button>

            {/* Expandable Details */}
            {selectedId === certificate.id && (
              <div className="mt-4 text-gray-700 text-sm border-t pt-3 bg-gray-100 p-2 rounded-md">
                {certificate.details}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white p-3 rounded-lg shadow-lg max-w-3xl">
            <img src={fullscreenImage} alt="Certificate Preview" className="w-full h-auto max-h-[80vh] object-contain rounded-md" />
            <button 
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-lg focus:outline-none"
              onClick={() => setFullscreenImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CertificateGallery;
