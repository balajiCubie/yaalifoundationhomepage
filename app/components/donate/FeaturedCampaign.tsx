import React from 'react';

interface FeaturedCampaignProps {
  campaignGoal: number;
  currentRaised: number;
  title: string;
  description: string;
}

const FeaturedCampaign: React.FC<FeaturedCampaignProps> = ({
  campaignGoal,
  currentRaised,
  title,
  description,
}) => {
  const progress = (currentRaised / campaignGoal) * 100;

  return (
    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg max-w-2xl mx-auto mb-12">
      <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-600 mb-2">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        ${currentRaised.toLocaleString()} raised of ${campaignGoal.toLocaleString()} goal
      </p>
    </div>
  );
};

export default FeaturedCampaign;
