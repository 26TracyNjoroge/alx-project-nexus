import { GetServerSideProps } from 'next';
import MovieDetailView from '@/components/movie/MovieDetailView';
import { MovieDetailPageProps } from '@/interfaces';

const getMovieDetails = async (movieId: string | number) => {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;


  if (!API_KEY) {
    console.error('API key is missing');
    throw new Error('API key is missing');
  }

  const url = `${process.env.NEXT_PUBLIC_TMDB_API_URL}/${movieId}?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch movie details: ${response.status} - ${errorText}`);
    }

    const movieData = await response.json();
    
    return movieData;
  } catch (error) {
    throw error;
  }
};

const MovieDetailPage: React.FC<MovieDetailPageProps> = ({ movie, error }) => {
  
  if (error) {
    return (
      <div className="text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Movie</h1>
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Movie Not Found</h1>
          <p>The requested movie could not be found.</p>
        </div>
      </div>
    );
  }

  return <MovieDetailView movie={movie} error={error} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;


  try {
    const movie = await getMovieDetails(id as string);
    
    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    console.error('getServerSideProps error:', error);
    
    return {
      props: {
        movie: null,
        error: error instanceof Error ? error.message : 'Failed to load movie details',
      },
    };
  }
};

export default MovieDetailPage;