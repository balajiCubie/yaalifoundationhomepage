import React from 'react';
import Link from 'next/link';

const BlogPostNotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-gray-600 mb-6">The post you are looking for does not exist.</p>
      <Link href="/blog" className="text-blue-500 hover:underline">&larr; Back to Blog Posts</Link>
    </div>
  );
};

export default BlogPostNotFound;
