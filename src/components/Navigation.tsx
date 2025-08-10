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
      <ul className="flex items-center justify-center md:items-end md:justify-end space-x-6 text-sm font-medium pt-2 font-serif">
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

    </div>
  );
}