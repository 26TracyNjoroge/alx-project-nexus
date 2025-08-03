export interface LayoutProp {
    children: React.ReactNode;
}

export interface MovieProp {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
}

 export interface MovieDetailProp {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  genres: { id: number; name: string }[];
  tagline: string;
  budget: number;
  revenue: number;
  spoken_languages: { iso_639_1: string; name: string }[];
  production_companies: { id: number; name: string; logo_path: string | null }[];
}


export interface MovieDetailViewProps {
  movie: MovieDetailProp;
  error?: string;
}

export interface MovieDetailsContentProps {
  movie: {
    overview: string;
    production_companies: { id: number; name: string; logo_path: string | null }[];
  };
}

export interface MovieHeroSectionProps {
  movie: {
    title: string;
    poster_path: string;
    backdrop_path: string;
    tagline: string;
    vote_average: number;
    release_date: string;
    runtime: number;
    genres: { id: number; name: string }[];
  };
}

export interface MovieDetailPageProps {
  movie: MovieDetailProp;
  error?: string;
}