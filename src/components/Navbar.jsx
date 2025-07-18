import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link to="/">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md border-2 border-white"
            />
          </Link>
          <span className="text-xl sm:text-2xl font-bold tracking-wide">
            Fertilizers & Pesticides
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-medium text-lg">
          <li><Link to="/" className="hover:text-green-100 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-100 transition">About</Link></li>
          <li><Link to="/features" className="hover:text-green-100 transition">Features</Link></li>
          <li><Link to="/services" className="hover:text-green-100 transition">Services</Link></li>
          <li><Link to="/contact" className="hover:text-green-100 transition">Contact</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-[#000]" /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] sm:w-[40%] bg-green-100 shadow-lg z-40 transform block lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col px-6 pt-20 pb-10 space-y-6 text-lg font-medium text-gray-800">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-600">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-green-600">About</Link>
          <Link to="/features" onClick={() => setIsOpen(false)} className="hover:text-green-600">Features</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-green-600">Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-600">Contact</Link>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
