import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <header className="bg-[#18181f] p-4">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <Link href="/" className="text-2xl font-bold text-purple-400 ml-6">
          MovieMood
        </Link>
        
        <nav className='flex items-center lg:space-x-8 space-x-12 mt-3 lg:mt-0 sm:tex'>
          <Link href="/" className='nav-link'>Home</Link>
          <Link href="/" className='nav-link'>Movies</Link>
          <Link href="/" className='nav-link'>TV Shows</Link>
          <Link href="/" className='nav-link'>Watchlist</Link>
        </nav>
        
        <form onSubmit={handleSearch} className="mt-3 lg:mt-0 lg:mr-10">
          <input 
            type="text"
            placeholder="Search movies..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="text-white bg-gray-800 border border-gray-500 rounded-lg pl-8 py-1 w-96 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 sm:w-34 md:w-68 lg:w-96"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;