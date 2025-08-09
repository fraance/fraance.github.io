"use client";

import { useState } from "react";

/**
 * Header navigation component matching the prototype design.
 * Includes Resume, About me (with portrait hover), and E-mail links.
 * Responsive with collapsible mobile menu.
 */
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-6 text-sm font-medium pt-2 font-serif">
        <li>
          <a 
            href="#" 
            className="group hover:text-white transition-colors duration-300"
          >
            <span className="group-hover:font-bold transition-all duration-300">
              Resume
            </span>
          </a>
        </li>
        <li>
          <a 
            href="#" 
            id="about-me-link"
            className="group hover:text-white transition-colors duration-300"
          >
            <span className="group-hover:font-bold transition-all duration-300">
              About me
            </span>
          </a>
        </li>
        <li>
          <a 
            href="#"
            className="group hover:text-white transition-colors duration-300 relative flex items-center"
          >
            <span className="absolute left-0 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
            <span className="transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:font-bold pl-1">
              E-mail
            </span>
          </a>
        </li>
      </ul>
      
      {/* Mobile menu button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden text-white p-2 transition-transform duration-200 hover:scale-110"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 relative">
          {/* Hamburger lines */}
          <span 
            className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-12 right-0 w-48 bg-black/90 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
      }`}>
        <ul className="py-4 px-2">
          <li>
            <a 
              href="#" 
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200 font-serif"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </li>
          <li>
            <a 
              href="#" 
              id="about-me-link-mobile"
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200 font-serif"
              onClick={() => setIsMenuOpen(false)}
            >
              About me
            </a>
          </li>
          <li>
            <a 
              href="#"
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200 font-serif"
              onClick={() => setIsMenuOpen(false)}
            >
              E-mail
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[-1]" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}