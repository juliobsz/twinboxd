const SkeletonCard = () => {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg bg-card border border-border/50">
            <div className="aspect-2/3 w-full animate-pulse-soft bg-surface" />
            <div className="flex flex-col gap-2 p-3">
                <div className="h-3.5 w-3/4 animate-pulse-soft rounded bg-surface" />
                <div className="h-3 w-1/3 animate-pulse-soft rounded bg-surface" />
            </div>
        </div>
    );
};

export default SkeletonCard;