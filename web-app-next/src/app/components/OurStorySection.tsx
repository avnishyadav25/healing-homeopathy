"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";
import heartHealingBackground from "../../public/heart-healing.jpg"; // Make sure the image exists in this path

const OurStorySection = () => {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            In 2021, Healing Homoeopathy was founded by Dr. Aparna Singh, a passionate advocate for natural medicine with over 4 years of experience in homeopathy. The vision was simple but powerful: to make homeopathic care accessible to everyone, blending ancient practices with modern science for a truly holistic approach to health. From day one, we were committed to delivering personalized, compassionate care.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={heartHealingBackground}
              alt="Healing Homoeopathy 2021"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src={heartHealingBackground}
              alt="First Clinic Established"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            After a successful first year, Healing Homoeopathy expanded its offerings by introducing specialized treatments for chronic conditions, such as autoimmune diseases, allergies, and skin conditions. This marked the beginning of our clinic’s mission to treat the root cause of illness and empower patients with long-lasting health solutions. We also witnessed a significant increase in patient trust and satisfaction.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={heartHealingBackground}
              alt="Specialized Treatments"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src={heartHealingBackground}
              alt="Patient Care 2022"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            2023 was a pivotal year for Healing Homoeopathy as we launched our online consultation services, allowing us to reach patients across the globe. Through virtual appointments, we continued our dedication to personalized care, ensuring patients received the best treatment, regardless of location. This year also saw many success stories as our treatments touched the lives of more people than ever before.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={heartHealingBackground}
              alt="Online Consultation Launched"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src={heartHealingBackground}
              alt="Global Reach"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            As we step into 2024, Healing Homoeopathy continues to evolve and grow, now recognized as a leader in natural medicine. This year has seen the expansion of our team, the opening of new clinics, and the development of innovative treatment plans designed to address complex health challenges. We are excited to serve an even broader community while maintaining our mission to provide safe, effective, and holistic homeopathic care.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={heartHealingBackground}
              alt="New Clinic Openings"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src={heartHealingBackground}
              alt="Innovative Treatments"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-12">
      <h2 className="text-6xl md:text-7xl font-bold text-center mb-8">Our Story</h2>
      <div className="max-w-5xl mx-auto">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default OurStorySection;