/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
// import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle
  const { t, i18n } = useTranslation(); // Translation hook

  // Ensure the language is set globally
  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng") || "en";
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu visibility
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About us" },
    { path: "/infrastructure", label: "Infrastructure" },
    { path: "/product", label: "Products" },
    { path: "/certifications", label: "Certifications" },
    { path: "/contact", label: "Contact us" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#414042]" : "bg-transparent"
        }`}
      >
        {/* Topbar */}
        <div className={`bg-[#414042] text-white ${scrolled ? "hidden" : "block"}`}>
          <div className="flex flex-row md:flex-row items-center justify-end gap-2 py-2 px-4 sm:px-8 lg:px-16">
            {/* Email Section */}
            <div className="text-sm">
              <a href="mailto:info@metlonics.com" className="flex items-center hover:text-[#ff564c]">
                <FaEnvelope className="text-md" /> {/* Icon for Email */}
                <span className="hidden md:inline ml-1">{t("info@metlonics.com")}</span>
              </a>
            </div>
            <div className="text-sm">
              <a
                href="https://www.linkedin.com/company/metlonics-industries-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#ff564c]"
              >
                <FaLinkedin className="text-md" />
                <span className="hidden md:inline ml-1">{t("Linkedin")}</span>
              </a>
            </div>
            {/* <div className="text-sm">
              <LanguageSwitcher /> 
            </div> */}
          </div>
        </div>

        {/* Menubar */}
        <div className={`bg-[#414042] duration-1000`}>
          <div className="flex justify-between items-center py-2 px-4 sm:px-8 lg:px-16">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Hamburger Icon for mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                {menuOpen ? <FaTimes /> : <FaBars className="text-white" />}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className={`hidden md:flex space-x-6`}>
              <div className="text-white text-lg font-medium flex space-x-1 items-center">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2"
                    to={link.path}
                  >
                    {t(link.label)}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-white shadow-md text-center py-4 px-4 sm:px-8 lg:px-16`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                className="block py-2 text-lg font-medium"
                to={link.path}
                onClick={() => setMenuOpen(false)}
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
