const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-4">
      <div className="container mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">Letterboxd Match</span>
        </div>
        <p className="text-xs text-muted-foreground max-w-xs">
          Made for people who spend too long choosing a movie.
        </p>
        <a
          href="https://github.com/juliobsz/letterboxd-match"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub →
        </a>
      </div>
    </footer>
  );
};

export default Footer;
