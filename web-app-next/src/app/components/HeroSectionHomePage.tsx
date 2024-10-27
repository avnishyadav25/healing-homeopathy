"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

interface HeroSectionProps {
  heading: string;
  description: string;
  buttons: {
    text: string;
    link: string;
  }[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  description,
  buttons,
}) => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4 text-center"> {/* Increased max-width to 4xl */}
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          {heading || "Healing Homoeopathy"}
        </h1>
        <p className="text-neutral-500 max-w-3xl mx-auto my-2 text-sm md:text-lg relative z-10">
          {description ||
            "We believe in the power of nature to heal. With personalized homeopathic treatments, we address the root cause of your health concerns."}
        </p>

        {/* Button Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className="inline-block px-6 py-2 md:px-8 md:py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition relative z-10"
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default HeroSection;
