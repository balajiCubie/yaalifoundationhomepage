import { authors, blogPosts } from '@/lib/data/blogPosts';
import BlogHeader from '@/app/components/blog/BlogHeader';
import BlogPostCard from '@/app/components/blog/BlogPostCard';
import BlogArchiveLink from '@/app/components/blog/BlogArchiveLink';

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-16 bg-gray-100 dark:bg-gray-800 flex-grow">
        <BlogHeader
          title="Latest Articles & News"
          subtitle="Stay updated with our work, insights, and stories from the field."
        />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map(post => (
              <BlogPostCard key={post.slug} post={post} author={authors[post.author]} />
            ))}
          </div>
          <BlogArchiveLink href="/blog/archive" text="View All Articles" />
        </div>
      </section>
    </div>
  );
}
