"use client";
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [alert, setAlert] = useState({ type: '', message: '' });

  const apiUrl = 'http://localhost:3000'; // Adjust to your backend's actual base URL

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert({ type: '', message: '' });

    try {
      const response = await axios.post(`${apiUrl}/contact/contact-us`, formData);
      setAlert({ type: 'success', message: response.data.message || 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setAlert({ type: 'error', message: 'Failed to send your message. Please try again later.' });
    }
  };

  return (
    <div>
      {alert.message && (
        <div className={`text-${alert.type === 'success' ? 'green' : 'red'}-600 mb-4`}>
          {alert.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-bold">Name</label>
          <input
            id="name"
            type="text"
            className="border rounded-md p-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-bold">Email</label>
          <input
            id="email"
            type="email"
            className="border rounded-md p-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-bold">Phone Number</label>
          <input
            id="phone"
            type="text"
            className="border rounded-md p-2"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-bold">Message</label>
          <textarea
            id="message"
            className="border rounded-md p-2"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
