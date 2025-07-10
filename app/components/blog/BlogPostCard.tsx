import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
}

interface BlogPostCardProps {
  post: BlogPostMetadata;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-[var(--card-background-light)] dark:bg-[var(--card-background-dark)] rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl border border-[var(--card-border-light)] dark:border-[var(--card-border-dark)]">
      <div className="p-8 flex flex-col h-full"> {/* Increased padding */}
        <h3 className="text-2xl font-bold text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)] mb-3 leading-tight">{post.title}</h3> {/* Adjusted margin */}
        <p className="text-sm text-[var(--text-secondary-light)] dark:text-[var(--text-secondary-dark)] mb-6 flex-grow">{post.date} by {post.author}</p> {/* Adjusted margin */}
        <div className="mt-auto flex flex-wrap gap-2 mb-6"> {/* Adjusted margin */}
          {post.tags.map((tag) => (
            <span key={tag} className="inline-block bg-[var(--tag-background-light)] dark:bg-[var(--tag-background-dark)] text-[var(--tag-text-light)] dark:text-[var(--tag-text-dark)] text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`} className="inline-block mt-auto text-center text-[var(--accent-color-light)] dark:text-[var(--accent-color-dark)] border border-[var(--accent-color-light)] dark:border-[var(--accent-color-dark)] px-8 py-3 rounded-full text-sm font-semibold hover:bg-[var(--accent-color-light)] hover:text-white dark:hover:bg-[var(--accent-color-dark)] dark:hover:text-gray-900 transition duration-300"> {/* Updated button style */}
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
