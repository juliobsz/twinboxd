export interface WatchlistMovieDto {
  title: string;
  year?: number;
  slug: string;
  letterboxdUrl: string;
  tmdbId: number | null;
  tmdbTitle: string | null;
  releaseDate: string | null;
  imageUrl: string | null;
}

export interface WatchlistResponseDto {
  username: string;
  count: number;
  watchlistUrl: string;
  movies: WatchlistMovieDto[];
}