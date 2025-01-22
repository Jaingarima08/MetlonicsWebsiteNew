/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickLinks = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-6 sm:mt-6 md:mt-0">
  <h2 className="text-lg sm:text-xl font-bold text-white">Useful Links</h2>
  <nav className="mt-3">
    <ul className="list-disc list-inside text-xs sm:text-base">
      <li className="mt-1 ">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="hover:text-[#EA5256]"
        >
          Home
        </a>
      </li>
      <li className="mt-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/about');
          }}
          className="hover:text-[#EA5256]"
        >
          About us
        </a>
      </li>
      
      <li className="mt-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/infrastructure');
          }}
          className="hover:text-[#EA5256]"
        >
          Infrastructure
        </a>
      </li>
      <li className="mt-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/contact');
          }}
          className="hover:text-[#EA5256]"
        >
          Contact us
        </a>
      </li>
      <li className="mt-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/products');
          }}
          className="hover:text-[#EA5256]"
        >
          Products
        </a>
      </li>
      <li className="mt-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/certifications');
          }}
          className="hover:text-[#EA5256]"
        >
          Certifications
        </a>
      </li>
    </ul>
  </nav>
</div>

  );
};

export default QuickLinks;
