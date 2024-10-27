"use client";
import React, { useEffect, useState } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal"; // Assuming you have this component created
import Image from "next/image";
import axios from "axios";

const apiUrl = 'http://localhost:3000'; // Adjust to your backend's actual base URL

export function ServicesSection() {
  const [services, setServices] = useState([]);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${apiUrl}/services`); // Adjust to your actual API route
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services", error);
      }
    };
    fetchServices();
  }, []);

  // Format the services into content for StickyScroll
  const content = services.map((service) => ({
    title: service.title,
    description: service.description,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={service.image}
          width={500}
          height={500}
          className="h-full w-full object-cover rounded-lg"
          alt={service.title}
        />
      </div>
    ),
  }));

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Top Services</h2>
      <StickyScroll content={content} />
    </div>
  );
}
