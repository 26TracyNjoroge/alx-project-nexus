import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { MovieProp } from '@/interfaces';

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;
  const [movies, setMovies] = useState<MovieProp[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getImageUrl = (path: string | null): string => {
    if (!path) return '/placeholder-movie.jpg';
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  const searchMovies = async (query: string) => {
    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    
    if (!API_KEY) {
      throw new Error('API key is missing');
    }

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to search movies');
    }
    
    const data = await response.json();
    return data.results;
  };

  useEffect(() => {
    if (q && typeof q === 'string') {
      setIsLoading(true);
      setError(null);
      
      searchMovies(q)
        .then((results) => {
          setMovies(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [q]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">
          {q ? `Search Results for "${q}"` : 'Search Movies'}
        </h1>

        {isLoading && (
          <div className="text-center text-lg">Searching movies...</div>
        )}

        {error && (
          <div className="text-red-400 text-center text-lg">
            Error: {error}
          </div>
        )}

        {!isLoading && !error && movies.length === 0 && q && (
          <div className="text-center text-lg text-gray-400">
            No movies found for "{q}". Try a different search term.
          </div>
        )}

        {!isLoading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="relative group">
                <Link href={`/movie/${movie.id}`}>
                  <div className="w-full h-72 bg-gray-800 rounded-xl relative overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <Image
                      src={getImageUrl(movie.poster_path)}
                      alt={movie.title}
                      fill
                      className="object-cover rounded-xl transition-opacity duration-300 hover:opacity-70"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                    
                    {/* Rating badge */}
                    {movie.vote_average > 0 && (
                      <div className="absolute top-2 right-2 bg-[#F6B222] text-black text-xs font-bold px-2 py-1 rounded-full">
                        <span className="mr-1">★</span>
                        {movie.vote_average.toFixed(1)}
                      </div>
                    )}
                    
                    {/* Movie info overlay */}
                    <div className="absolute inset-0 transition-all duration-300 flex items-end justify-center opacity-0 group-hover:opacity-100">
                      <div className="text-center p-4">
                        <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
                          {movie.title}
                        </h3>
                        {movie.release_date && (
                          <p className="text-gray-300 text-xs">
                            {new Date(movie.release_date).getFullYear()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        {!q && (
          <div className="text-center text-gray-400 text-lg">
            Enter a search term to find movies.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;