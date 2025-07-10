import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  donateLink: string;
  volunteerLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imageSrc,
  donateLink,
  volunteerLink,
}) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20 md:py-32 flex-grow flex items-center justify-center overflow-hidden">
      <Image
        src={imageSrc}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-30"
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href={donateLink} className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg">
            Donate Now
          </Link>
          <Link href={volunteerLink} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg">
            Become a Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
