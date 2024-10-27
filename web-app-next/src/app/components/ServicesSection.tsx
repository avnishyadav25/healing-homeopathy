"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

const apiUrl = 'http://localhost:3000'; // Adjust to your backend's actual base URL

export function ServicesSection() {
  const [active, setActive] = useState(null);
  const [services, setServices] = useState([]);
  const ref = useRef<HTMLDivElement>(null); // Reference for detecting clicks outside the popup
  const id = useId();

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

  // Close popup when pressing the "Escape" key
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // Detect clicks outside of the popup
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActive(null); // Close popup if clicked outside
      }
    }

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref} // Reference to the popup element
              className="w-full max-w-[600px] h-full md:h-auto md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden relative"
            >
              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none"
                onClick={() => setActive(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image */}
              <motion.div layoutId={`image-${active.title}-${id}`} className="w-full h-60">
                <Image
                  priority
                  width={600}
                  height={400}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
                />
              </motion.div>

              {/* Content with scrollable details */}
              <div className="p-4 overflow-auto flex-grow">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-neutral-700 dark:text-neutral-200"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 mt-2"
                >
                  {active.description}
                </motion.p>
                <motion.ul className="list-disc pl-5 mt-3 text-neutral-600 dark:text-neutral-400">
                  {active.details?.map((detail: string, index: number) => (
                    <li key={index}>{detail}</li>
                  ))}
                </motion.ul>
              </div>

              {/* Book an Appointment button */}
              <motion.a
                layoutId={`button-${active.title}-${id}`}
                href="/book-appointment"
                className="block w-full text-center px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white sticky bottom-0"
              >
                Book an Appointment
              </motion.a>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Heading */}
      <h2 className="text-center text-3xl font-semibold mt-10 mb-8">
        Our Top Services
      </h2>

      {/* Two-column layout for services */}
      <ul className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            layoutId={`card-${service.title}-${id}`}
            key={`card-${service.title}-${id}`}
            onClick={() => setActive(service)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${service.title}-${id}`}>
                <Image
                  width={150}
                  height={150}
                  src={service.image}
                  alt={service.title}
                  className="h-32 w-32 md:h-40 md:w-40 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex flex-col justify-between">
                <motion.h3
                  layoutId={`title-${service.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${service.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {service.description}
                </motion.p>
                {/* Learn More button at the bottom */}
                <motion.button
                  layoutId={`button-${service.title}-${id}`}
                  className="block w-full md:w-auto px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
