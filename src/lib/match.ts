import { WatchlistMovieDto } from '@/types/api';

export interface MatchedMovie {
  key: string;
  normalizedTitle: string;
  displayTitle: string;
  leftMovie: WatchlistMovieDto;
  rightMovie: WatchlistMovieDto;
  imageUrl: string | null;
}

export function normalizeMovieName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ");
}

export function mergeMatchesByName(
  leftMovies: WatchlistMovieDto[],
  rightMovies: WatchlistMovieDto[]
): MatchedMovie[] {
  const leftByTitle = new Map<string, WatchlistMovieDto>();

  for (const movie of leftMovies) {
    const normalized = normalizeMovieName(movie.title);
    if (normalized && !leftByTitle.has(normalized)) leftByTitle.set(normalized, movie);
  }

  const matches: MatchedMovie[] = [];

  for (const rightMovie of rightMovies) {
    const normalized = normalizeMovieName(rightMovie.title);
    const leftMovie = leftByTitle.get(normalized);

    if (!leftMovie) continue;

    matches.push({
      key: `${leftMovie.slug}__${rightMovie.slug}`,
      normalizedTitle: normalized,
      displayTitle: leftMovie.tmdbTitle ?? rightMovie.tmdbTitle ?? leftMovie.title,
      leftMovie,
      rightMovie,
      imageUrl: leftMovie.imageUrl ?? rightMovie.imageUrl
    });
  }

  return matches.sort((a, b) => a.displayTitle.localeCompare(b.displayTitle));
}

