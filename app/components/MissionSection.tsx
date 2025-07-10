import React from 'react';

interface MissionItemProps {
  title: string;
  description: string;
}

const MissionItem: React.FC<MissionItemProps> = ({ title, description }) => (
  <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">
      {description}
    </p>
  </div>
);

interface MissionSectionProps {
  title: string;
  missionItems: MissionItemProps[];
}

const MissionSection: React.FC<MissionSectionProps> = ({ title, missionItems }) => {
  return (
    <section id="mission" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {missionItems.map((item, index) => (
            <MissionItem key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
