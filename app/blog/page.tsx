import Link from 'next/link';
import Image from 'next/image';

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
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  author: keyof Authors; // Ensure author is a valid key in the authors object
}

export default function BlogPage() {
  const posts: Post[] = [
    {
      id: 1,
      title: "The Importance of Clean Water in Rural Development",
      summary: "Access to clean water is fundamental for health, education, and economic stability. Learn about our initiatives.",
      date: "July 1, 2025",
      category: "Water",
      image: "/hero.jpg", // This will serve as the featured image
      slug: "clean-water-rural-development",
      author: "john-doe"
    },
    {
      id: 2,
      title: "Reforestation: A Breath of Fresh Air for Our Planet",
      summary: "Discover how planting trees helps combat climate change and supports biodiversity.",
      date: "June 20, 2025",
      category: "Environment",
      image: "/hero.jpg", // This will serve as the featured image
      slug: "reforestation-fresh-air",
      author: "jane-smith"
    },
    {
      id: 3,
      title: "Empowering the Next Generation Through Education",
      summary: "Our education hubs are transforming lives by providing essential skills and knowledge.",
      date: "June 10, 2025",
      category: "Education",
      image: "/hero.jpg", // This will serve as the featured image
      slug: "empowering-through-education",
      author: "john-doe"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Blog Section */}

      {/* Blog Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Latest Articles & News</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Stay updated with our work, insights, and stories from the field.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map(post => (
              <div key={post.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                {post.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-900 mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
                  {post.author && authors[post.author] && (
                    <div className="flex items-center mt-4">
                      <Image
                        src={authors[post.author].avatar}
                        alt={authors[post.author].name}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">By {authors[post.author].name}</span>
                    </div>
                  )}
                  <Link href={`/blog/${post.slug}`} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300 mt-4">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/blog/archive" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
