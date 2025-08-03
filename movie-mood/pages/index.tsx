import Image from "next/image";
import Link from "next/link";  
import axios from "axios";
import { MovieProp } from "@/interfaces";
import { useState, useEffect } from "react";

export default function Home() {
  const [movies, setMovies] = useState<MovieProp[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getImageUrl = (path: string | null): string => {
    if (!path) return '/placeholder-movie.jpg'; 
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  const getPopularMovies = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    if (!API_KEY) {
      throw new Error('API key is missing');
    }

    const url = `${process.env.NEXT_PUBLIC_TMDB_API_URL}/popular?api_key=${API_KEY}`;
    const response = await axios.get(url);
    console.log(response.data);
    return response.data.results;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getPopularMovies();
        setMovies(moviesData);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-[#101014]">
      <section className="relative w-full h-[296px] sm:h-[421px] lg:h-[481px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 rounded-[6px] sm:rounded-[12px] overflow-hidden">
          <div>
            <Image
              src="/assets/images/moviehall.png"
              alt="Movie Hall"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            MovieMood
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-300 sm:text-l md:text-xl lg:text-2xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
            Discover your next favourite movie with personalized recommendations and explore the world of movies.
          </p>
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <span className="text-red-500 mr-3">🎬</span>
          Featured Movies
        </h2>
        
        {isLoading && (
          <div className="text-white text-center">Loading movies...</div>
        )}

        {error && (
          <div className="text-red-400 text-center">Error: {error}</div>
        )}

        {!isLoading && !error && movies.length > 0 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-4 lg:gap-x-5 lg:gap-y-5 justify-items-center">
              {movies.slice(0, 20).map((movie) => (
                <div key={movie.id} className="relative">
                  {/* Wrap the movie card with Link */}
                  <Link href={`/movie/${movie.id}`} className="block">
                    {/* Movie card */}
                    <div className="border-black w-68 sm:w-48 md:w-44 lg:w-48 h-72 bg-gray-800 rounded-xl relative overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                      <Image
                        src={getImageUrl(movie.poster_path)}
                        alt={movie.title}
                        fill
                        className="object-cover rounded-xl transition-opacity duration-300 hover:opacity-70"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      />
                      
                      {/* Rating badge - positioned in top-right corner */}
                      <div className="absolute top-2 right-2 bg-[#F6B222] text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                        <span className="mr-1 mb-0.5">★</span>
                        {movie.vote_average.toFixed(1)}
                      </div>
                      

                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}