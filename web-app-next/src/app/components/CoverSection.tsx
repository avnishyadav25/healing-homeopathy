import React from "react";
import { Cover } from "./ui/cover";

export function CoverSection() {
  return (
    <div className="text-center py-12 bg-neutral-100 dark:bg-neutral-900">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-5xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Get <Cover>One-to-One Consultation</Cover> and Get <Cover>Medicine at Your Doorstep</Cover>
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutral-600 dark:text-neutral-300">
        Experience personalized homeopathic treatment plans tailored to your specific needs. Conveniently order your prescribed medicines and have them delivered to your doorstep.
      </p>

      {/* Button Section */}
      <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
        <a
          href="/book-appointment"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Book Appointment
        </a>
        <a
          href="/order-medicine"
          className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
        >
          Order Medicine
        </a>
      </div>
    </div>
  );
}
