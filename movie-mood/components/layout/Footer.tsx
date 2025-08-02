import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101014] p-6 mt-8 shadow-inner">
      <div className="container mx-auto text-center">
        <Link href="/" className="flex items-center justify-center text-2xl font-bold text-purple-400 mb-2">
          MovieMood
        </Link>
        <p className="text-gray-400 text-sm">
          Discover amazing movies and build your perfect watchlist.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
