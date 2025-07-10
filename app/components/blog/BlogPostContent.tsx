"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Post, Author } from '@/lib/data/blogPosts';

interface BlogPostContentProps {
  post: Post;
  author: Author | null;
  contentHtml: string;
  readingTime: number;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post, author, contentHtml, readingTime }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {post.heroImage && (
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <Image
            src={post.heroImage}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
              {post.title}
            </h1>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 py-8 flex-grow">
        {!post.heroImage && (
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        )}
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
          <p className="mr-4">Published on {post.date}</p>
          {readingTime > 0 && (
            <p className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {readingTime} min read
            </p>
          )}
        </div>
        {author && (
          <div className="flex items-center mb-6">
            <Image
              src={author.avatar}
              alt={author.name}
              width={50}
              height={50}
              className="rounded-full mr-3"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{author.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{author.bio}</p>
            </div>
          </div>
        )}
        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <div className="mt-8">
          <Link href="/blog" className="text-blue-500 hover:underline">&larr; Back to Blog Posts</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
