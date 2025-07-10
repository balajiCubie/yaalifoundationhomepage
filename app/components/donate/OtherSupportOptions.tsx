import React from 'react';
import Link from 'next/link';

const OtherSupportOptions: React.FC = () => {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Beyond Donations</h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Explore other ways to support our mission or partner with us.
      </p>
      <div className="flex justify-center space-x-4 flex-wrap gap-4">
        <Link href="/donor-dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Donor Dashboard (Coming Soon)
        </Link>
        <Link href="/corporate-sponsorship" className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition duration-300">
          Corporate Sponsorship
        </Link>
        <Link href="/volunteer" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
          Become a Volunteer
        </Link>
      </div>
    </div>
  );
};

export default OtherSupportOptions;
