"use client";
import React from "react";

const whyChooseUsPoints = [
  {
    title: "Personalized Care",
    description: "We provide individualized care focused on natural healing.",
    points: ["Tailored treatment", "Holistic approach", "Comprehensive care", "Patient-first"],
  },
  {
    title: "Treating Root Causes",
    description: "We focus on the root causes of health issues, not just symptoms.",
    points: ["Long-lasting results", "Holistic health", "Natural remedies", "Wellness care"],
  },
  {
    title: "Comprehensive Understanding",
    description: "Our treatments address both physical and emotional needs.",
    points: ["Emotional support", "Holistic wellness", "Personalized plans", "Full-body care"],
  },
  {
    title: "Integrating Tradition and Innovation",
    description: "We blend traditional practices with modern medical advancements.",
    points: ["Traditional homeopathy", "Modern science", "Innovative remedies", "Advanced care"],
  },
  {
    title: "Patient Empowerment",
    description: "We empower patients with knowledge and guidance.",
    points: ["Education", "Supportive care", "Patient knowledge", "Comprehensive healing"],
  },
  {
    title: "Patient Safety First",
    description: "We ensure safety with certified remedies and trusted procedures.",
    points: ["Certified remedies", "Safe treatments", "Quality control", "High standards"],
  },
];

// Step component to display each list item
const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

// CheckIcon component for each step
const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

const WhyChooseUsSection = () => {
  return (
    <div className="h-auto w-full bg-black text-white py-10 px-5">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChooseUsPoints.map((point, index) => (
          <div key={index} className="w-full bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
            <p className="text-neutral-300 mb-4">{point.description}</p>
            <ul className="list-none">
              {point.points.map((item, i) => (
                <Step key={i} title={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
