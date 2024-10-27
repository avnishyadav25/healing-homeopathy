// src/pages/index.tsx
import HeroSectionHomePage from "./components/HeroSectionHomePage";
import { CoverSection } from "./components/CoverSection";
import { ServicesSection } from "./components/ServicesSection";

import WhyChooseUsSection from "./components/WhyChooseUsSection";
import BlogSection from "./components/BlogSection";
import NewsletterForm from './components/NewsletterForm';
import ContactUsSection from './components/ContactUsSection';  // Adjust the path as needed
import SectionDivider from './components/common/SectionDivider'



export default function HomePage() {
  return (

    <>
    <HeroSectionHomePage
      heading="Healing Homoeopathy"
      description="At Healing Homoeopathy, we believe in the power of nature to heal. Our practice is dedicated to providing personalized homeopathic treatments that address the root cause of your health concerns. With a focus on holistic wellness, we offer natural remedies that are tailored to your individual needs, helping you achieve a balanced and healthy life."
      buttons={[
        { text: "Order Medicine", link: "/order-medicine" },
        { text: "Book Appointment", link: "/book-appointment" },
        { text: "Know More", link: "/about" },
      ]}
    />
    <CoverSection />
    <SectionDivider />
    <WhyChooseUsSection />
    <SectionDivider />
    <ServicesSection />
    <SectionDivider />
    <NewsletterForm />
    <SectionDivider />
    <BlogSection />
    <SectionDivider />
    <ContactUsSection />

    </>
  );
}