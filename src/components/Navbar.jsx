import React from "react";
import { Link, Links } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link to="/">
            <img
              src="/logo.jpeg"
              alt="Fertilizers and Pesticides Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md border-2 border-white"
            />
          </Link>
          <span className="text-xl sm:text-2xl font-bold text-white tracking-wide whitespace-nowrap">
            Fertilizers & Pesticides
          </span>
        </div>


        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-lg">
          <li>
            <Link to="/" className="hover:text-green-100 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-100 transition">About</Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-green-100 transition">Features</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-green-100 transition">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-100 transition">Contact</Link>
          </li>
        </ul>

        {/* Optional Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* Add hamburger icon/menu toggle here if needed */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
