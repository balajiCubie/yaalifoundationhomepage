import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "Clean Water Handbook",
      description: "A comprehensive guide on water purification and conservation techniques.",
      type: "PDF",
      downloadLink: "/resources/clean-water-handbook.pdf" // Placeholder
    },
    {
      id: 2,
      title: "Reforestation Best Practices (Video)",
      description: "Video tutorial on effective tree planting and forest management.",
      type: "Video",
      downloadLink: "https://www.youtube.com/watch?v=example" // Placeholder
    },
    {
      id: 3,
      title: "Community Education Curriculum",
      description: "Downloadable curriculum for setting up and running community learning centers.",
      type: "PDF",
      downloadLink: "/resources/education-curriculum.pdf" // Placeholder
    },
    {
      id: 4,
      title: "Sustainable Agriculture Infographic",
      description: "Visual guide to eco-friendly farming methods.",
      type: "Infographic",
      downloadLink: "/resources/sustainable-agriculture.png" // Placeholder
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Resources Section */}

      {/* Resources Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Educational Resources</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Explore our library of valuable resources designed to educate and empower.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {resources.map(resource => (
              <div key={resource.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="p-6">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900 mb-2">
                    {resource.type}
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                  <a href={resource.downloadLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300">
                    {resource.type === 'Video' ? 'Watch Now' : 'Download'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Can't find what you're looking for?</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Contact us with your resource requests or suggestions.
            </p>
            <Link href="/#contact" className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
