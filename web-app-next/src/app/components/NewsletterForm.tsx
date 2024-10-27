"use client";
import React, { useState } from "react";
import axios from "axios";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });

  const apiUrl = "http://localhost:3000"; // Replace with actual API URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" });

    if (!email) {
      setAlert({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/newsletter/subscribe`, { email });
      setAlert({ type: "success", message: response.data.message || "You have successfully subscribed!" });
      setEmail("");
    } catch (error) {
      setAlert({ type: "error", message: "Failed to subscribe. Please try again later." });
    }
  };

  return (
    <section className="py-10 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mt-2">Stay updated with our latest news and health tips.</p>
        </div>
        <div className="max-w-lg mx-auto">
          {alert.message && (
            <div className={`p-4 rounded-md mb-6 ${alert.type === "error" ? "bg-red-500" : "bg-green-500"}`}>
              {alert.message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;