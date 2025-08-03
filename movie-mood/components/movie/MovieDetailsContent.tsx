import { MovieDetailsContentProps } from "@/interfaces";

const MovieDetailsContent: React.FC<MovieDetailsContentProps> = ({ movie }) => {
  const getImageUrl = (path: string | null, size: string = 'w500'): string => {
    if (!path) return '/placeholder-movie.jpg';
    return `https://image.tmdb.org/t/p/${size}${path}`;
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        {movie.overview}
      </p>
    </>
  );
};

export default MovieDetailsContent;