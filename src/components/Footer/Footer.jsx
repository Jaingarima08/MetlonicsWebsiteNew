/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import BackToTop from "./BackToTop";
import QuickLinks from "./QuickLinks";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#414042] text-white py-6 px-4 sm:px-8 lg:px-16 z-10 bottom-0 w-full">
      {/* Main Content */}
      <div className="flex flex-row md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {/* Logo and Email */}
        <div className="w-full md:w-1/3">
          <div className="flex-shrink-0 mb-4">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <p className="flex items-center text-xs sm:text-sm">
            <span className="mr-2">
              <FaEnvelope />
            </span>
            info@metlonics.com
          </p>
          {/* Quick Links (moved for mobile screens) */}
          <div className="block md:hidden mt-4">
            <QuickLinks />
          </div>
        </div>

        {/* Quick Links (visible for larger screens) */}
        <div className="hidden md:block w-full md:w-1/3">
          <QuickLinks />
        </div>

        {/* Connect with Us */}
        <div className="w-full md:w-1/3">
          <h2 className="text-lg sm:text-xl font-bold">Connect with Us</h2>
          <div className="mt-2 md:mt-4 ">
            <div>
              <h3 className="font-semibold text-sm sm:text-lg">Head Office</h3>
              <p className="flex items-start text-xs sm:text-sm ">
                <span className="mr-2">
                  <FaMapMarkerAlt />
                </span>
                Metlonics Industries Pvt. Ltd., <br />
                D-105, Industrial Area Phase VII, <br /> Mohali, Punjab, India
                160055
              </p>
            </div>
            <div>
              <h3 className="font-semibold mt-1 text-sm sm:text-lg">
                Work Office
              </h3>
              <p className="flex items-start text-xs sm:text-sm">
                <span className="mr-2">
                  <FaMapMarkerAlt />
                </span>
                Jhingran Road, Village Chanalon <br />
                Kurali, Punjab, India 140103
              </p>
            </div>
            <div>
              <h3 className="font-semibold mt-1 text-sm sm:text-lg">
                METLONICS LLC:
              </h3>
              <p className="flex items-start text-xs sm:text-sm">
                <span className="mr-2">
                  <FaMapMarkerAlt />
                </span>
                Unit 204, 1819 Riverview Drive <br />
                Melbourne, Florida, USA 32901
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white my-6" />

      {/* Footer Bottom */}
      <div className="flex flex-row md:flex-row items-center justify-between text-xs sm:text-sm">
        <div className="md:space-x-4 flex flex-col md:flex-row">
          <p className="text-center md:text-left">
            &copy; 2022 Metlonics. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-1 md:mt-0 items-center">
            <NavLink
              to="/terms-and-conditions"
              className="hover:text-[#EA5256]"
            >
              Terms & Conditions
            </NavLink>
            <NavLink to="/privacy-policy" className="hover:text-[#EA5256]">
              Privacy Policy
            </NavLink>
          </div>
        </div>
        <div className="mt-1 md:mt-0">
          <BackToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
