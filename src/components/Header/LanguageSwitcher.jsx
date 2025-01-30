import React, { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const languages = [
    { code: "en", label: "ENG" },
    { code: "fr", label: "FRA" },
    { code: "de", label: "DEU" },
  ];

  const selectLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem("i18nextLng", languageCode); // Save language
    setDropdownOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage); // Set saved language
    }
  }, [i18n]);

  return (
    <div className="relative inline-block text-left">
      <button
        className="flex items-center px-3 py-2 bg-[#505051] text-white focus:outline-none hover:bg-[#ff564c]"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <FaGlobe className="text-white" />
        <span className="ml-2">{i18n.language.toUpperCase()}</span>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 rounded"
              onClick={() => selectLanguage(lang.code)}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
