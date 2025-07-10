"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';
import { estimateReadingTime } from '@/lib/utils/readingTime';
import { authors, blogPosts } from '@/lib/data/blogPosts';
import BlogPostContent from '@/app/components/blog/BlogPostContent';
import BlogPostNotFound from '@/app/components/blog/BlogPostNotFound';

const BlogPostPage = ({ params }: { params: any }) => {
  const { slug } = params;
  const [contentHtml, setContentHtml] = useState('');
  const [readingTime, setReadingTime] = useState(0);

  const post = blogPosts.find(p => p.slug === slug);
  const author = post ? authors[post.author] : null;

  useEffect(() => {
    if (post?.content) {
      remark()
        .use(html, { sanitize: false })
        .process(post.content)
        .then(processedContent => {
          const htmlContent = String(processedContent);
          setContentHtml(htmlContent);
          setReadingTime(estimateReadingTime(htmlContent));
        });
    }
  }, [post?.content]);

  if (!post) {
    return <BlogPostNotFound />;
  }

  return (
    <BlogPostContent
      post={post}
      author={author}
      contentHtml={contentHtml}
      readingTime={readingTime}
    />
  );
};

export default BlogPostPage;
