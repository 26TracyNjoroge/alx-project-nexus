import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-[#101014] p-4">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-400 ml-6">MovieMood</Link>
            <nav className='flex items-center lg:space-x-8 space-x-12 mt-3 lg:0'>
                <Link href="/" className='nav-link'>Home</Link>
                <Link href="/" className='nav-link'>Movies</Link>
                <Link href="/" className='nav-link'>TV Shows</Link>
                <Link href="/" className='nav-link'>Watchlist</Link>
            </nav>
            <input placeholder="Search movies..." className="text-white border-1 border-solid border-gray-500 rounded-lg pl-8 py-1 mt-3 lg:mt-0 lg:mr-10 w-96"/>
        </div>
    </header>
  )
}

export default Header;
