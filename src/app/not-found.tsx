import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="grain bg-background flex min-h-screen items-center justify-center px-4">
      <section className="animate-fade-in flex w-full max-w-2xl flex-col items-center rounded-3xl border border-border bg-card/80 px-6 py-16 text-center shadow-2xl shadow-black/20 backdrop-blur-sm sm:px-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Error 404
        </p>
        <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base">
          The page you&apos;re looking for does not exist, was moved, or may have been typed incorrectly.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="hero" size="lg">
            <Link href="/" className="!text-white/70 hover:!text-white">Go back home</Link>
          </Button>
          <Button asChild variant="subtle" size="lg">
            <Link href="https://github.com/juliobsz/letterboxd-match" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

