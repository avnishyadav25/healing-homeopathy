"use client";
import React, { useState } from "react";
import axios from "axios";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [alert, setAlert] = useState({ type: '', message: '' });

  const apiUrl = 'http://localhost:3000'; // Replace with actual API URL

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert({ type: '', message: '' });

    try {
      const response = await axios.post(`${apiUrl}/contact/contact-us`, formData);
      setAlert({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setAlert({ type: 'error', message: 'Failed to send your message. Please try again later.' });
    }
  };

  return (
    <section className="py-12 bg-gray-900 text-white">
      {/* Add Header */}
      <div className="container mx-auto px-4 mb-10">
        <h1 className="text-5xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-lg text-center mb-8">
          We're here to help! Feel free to get in touch with us through the form below, or visit us at our location.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1 bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            {alert.message && (
              <div className={`p-4 rounded-md mb-6 ${alert.type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
                {alert.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold">Phone</label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Maps */}
          <div className="flex-1 bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Our Location</h2>
            <p className="mb-4">
              123 Wellness Lane, Health City
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609953785!2d72.74110177674371!3d19.08252231746409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cefa13a99d27%3A0x6bbd91a4fd79a5eb!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1625674826794!5m2!1sen!2sus"
              width="100%"
              height="300"
              className="rounded-md shadow-md"
              loading="lazy"
              title="Google Map Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
