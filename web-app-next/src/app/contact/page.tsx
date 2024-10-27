import React from 'react';
import ContactForm from '../components/ContactForm'; // Import the ContactForm component
import Header from '../components/common/Header'; // Assuming you have a reusable Header component

const ContactUsPage = () => {
  return (
    <div>
      {/* Page Header */}
      <Header title="Contact Us" />

      {/* Contact Us Section */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">Get In Touch</h1>
          <p className="text-center text-lg mb-10">
            Have any questions? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <ContactForm /> {/* Use your contact form component here */}
            </div>

            {/* Location / Address Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Location</h2>
              <p>123 Wellness Lane, Health City</p>
              <div className="my-4">
                {/* You can embed a Google Maps iframe here */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609953785!2d72.74110177674371!3d19.08252231746409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cefa13a99d27%3A0x6bbd91a4fd79a5eb!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1625674826794!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
