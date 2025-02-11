"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="main-header-area py-4 px-6 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <Image
                src="/assets/img/logo/header_logo_one.svg"
                alt="Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <div className="group relative">
              <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
                Services
              </span>
              <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Ushering
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Model Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Event Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Photography
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Contact Us
            </Link>

            {/* Hamburger Icon */}
            <button
              onClick={toggleMobileMenu}
              className="block lg:hidden text-gray-700"
              aria-label="Toggle Mobile Menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu bg-white shadow-md p-4 lg:hidden">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="block text-gray-700 hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <span className="block text-gray-700">Services</span>
              <ul className="ml-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-blue-500"
                  >
                    Ushering
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-blue-500"
                  >
                    Model Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-blue-500"
                  >
                    Event Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-gray-700 hover:text-blue-500"
                  >
                    Photography
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
