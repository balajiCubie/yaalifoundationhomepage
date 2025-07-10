import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Importance of Clean Water in Rural Development",
      summary: "Access to clean water is fundamental for health, education, and economic stability. Learn about our initiatives.",
      date: "July 1, 2025",
      category: "Water",
      image: "/hero.jpg"
    },
    {
      id: 2,
      title: "Reforestation: A Breath of Fresh Air for Our Planet",
      summary: "Discover how planting trees helps combat climate change and supports biodiversity.",
      date: "June 20, 2025",
      category: "Environment",
      image: "/hero.jpg"
    },
    {
      id: 3,
      title: "Empowering the Next Generation Through Education",
      summary: "Our education hubs are transforming lives by providing essential skills and knowledge.",
      date: "June 10, 2025",
      category: "Education",
      image: "/hero.jpg"
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
                  <Image src={post.image} alt={post.title} width={700} height={400} className="w-full h-48 object-cover"/>
                )}
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-900 mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
                  <Link href={`/blog/${post.id}`} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300">
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
