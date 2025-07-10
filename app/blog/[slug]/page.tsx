"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for internal navigation
import { remark } from 'remark';
import html from 'remark-html';
import { stripHtml } from 'string-strip-html'; // To strip HTML for word count

interface Author {
  name: string;
  bio: string;
  avatar: string;
}

interface Authors {
  [key: string]: Author;
}

const authors: Authors = {
  "john-doe": {
    name: "John Doe",
    bio: "John is a passionate advocate for environmental sustainability and community development.",
    avatar: "/avatars/john-doe.jpg" // Placeholder for avatar image
  },
  "jane-smith": {
    name: "Jane Smith",
    bio: "Jane is an expert in educational reform and empowering youth through innovative learning programs.",
    avatar: "/avatars/jane-smith.jpg" // Placeholder for avatar image
  }
};

interface Post {
  slug: string;
  title: string;
  date: string;
  author: keyof Authors;
  content: string;
  heroImage?: string; // Optional hero image for the banner
}

// Function to estimate reading time
const estimateReadingTime = (text: string) => {
  const wordsPerMinute = 200; // Average reading speed
  const cleanedText = stripHtml(text).result; // Strip HTML tags
  const wordCount = cleanedText.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  return readingTimeMinutes;
};

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const BlogPostPage = ({ params }: PageProps) => {
  const { slug } = params;
  const [contentHtml, setContentHtml] = useState('');
  const [readingTime, setReadingTime] = useState(0);

  // In a real application, you would fetch blog post data based on the slug
  // For now, we'll use placeholder content and simulate fetching based on slug.
  const blogPosts: Post[] = [
    {
      slug: "clean-water-rural-development",
      title: "The Importance of Clean Water in Rural Development",
      date: "July 1, 2025",
      author: "john-doe",
      heroImage: "/hero.jpg", // Example hero image
      content: `
# The Importance of Clean Water in Rural Development

This is the detailed content for "The Importance of Clean Water in Rural Development". Access to clean water is fundamental for health, education, and economic stability. Learn about our initiatives.

## The Challenge

Millions worldwide lack access to safe drinking water, leading to preventable diseases and hindering development.

## Our Solution

We implement sustainable water solutions, including well drilling, water purification systems, and community education programs.

### Block Embed Example (Image)
![Water Project](https://via.placeholder.com/600x300?text=Water+Project+Image)

This image represents a typical water project we undertake.

### Block Embed Example (Video - Placeholder)
You can imagine embedding a video here, for example from YouTube:
\`\`\`html
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-in; gyroscope; picture-in-picture" allowfullscreen></iframe>
\`\`\`
*Note: This is a placeholder for a video embed. In a real MDX setup, you might have custom components for this.*
      `
    },
    {
      slug: "reforestation-fresh-air",
      title: "Reforestation: A Breath of Fresh Air for Our Planet",
      date: "June 20, 2025",
      author: "jane-smith",
      heroImage: "/hero.jpg", // Example hero image
      content: `
# Reforestation: A Breath of Fresh Air for Our Planet

This is the detailed content for "Reforestation: A Breath of Fresh Air for Our Planet". Discover how planting trees helps combat climate change and supports biodiversity.

## Why Reforestation Matters

Trees absorb carbon dioxide, produce oxygen, prevent soil erosion, and provide habitats for wildlife.

## Our Reforestation Projects

We work with local communities to plant native trees and restore degraded ecosystems.

### Block Embed Example (Quote)
> "Heal the earth, heal our future." - Unknown

This quote inspires our work in environmental conservation.
      `
    },
    {
      slug: "empowering-through-education",
      title: "Empowering the Next Generation Through Education",
      date: "June 10, 2025",
      author: "john-doe",
      heroImage: "/hero.jpg", // Example hero image
      content: `
# Empowering the Next Generation Through Education

This is the detailed content for "Empowering the Next Generation Through Education". Our education hubs are transforming lives by providing essential skills and knowledge.

## The Power of Knowledge

Education is a powerful tool for breaking the cycle of poverty and fostering sustainable development.

## Our Education Programs

We provide access to quality education, vocational training, and digital literacy programs for underserved communities.

### Block Embed Example (List)
Our key educational areas include:
*   Literacy and Numeracy
*   Vocational Skills Training
*   Digital Literacy
*   Environmental Awareness
      `
    }
  ];

  const post = blogPosts.find(p => p.slug === slug);
  const author = post ? authors[post.author] : null;

  useEffect(() => {
    if (post?.content) {
      remark()
        .use(html, { sanitize: false }) // sanitize: false allows HTML embeds
        .process(post.content)
        .then(processedContent => {
          const htmlContent = String(processedContent);
          setContentHtml(htmlContent);
          setReadingTime(estimateReadingTime(htmlContent));
        });
    }
  }, [post?.content]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-6">The post you are looking for does not exist.</p>
        <Link href="/blog" className="text-blue-500 hover:underline">&larr; Back to Blog Posts</Link>
      </div>
    );
  }

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

export default BlogPostPage;
