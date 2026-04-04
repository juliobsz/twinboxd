const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-4">
      <div className="container mx-auto flex flex-col items-center gap-4 text-center">
        <img src="/twinboxd-no-bg.png" alt="logo" className="h-14 w-14 -mb-4"/>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">Twinboxd</span>
        </div>
        <p className="text-xs text-muted-foreground max-w-xs">
          Made for people who spend too long choosing a movie.
        </p>
        <a
          href="https://github.com/juliobsz/twinboxd"
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
