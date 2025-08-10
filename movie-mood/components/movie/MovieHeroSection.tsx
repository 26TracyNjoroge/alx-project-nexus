import Image from 'next/image';
import { MovieHeroSectionProps } from '@/interfaces';

const MovieHeroSection: React.FC<MovieHeroSectionProps> = ({ movie }) => {
  const getImageUrl = (path: string | null, size: string = 'w500'): string => {
    if (!path) return '/placeholder-movie.jpg';
    return `https://image.tmdb.org/t/p/${size}${path}`;
  };

  const formatRuntime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div className="relative h-[60vh] overflow-hidden ">
      <div className="absolute inset-0">
        <Image
          src={getImageUrl(movie.backdrop_path, 'w1280')}
          alt={movie.title}
          fill
          className="object-cover sm:object"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#101014] bg-opacity-60"></div>
      </div>
      
      {/* Movie Info Overlay */}
      <div className="relative z-10 flex items-end h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-left md:items-left gap-6">
            {/* Poster */}
            <div className="flex-shrink-0">
              <div className="w-48 h-72 relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={getImageUrl(movie.poster_path)}
                  alt={movie.title}
                  fill
                  className="object-cover md:object-fill sm:object-fill"
                />
              </div>
            </div>
            
            {/* Movie Info */}
            <div className="flex-grow">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center bg-yellow-500 text-black px-3 py-1 rounded-full">
                  <span className="mr-1">★</span>
                  <span className="font-bold">{movie.vote_average.toFixed(1)}</span>
                </div>
                <span className="text-gray-300">
                  {new Date(movie.release_date).getFullYear()}
                </span>
                <span className="text-gray-300">
                  {formatRuntime(movie.runtime)}
                </span>
              </div>
              
              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHeroSection;