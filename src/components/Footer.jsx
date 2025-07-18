
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-300 text-[#000]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">K</span>
              </div>
              <span className="text-xl font-bold">KMRU</span>
            </div>
            <p className="text-[#000] mb-4">
              Leading provider of innovative fertilizers and pesticides for sustainable agriculture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#000] hover:text-green-400 transition-colors">
               
                <Facebook/>
              </a>
              <a href="#" className="text-[#000] hover:text-green-400 transition-colors">
                <Twitter/>
              </a>
              <a href="#" className="text-[#000] hover:text-green-400 transition-colors">
                <Instagram/>
              </a>
               <a href="#" className="text-[#000] hover:text-green-400 transition-colors">
                <Linkedin/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#000] hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#000] hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#000] hover:text-green-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-[#000] hover:text-green-400 transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#000] hover:text-green-400 transition-colors">
                  Fertilizer Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-[#000] hover:text-green-400 transition-colors">
                  Pest Control
                </a>
              </li>
              <li>
                <a href="#" className="text-[#000] hover:text-green-400 transition-colors">
                  Soil Testing
                </a>
              </li>
              <li>
                <a href="#" className="text-[#000] hover:text-green-400 transition-colors">
                  Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-[#000]">
                <span className="inline-block w-5 text-green-400">📧</span>
                info@kmrufertilizersandpesticides.in
              </p>
              <p className="text-[#000]">
                <span className="inline-block w-5 text-green-400">📞</span>
                +91 9951309398
              </p>
              <p className="text-[#000]">
                <span className="inline-block w-5 text-green-400">📍</span>
                1-11-251/11, RKP MANSION, BEGUMPET CIRCLE 26, Begumpet, Secunderabad, Hyderabad-500016, Telangana
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-[#000]">
            © 2025 KMRU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
