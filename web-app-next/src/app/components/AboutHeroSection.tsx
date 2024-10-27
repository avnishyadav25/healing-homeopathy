"use client";
import React from "react";
import Image from "next/image";
import heartHealingBackground from "../../public/heart-healing.jpg"; // Make sure the image exists in this path


const AboutHeroSection = () => {
  return (
    <section className="relative w-full h-[30rem] flex items-center justify-center text-white">
      {/* Background image */}
      <Image
        src={heartHealingBackground}
        alt="Heart Healing"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      {/* Overlay for dimming effect */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl px-4">
        <h1 className="text-5xl font-bold mb-4">About Us - Healing Homoeopathy</h1>
        <p className="text-lg">
          Welcome to Healing Homoeopathy, where we blend traditional wisdom with modern healthcare
          to offer holistic solutions for your well-being. Our mission is to empower individuals and
          families to achieve optimal health through natural and personalized homeopathic treatments.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;