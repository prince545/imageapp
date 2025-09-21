import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", type: "route" },
    { name: "Pricing", href: "/pricing", type: "route" },
    { name: "Buy Credits", href: "/buy", type: "route" },
    { name: "Result", href: "/result", type: "route" },
  ];

  return (
    <nav className="glass rounded-3xl shadow-elegant mb-10 px-8 py-4 animate-fade-in">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <img
              src="/Logo.png"
              alt="Imagify Logo"
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Imagify
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="relative text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 group cursor-pointer"
            >
              <span className="relative z-10">{item.name}</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Sign Up Button */}
        <div className="hidden md:block">
          <Link
            to="/buy"
            className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <span className="relative z-10">Get Credits</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 animate-slide-up">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/buy"
            className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-lg text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Credits
          </Link>
        </div>
      )}
    </nav>
  );
}
