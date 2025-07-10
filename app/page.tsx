import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Empowering Communities, <br className="hidden md:inline"/>Building a Sustainable Future
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            Join Yaali Foundation in fostering positive change through education, healthcare, and environmental conservation.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/donate" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg">
              Donate Now
            </Link>
            <Link href="/volunteer" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Counters Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-blue-800 rounded-lg shadow-lg">
              <p className="text-5xl font-extrabold mb-2">5,000+</p>
              <p className="text-xl">People with Clean Water</p>
            </div>
            <div className="p-6 bg-blue-800 rounded-lg shadow-lg">
              <p className="text-5xl font-extrabold mb-2">10,000+</p>
              <p className="text-xl">Trees Planted</p>
            </div>
            <div className="p-6 bg-blue-800 rounded-lg shadow-lg">
              <p className="text-5xl font-extrabold mb-2">1,200+</p>
              <p className="text-xl">Students Educated</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/yaali-about.jpg" alt="About Yaali Foundation" className="rounded-lg shadow-lg"/>
            </div>
            <div className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                The Yaali Foundation is a non-profit organization committed to making a lasting impact on communities worldwide. Founded on the principles of compassion and empowerment, we strive to address critical social, economic, and environmental challenges.
              </p>
              <p className="mb-4">
                Our work spans various sectors, including education, healthcare, environmental conservation, and poverty alleviation. We believe in a holistic approach to development, working closely with local communities to identify their needs and implement sustainable solutions.
              </p>
              <p>
                Through our dedicated team and network of volunteers, we aim to create a world where everyone has the opportunity to thrive and contribute to a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Providing access to quality education for underprivileged children and adults, fostering knowledge and skills for a brighter future.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Healthcare</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Improving health outcomes by supporting medical camps, providing essential supplies, and promoting health awareness in remote areas.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Environment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Engaging in conservation efforts, promoting sustainable practices, and raising awareness about environmental protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">What People Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                "Yaali Foundation has transformed our community. Their dedication to education has opened up new opportunities for our children."
              </p>
              <p className="font-semibold text-gray-800 dark:text-white">- Maria S., Community Leader</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                "Volunteering with Yaali Foundation has been an incredibly rewarding experience. I've seen firsthand the positive impact they make."
              </p>
              <p className="font-semibold text-gray-800 dark:text-white">- David L., Volunteer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img src="/success-story-1.jpg" alt="Success Story 1" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Bringing Clean Water to Remote Villages</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn how our Clean Water Initiative transformed daily life for thousands, reducing waterborne diseases and improving health.
                </p>
                <Link href="/projects/1" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Read More</Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img src="/success-story-2.jpg" alt="Success Story 2" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Empowering Women Through Education</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Discover the journey of women who gained literacy and vocational skills, leading to economic independence and community leadership.
                </p>
                <Link href="/projects/3" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            We would love to hear from you! Reach out to us for partnerships, volunteering, or any inquiries.
          </p>
          <a
            href="mailto:info@yaalifoundation.org"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}
