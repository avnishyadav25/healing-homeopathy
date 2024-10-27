// src/components/HeroSection.tsx
"use client";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import React from "react";

interface HeroSectionProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  description,
  buttonText,
  buttonLink,
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Adjusting path length transformations to give a more gradual scroll effect
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.5], [0.2, 1.4]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.5], [0.15, 1.4]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.5], [0.1, 1.4]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.5], [0.05, 1.4]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.5], [0, 1.4]);

  // Parallax effect for the rest of the content (optional)
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div
      className="h-[200vh] w-full dark:border dark:border-white/[0.1] rounded-md relative pt-10 md:pt-20 overflow-hidden bg-black"
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
        title={heading}
        description={description}
        buttonText={buttonText}
        buttonLink={buttonLink}
      />

      
    </div>
  );
};

export default HeroSection;
