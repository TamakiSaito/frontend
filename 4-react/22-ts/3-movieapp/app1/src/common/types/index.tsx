export interface Movie {
  title: string
  rating: number
  year: number
  large_cover_image: string
  genres: string[]
  runtime: number
}

export type MoviesType = Movie[];

export interface MoviesProps {
  movies: MoviesType;
}
