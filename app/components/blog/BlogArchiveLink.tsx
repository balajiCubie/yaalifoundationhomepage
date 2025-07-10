import React from 'react';
import Link from 'next/link';

interface BlogArchiveLinkProps {
  href: string;
  text: string;
}

const BlogArchiveLink: React.FC<BlogArchiveLinkProps> = ({ href, text }) => {
  return (
    <div className="text-center mt-16">
      <Link href={href} className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
        {text}
      </Link>
    </div>
  );
};

export default BlogArchiveLink;
