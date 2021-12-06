import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="flex justify-between items-center p-6  bg-white text-block shadow-lg font-sens bg-gradient-to-r from-[#a65fec]-700 to-purple  text-white  ">
      <Link to="/" className="text-2xl font-bold text-center sm-text-right ">
        {title} <i className={`${icon}`} />
      </Link>

      <div className="pr-8 md:block mt-1 text-xl font-bold text-gray-100 hidden sm:block  ">
        <Link
          className="p-4 hover:bg-purple-100 hover:bg-opacity-25 hover:round"
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-4 hover:bg-purple-100 hover:bg-opacity-25 "
          to="/about"
        >
          About
        </Link>
        <Link
          className="p-4 hover:bg-purple-100 hover:bg-opacity-25"
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <div className=" block sm:hidden ">
        <i class="fas fa-bars fa-lg"></i>
      </div>
    </nav>
  );
};

export default Navbar;
