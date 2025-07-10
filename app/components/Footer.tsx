"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 sm:p-8 text-center dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Yaali Foundation. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 text-sm sm:text-base">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
