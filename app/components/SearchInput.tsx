"use client";

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function SearchInput() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // In a real application, this would navigate to a search results page
      // or trigger a search API call.
      console.log('Searching for:', query);
      alert(`Searching for: ${query}`);
      // Example: router.push(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 w-48 md:w-64"
        aria-label="Search website"
      />
      <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
    </form>
  );
}
