import Link from 'next/link';

export default function VolunteerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Volunteer Section */}

      {/* Volunteer Section */}
      <section className="py-16 bg-gray-100 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Become a Volunteer</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Join our passionate team of volunteers and contribute your time and skills to make a tangible difference in communities around the world. Your dedication is invaluable to our mission.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Volunteer Registration</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-lg font-medium text-gray-700 text-left mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-lg"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 text-left mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-lg"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700 text-left mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-lg"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="skills" className="block text-lg font-medium text-gray-700 text-left mb-2">Skills/Areas of Interest</label>
                <textarea
                  name="skills"
                  id="skills"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-lg"
                  placeholder="e.g., Teaching, Marketing, Event Planning, Environmental Work"
                ></textarea>
              </div>

              <div>
                <label htmlFor="availability" className="block text-lg font-medium text-gray-700 text-left mb-2">Availability</label>
                <select
                  name="availability"
                  id="availability"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-lg"
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="evenings">Evenings</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-purple-700 transition duration-300 mt-6"
              >
                Submit Application
              </button>
            </form>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Explore Volunteer Opportunities</h3>
            <p className="text-lg text-gray-700 mb-8">
              Discover specific roles and projects where your skills can make the biggest impact.
            </p>
            <Link href="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              View Projects
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
