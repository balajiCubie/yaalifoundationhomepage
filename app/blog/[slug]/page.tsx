import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import BlogPostContent from '../../components/blog/BlogPostContent';
import BlogPostNotFound from '../../components/blog/BlogPostNotFound';
import { estimateReadingTime } from '@/lib/utils/readingTime';

interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  heroImage?: string; // Added heroImage as optional
}

interface BlogPostData extends BlogPostMetadata {
  content: string;
  readingTime: number; // Added readingTime
}

async function getBlogPost(slug: string): Promise<BlogPostData | null> {
  const postsDirectory = path.join(process.cwd(), 'app', 'blog', 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const htmlContent = await marked(content); // Await marked(content)
    const readingTime = estimateReadingTime(content); // Calculate reading time

    // For now, we'll use a dummy author or null if no author data is available
    // If a proper Author interface and data source are needed, this can be extended.
    const author = {
      name: data.author || 'Unknown Author',
      avatar: '/images/default-avatar.png', // Placeholder for avatar
      bio: 'A passionate writer.', // Placeholder for bio
    };

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      tags: data.tags || [],
      heroImage: data.heroImage || undefined, // Assign heroImage if present
      content: htmlContent,
      readingTime,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return <BlogPostNotFound />;
  }

  // Since BlogPostContent expects a 'Post' type for its 'post' prop,
  // and 'author', 'contentHtml', 'readingTime' as separate props,
  // we need to adjust the props passed.
  // Assuming BlogPostContent's Post interface is compatible with BlogPostMetadata + content.
  // For author, we'll pass a simple object or null if not needed by BlogPostContent.
  const authorData = {
    name: post.author,
    avatar: '/images/default-avatar.png', // Placeholder
    bio: 'Blog contributor', // Placeholder
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogPostContent
        post={post}
        author={authorData} // Pass the author data
        contentHtml={post.content}
        readingTime={post.readingTime}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'app', 'blog', 'posts');
  const filenames = await fs.readdir(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}
