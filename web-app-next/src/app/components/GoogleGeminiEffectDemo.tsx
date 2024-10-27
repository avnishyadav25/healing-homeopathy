"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect"; // Make sure you have this component in your project

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Create path lengths for the effect
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-hidden bg-black"
      ref={ref}
    >
      {/* Google Gemini Effect */}
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />

      {/* Main Content */}
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center px-6 md:px-12">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Healing Homeopathy
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
          At Healing Homoeopathy, we believe in the power of nature to heal. Our practice is dedicated to providing personalized homeopathic treatments that address the root cause of your health concerns. With a focus on holistic wellness, we offer natural remedies that are tailored to your individual needs, helping you achieve a balanced and healthy life.
        </p>

        {/* CTA Button */}
        <a
          href="/book-appointment"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Book an Appointment
        </a>
      </div>
    </div>
  );
}
