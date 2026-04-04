import { AlertCircle } from 'lucide-react';
import MovieCard from './MovieCard';
import SkeletonCard from './SkeletonCard';

export interface Movie {
    id: number;
    title: string;
    year: number;
    posterUrl: string;
    letterboxdUrl: string;
}

type ResultsState = 'idle' | 'loading' | 'success' | 'error';

interface ResultsSectionProps {
    state: ResultsState;
    movies: Movie[];
    user1?: string;
    user2?: string;
    errorMessage?: string;
}

const ResultsSection = ({ state, movies, user1, user2, errorMessage }: ResultsSectionProps) => {
    if (state === "idle") return null;

    return (
        <section id="results" className="relative border-t border-border/50 py-16 px-4">
            <div className="container mx-auto max-w-5xl">
                {state === "error" && (
                    <div className="mx-auto max-w-md rounded-lg border border-destructive/30 bg-destructive/5 px-5 py-4 text-center">
                        <AlertCircle className="mx-auto mb-2 h-5 w-5 text-destructive" />
                        <p className="text-sm text-foreground">
                            {errorMessage || "We couldn't fetch one of those profiles. Try again later."}
                        </p>
                    </div>
                )}

                {state === "loading" && (
                    <>
                        <p className="mb-8 text-center text-sm text-muted-foreground">
                            Comparing <span className="text-foreground font-medium">{user1}</span> and{" "}
                            <span className="text-foreground font-medium">{user2}</span>…
                        </p>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <SkeletonCard key={i} />
                            ))}
                        </div>
                    </>
                )}

                {state === "success" && (
                    <>
                        <div className="mb-8 text-center">
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                                Shared picks
                            </h2>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {movies.length} films on both watchlists
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {movies.map((movie, i) => (
                                <div
                                    key={movie.id}
                                    className="opacity-0 animate-fade-in"
                                    style={{ animationDelay: `${i * 60}ms` }}
                                >
                                    <MovieCard
                                        title={movie.title}
                                        year={movie.year}
                                        posterUrl={movie.posterUrl}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ResultsSection;