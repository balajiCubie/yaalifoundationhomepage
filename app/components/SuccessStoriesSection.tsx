import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SuccessStoryProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({ imageSrc, title, description, link }) => (
  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <div className="relative w-full h-48 sm:h-64">
      <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="w-full h-full object-cover"/>
    </div>
    <div className="p-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
        {description}
      </p>
      <Link href={link} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm sm:text-base">Read More</Link>
    </div>
  </div>
);

interface SuccessStoriesSectionProps {
  title: string;
  stories: SuccessStoryProps[];
}

const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ title, stories }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">{title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <SuccessStory key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
