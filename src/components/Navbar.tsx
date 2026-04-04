const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <a href="/" className="flex items-center gap-2 group">
                    <span className="text-sm font-semibold tracking-tight text-foreground">
            Letterboxd Match
          </span>
                </a>
                <a
                    href="https://github.com/juliobsz/letterboxd-match"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                    GitHub
                </a>
            </div>
        </header>
    );
};

export default Navbar;