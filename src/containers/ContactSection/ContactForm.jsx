import React, { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    designation: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 sm:px-8 md:px-16 py-12 bg-gray-100">
      {/* Contact Form */}
      <div className=" bg-gray-400 shadow-lg p-6 md:p-8 rounded-lg text-white w-full md:w-2/3 md:mx-4">
        <h2 className="text-2xl font-semibold mb-6 text-left">
          Let's Work Together
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border  rounded-md  "
              required
            />
          </div>

          {/* Company */}
          <div>
            <label className="block font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border  rounded-md "
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-medium">Phone No.</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border  rounded-md "
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border  rounded-md "
              required
            />
          </div>

          {/* Designation */}
          <div className="md:col-span-2">
            <label className="block font-medium">Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full px-4 py-2 border  rounded-md "
              required
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border  rounded-md "
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-start">
            <button
              type="submit"
              className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div className=" bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3 h-full md:mx-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-left md:text-left">
          Contact Information
        </h2>
        <div className="text-gray-600 space-y-4">
          <a
            href="mailto:info@metlonics.com"
            className="flex items-center space-x-2 hover:text-blue-500"
          >
            <FaEnvelope className="text-lg" />
            <span>info@metlonics.com</span>
          </a>

          <a
            href="https://www.linkedin.com/company/metlonics-industries-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-500"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
