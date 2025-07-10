"use client";

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import SearchInput from './SearchInput';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:underline">Yaali Foundation</Link>
        </h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
        <nav className={`md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <li><Link href="/#about" className="hover:underline" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link href="/#mission" className="hover:underline" onClick={() => setIsOpen(false)}>Our Mission</Link></li>
            <li><Link href="/projects" className="hover:underline" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="/blog" className="hover:underline" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link href="/resources" className="hover:underline" onClick={() => setIsOpen(false)}>Resources</Link></li>
            <li><Link href="/#contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link href="/donate" className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300" onClick={() => setIsOpen(false)}>Donate</Link></li>
          </ul>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <SearchInput />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
