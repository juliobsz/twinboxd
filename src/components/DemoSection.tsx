import MovieCard from './MovieCard';

interface Movie {
    id: number;
    title: string;
    year: number;
    posterUrl: string;
}

const demoMovies = [
    { id: 1, title: 'Kill Bill: Vol. 1', year: 2003, posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_face/ehH7MhudehcWQq2Zjs8VZmKR0qb.jpg' },
    { id: 2, title: 'Whiplash', year: 2014, posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_face/9D4hOGCaMmsuQNZwilKI85U6qr.jpg' },
    { id: 3, title: 'La Haine', year: 1995, posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_face/8rgPyWjYZhsphSSxbXguMnhN7H0.jpg' },
    { id: 4, title: 'The Silent of the Lambs', year: 1991, posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_face/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg' },
    { id: 5, title: 'Marty Supreme', year: 2025, posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_face/lYWEXbQgRTR4ZQleSXAgRbxAjvq.jpg' },
    { id: 6, title: 'Sinners', year: 2025, posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_face/q6ghYZEHqItvzsxhlp9GykM7fOH.jpg' },
    { id: 7, title: 'La La Land', year: 2016, posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_face/ozobdmMlse2FrQtoRhqUHCouSHL.jpg' },
    { id: 8, title: 'The Batman', year: 2022, posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_face/seyWFgGInaLqW7nOZvu0ZC95rtx.jpg' },
    { id: 9, title: 'John Wick', year: 2014, posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_face/TxbvYS8wsgYSpYZtQLZXnoVOIQ.jpg' },
    { id: 10, title: 'Fight Club', year: 1999, posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_face/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg' },
];

const DemoSection = () => {
    return (
        <section className="border-t border-border/50 py-16 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <p className="text-xs font-medium uppercase tracking-widest text-primary mb-2">
                        Example result
                    </p>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                        Shared picks
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        10 films on both watchlists
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {demoMovies.map((movie: Movie, i: number) => (
                        <div
                            key={movie.id}
                            className="opacity-0 animate-fade-in"
                            style={{ animationDelay: `${i * 80}ms` }}
                        >
                            <MovieCard title={movie.title} year={movie.year} posterUrl={movie.posterUrl}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DemoSection;