"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";

const Footer = () => {
  return (
    <section className="relative bg-white text-black py-12">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center lg:text-left">
          {/* Logo and Newsletter */}
          <div className="space-y-4">
            <Image
              src={logo}
              alt="Healing Homoeopathy Logo"
              width={157}
              height={50}
              className="mx-auto lg:mx-0"
            />
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-600">
              Subscribe to our newsletter for updates and wellness tips.
            </p>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md bg-gray-100 text-black border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-lg font-semibold">Sitemap</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600 hover:text-black">
                  Services
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-gray-600 hover:text-black">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-black">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="text-gray-600 hover:text-black">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-black">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a href="/careers" className="text-gray-600 hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="/volunteer" className="text-gray-600 hover:text-black">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="/donate" className="text-gray-600 hover:text-black">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-600">Email: info@healinghomoeopathy.com</p>
            <p className="text-gray-600">Phone: +123 456 7890</p>
            <p className="text-gray-600">Address: 123 Wellness Lane, Health City</p>
            <div className="flex space-x-2 mt-4 justify-center lg:justify-start">
              <a href="https://facebook.com" className="text-gray-600 hover:text-black">
                <svg width="24" height="24" fill="currentColor" className="text-black">
                  {/* Facebook Icon */}
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-black">
                <svg width="24" height="24" fill="currentColor" className="text-black">
                  {/* Twitter Icon */}
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-black">
                <svg width="24" height="24" fill="currentColor" className="text-black">
                  {/* LinkedIn Icon */}
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-6 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()}{" "}
            <a href="/" className="text-black hover:underline">
              Healing Homoeopathy
            </a>. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
