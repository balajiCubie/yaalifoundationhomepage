import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogPostCard from '../components/blog/BlogPostCard';
import BlogHeader from '../components/blog/BlogHeader'; // Assuming BlogHeader can be styled or replaced

interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
}

async function getBlogPosts(): Promise<BlogPostMetadata[]> {
  const postsDirectory = path.join(process.cwd(), 'app', 'blog', 'posts');
  const filenames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      author: data.author,
      tags: data.tags || [],
    };
  }));

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  const posts = await getBlogPosts();
  const page = parseInt(searchParams.page || '1');
  const limit = 9; // Display 9 posts per page
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / limit);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl"> {/* Increased max-width */}
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)] mb-4">Our Blog</h1>
        <p className="text-xl text-[var(--text-secondary-light)] dark:text-[var(--text-secondary-dark)]">Stay updated with our latest news, stories, and insights.</p>
      </div>

      <hr className="my-8 border-[var(--card-border-light)] dark:border-[var(--card-border-dark)]" /> {/* Subtle divider */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"> {/* Adjusted grid for better responsiveness */}
        {paginatedPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 space-x-2"> {/* Adjusted spacing */}
          {pageNumbers.map(number => (
            <Link
              key={number}
              href={`/blog?page=${number}`}
              className={`px-4 py-2 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color-light)] dark:focus:ring-[var(--accent-color-dark)] focus:ring-opacity-50 ${
                number === page
                  ? 'bg-[var(--accent-color-light)] border-[var(--accent-color-light)] text-white dark:bg-[var(--accent-color-dark)] dark:border-[var(--accent-color-dark)]'
                  : 'border-[var(--card-border-light)] dark:border-[var(--card-border-dark)] text-[var(--text-secondary-light)] dark:text-[var(--text-secondary-dark)] hover:bg-[var(--card-border-light)] dark:hover:bg-[var(--card-border-dark)]'
              }`}
            >
              {number}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
