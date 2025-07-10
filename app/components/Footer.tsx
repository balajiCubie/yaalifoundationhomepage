"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center dark:bg-gray-900">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Yaali Foundation. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
