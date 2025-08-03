import MovieHeroSection from './MovieHeroSection';
import MovieDetailsContent from './MovieDetailsContent';
import { MovieDetailViewProps } from '@/interfaces';


const MovieDetailView: React.FC<MovieDetailViewProps> = ({ movie }) => {

  return (
      <div className="text-white">
        {/* Hero Section */}
        <MovieHeroSection movie={movie} />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <MovieDetailsContent movie={movie} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default MovieDetailView;