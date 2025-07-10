"use client";

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import SearchInput from './SearchInput';

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:underline">Yaali Foundation</Link>
        </h1>
          <nav className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li><Link href="/#about" className="hover:underline">About Us</Link></li>
              <li><Link href="/#mission" className="hover:underline">Our Mission</Link></li>
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/resources" className="hover:underline">Resources</Link></li>
              <li><Link href="/#contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/donate" className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Donate</Link></li>
            </ul>
            <SearchInput /> {/* Add SearchInput here */}
            <ThemeToggle />
          </nav>
        </div>
      </header>
  );
}
