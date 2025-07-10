import React from 'react';
import Image from 'next/image';

interface AboutUsSectionProps {
  title: string;
  imageSrc: string;
  paragraphs: string[];
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ title, imageSrc, paragraphs }) => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{title}</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-full max-w-lg h-64 md:h-80 lg:h-96">
              <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
            </div>
          </div>
          <div className="md:w-1/2 text-lg text-gray-700 leading-relaxed px-4 md:px-0">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4 leading-loose">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
