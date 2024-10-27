"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams"; // Assuming you already have this component

const OurMissionSection = () => {
  return (
    <div className="h-[30rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {/* Updated the max-width to match AboutHeroSection */}
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Our Commitment to You
        </h1>
        <p className="text-neutral-500 max-w-5xl mx-auto my-2 text-sm md:text-lg text-center relative z-10">
          Our mission at Healing Homoeopathy is to provide safe, effective, and natural healthcare solutions tailored to the unique needs of each individual. We are committed to promoting the holistic principles of homeopathy, focusing on the whole person rather than just symptoms.
        </p>
        <p className="text-neutral-500 max-w-5xl mx-auto my-2 text-sm md:text-lg text-center relative z-10">
          We believe in treating the root cause of illness, offering personalized care that addresses the physical, emotional, and mental aspects of health. Our goal is to empower you to achieve optimal well-being through natural, non-invasive treatments that work in harmony with your body’s own healing processes.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default OurMissionSection;