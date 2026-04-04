'use client';

import { useCallback, useState } from 'react';
import Navbar from '@/components/Navbar';
import { LoadingModal } from '@/components/LoadingModal';
import HeroForm from '@/components/HeroForm';
import { ApiClientError, fetchWatchlist } from '@/lib/apiClient';
import { MatchedMovie, mergeMatchesByName } from '@/lib/match';
import Footer from '@/components/Footer';
import DemoSection from '@/components/DemoSection';
import ResultsSection, { Movie } from '@/components/ResultsSection';

type ResultsState = 'idle' | 'loading' | 'success' | 'error';

export default function HomePage() {
  const [leftUsername, setLeftUsername] = useState('');
  const [rightUsername, setRightUsername] = useState('');
  const [state, setState] = useState<ResultsState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleCompare = useCallback(async (leftUsername: string, rightUsername: string) => {
    setLeftUsername(leftUsername);
    setRightUsername(rightUsername);
    setState('loading');
    setErrorMessage(null);
    setMovies([]);

    try {
      const left = leftUsername.trim();
      const right = rightUsername.trim();

      const [leftResponse, rightResponse] = await Promise.all([
        fetchWatchlist(left),
        fetchWatchlist(right)
      ]);

      const mergedMatches = mergeMatchesByName(
          leftResponse.movies,
          rightResponse.movies
      );

      const mappedMovies: Movie[] = mergedMatches.map((match: MatchedMovie, index: number) => ({
        id: match.leftMovie.tmdbId ?? match.rightMovie.tmdbId ?? index,
        title: match.displayTitle,
        year: Number(match.leftMovie.releaseDate?.slice(0, 4)) ?? Number(match.rightMovie.releaseDate?.slice(0, 4)) ?? 0,
        posterUrl: match.imageUrl ?? '',
        letterboxdUrl: match.leftMovie.letterboxdUrl ?? match.rightMovie.letterboxdUrl ?? "",
      }));

      setMovies(mappedMovies);
      setState('success');
    } catch (error) {
      if (error instanceof ApiClientError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Unexpected error while loading watchlists.');
      }
      setState('error');
    }

    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  return (
    <main className="grain bg-background mx-auto min-h-screen w-full">
      <Navbar/>
      <LoadingModal open={state === 'loading'}/>
      <HeroForm onSubmit={handleCompare} isLoading={state === 'loading'}/>
      <ResultsSection
          state={state}
          movies={movies}
          user1={leftUsername}
          user2={rightUsername}
          errorMessage={errorMessage ?? undefined}
      />
      {state === 'idle' && <DemoSection />}
      <Footer/>
    </main>
  );
}

