const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <a href="/" className="flex items-center gap-2 group items-center justify-center">
                    <img src="/letterboxd-match-no-bg.png" alt="logo" className="h-18 w-18"/>
                    <span className="text-2xl font-bold tracking-tight text-foreground">
                        Twinboxd
                    </span>
                </a>
                <a
                    href="https://github.com/juliobsz/letterboxd-match"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-muted-foreground hover:text-foreground transition-colors"
                >
                    Github
                </a>
            </div>
        </header>
    );
};

export default Navbar;