"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-transparent border-b border-transparent backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Healing Homoeopathy"
              width={30}
              height={30}
              className="h-8 w-auto"
            />
            <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">
              {/* Healing Homoeopathy */}
            </span>
          </a>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden block text-gray-900 dark:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Close Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Hamburger Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex space-x-4">
            <a href="/about" className="text-sm text-gray-900 dark:text-white hover:text-indigo-600">
              About
            </a>
            <a href="/services" className="text-sm text-gray-900 dark:text-white hover:text-indigo-600">
              Services
            </a>
            <a href="/blog" className="text-sm text-gray-900 dark:text-white hover:text-indigo-600">
              Blog
            </a>
            <a href="/contact" className="text-sm text-gray-900 dark:text-white hover:text-indigo-600">
              Contact
            </a>
            <a href="/order-medicine" className="text-sm text-gray-900 dark:text-white hover:text-indigo-600">
              Order Medicine
            </a>
          </nav>

          {/* Right Side Options */}
          <div className="flex items-center space-x-2">
            {/* Book Appointment Link */}
            <a href="/book-appointment" className="text-sm text-indigo-600 hover:underline">
              Book Appointment
            </a>

            {/* Dark/Light Mode Toggle (As a Link) */}
            <a
              href="#"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-900 dark:text-white focus:outline-none hover:underline"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Sun Icon */}
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Moon Icon */}
                  <path d="M12 3.75a9.75 9.75 0 0 1 0 16.5A9.75 9.75 0 1 1 12 3.75z"></path>
                </svg>
              )}
            </a>

            {/* Login/Register */}
            <a href="/login" className="text-sm text-gray-900 dark:text-white hover:underline">
              Login / Register
            </a>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                className="w-28 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none text-sm"
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        {/* Full-Page Sliding Menu for Mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg transition-transform duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-40`}
        >
          <div className="p-6 flex flex-col h-full justify-center items-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-6 text-gray-900 dark:text-white"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Close Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Menu Links */}
            <nav className="space-y-6 text-xl">
              <a href="/about" className="block hover:text-indigo-600">
                About
              </a>
              <a href="/services" className="block hover:text-indigo-600">
                Services
              </a>
              <a href="/blog" className="block hover:text-indigo-600">
                Blog
              </a>
              <a href="/contact" className="block hover:text-indigo-600">
                Contact
              </a>
              <a href="/order-medicine" className="block hover:text-indigo-600">
                Order Medicine
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
