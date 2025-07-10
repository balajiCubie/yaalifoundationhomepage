import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Clean Water Initiative",
      description: "Providing access to safe and clean drinking water in rural communities.",
      image: "/project-water.jpg", // Placeholder image
      impact: "5,000+ people gained access to clean water."
    },
    {
      id: 2,
      name: "Reforestation Program",
      description: "Planting trees and restoring deforested areas to combat climate change.",
      image: "/project-forest.jpg", // Placeholder image
      impact: "10,000+ trees planted across 50 acres."
    },
    {
      id: 3,
      name: "Community Education Hubs",
      description: "Establishing learning centers to empower children and adults with essential skills.",
      image: "/project-education.jpg", // Placeholder image
      impact: "3 new education hubs established, benefiting 1,200 students."
    },
    {
      id: 4,
      name: "Sustainable Agriculture Training",
      description: "Educating farmers on eco-friendly farming techniques for food security.",
      image: "/project-agriculture.jpg", // Placeholder image
      impact: "200+ farmers trained in sustainable practices."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Projects Section */}

      {/* Projects Section */}
      <section className="py-16 bg-gray-100 flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Impactful Projects</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            At Yaali Foundation, we are committed to creating lasting change through a variety of impactful projects. Explore our initiatives below and see how your support makes a difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                {project.image && (
                  <Image src={project.image} alt={project.name} width={700} height={400} className="w-full h-48 object-cover"/>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-blue-600 font-medium mb-4">Impact: {project.impact}</p>
                  <Link href={`/projects/${project.id}`} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Want to get involved?</h3>
            <p className="text-lg text-gray-700 mb-8">
              Your support helps us launch and sustain these vital projects. Consider donating or volunteering today!
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/donate" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">
                Donate Now
              </Link>
              <Link href="/volunteer" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
