interface MovieCardProps {
    title: string;
    year: number;
    posterUrl: string;
    letterboxdUrl?: string;
}

const MovieCard = ({ title, year, posterUrl, letterboxdUrl }: MovieCardProps) => {
    const cardContent = (
        <div className="group relative flex flex-col overflow-hidden rounded-lg bg-card border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(var(--glow-primary)/0.08)]">
            <div className="relative aspect-2/3 w-full overflow-hidden bg-surface">
                <img
                    src={posterUrl}
                    alt={`${title} poster`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col gap-0.5 p-3">
                <h3 className="text-sm font-medium leading-snug text-foreground line-clamp-1">
                    {title}
                </h3>
                <span className="text-xs text-muted-foreground">{year}</span>
            </div>
        </div>
    );

    if (!letterboxdUrl) return cardContent;
    return (
        <a href={letterboxdUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} on Letterboxd`}>
            {cardContent}
        </a>
    );
};

export default MovieCard;