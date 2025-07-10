import Link from 'next/link';

export default function DonorDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Donor Dashboard Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Donor Dashboard</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            This section is under development. Here, donors will be able to view their donation history, manage recurring gifts, and access tax receipts.
          </p>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Coming Soon!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We are working hard to bring you a personalized donor experience.
            </p>
            <Link href="/donate" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
