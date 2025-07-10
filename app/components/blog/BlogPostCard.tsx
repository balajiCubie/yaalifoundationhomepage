import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post, Author } from '@/lib/data/blogPosts'; // Adjust path as necessary

interface BlogPostCardProps {
  post: Post;
  author: Author;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, author }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {post.heroImage && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image src={post.heroImage} alt={post.title} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="p-6">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-900 mb-2">
          {post.category}
        </span>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
        {author && (
          <div className="flex items-center mt-4">
            <Image
              src={author.avatar}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">By {author.name}</span>
          </div>
        )}
        <Link href={`/blog/${post.slug}`} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300 mt-4">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
