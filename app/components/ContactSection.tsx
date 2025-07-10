import React from 'react';

interface ContactSectionProps {
  title: string;
  description: string;
  email: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ title, description, email }) => {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-8">{title}</h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <a
          href={`mailto:${email}`}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
