import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#18181f] p-6">
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
