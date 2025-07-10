import React from 'react';

interface BlogHeaderProps {
  title: string;
  subtitle: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">{title}</h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default BlogHeader;
