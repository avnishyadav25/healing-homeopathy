// pages/about/page.tsx
import React from "react";
import AboutHeroSection from "../components/AboutHeroSection"; // Update the path to match your project structure
import OurMissionSection from "../components/OurMissionSection"; // Update the path to match your project structure
import OurStorySection from "../components/OurStorySection"; // Update the path to match your project structure

import { ServicesSection } from "../components/ServicesSection";

import SectionDivider from '../components/common/SectionDivider'


const AboutPage = () => {
  return (
    <>
      <AboutHeroSection />
      {/* Add other sections of your About page below */}
      <SectionDivider />
      <OurMissionSection />
      <SectionDivider />
      <OurStorySection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
    </>
  );
};

export default AboutPage;