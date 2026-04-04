import React, {FormEvent, useState} from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Search } from 'lucide-react';

interface HeroFormProps {
    onSubmit: (leftUsername: string, rightUsername: string) => void;
    isLoading: boolean;
}
interface FormErrors {
    leftUsername?: string;
    rightUsername?: string;
    sameUsername?: string;
}

const HeroForm = ({ onSubmit, isLoading }: HeroFormProps ) => {
    const [leftUsername, setLeftUsername] = useState('');
    const [rightUsername, setRightUsername] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): FormErrors => {
        const nextErrors: FormErrors = {};

        if (!leftUsername.trim()) nextErrors.leftUsername = 'Please enter the first username.';
        if (!rightUsername.trim()) nextErrors.rightUsername = 'Please enter the second username.';
        if (leftUsername.trim() === rightUsername.trim()) nextErrors.sameUsername = 'Please enter different usernames.';

        return nextErrors;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nextErrors = validateForm();
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) return;

        setErrors({});
        onSubmit(leftUsername, rightUsername);
    };

    const leftAriaDescribedBy = [
        errors.leftUsername ? 'leftUsernameError' : null,
        errors.sameUsername ? 'sameUsernameError' : null,
    ].filter(Boolean).join(' ') || undefined;

    const rightAriaDescribedBy = [
        errors.rightUsername ? 'rightUsernameError' : null,
        errors.sameUsername ? 'sameUsernameError' : null,
    ].filter(Boolean).join(' ') || undefined;

    return (
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 pt-14">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 left-1/2 h-125 w-200 -translate-x-1/2 rounded-full bg-primary/4 blur-[120px]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl text-center">
                <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                    Find the films hiding in both watchlists.
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-lg mx-auto">
                    Paste two Letterboxd usernames. Instantly see the movies you both want to watch.
                </p>

                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-10 w-full max-w-xl mx-auto"
                >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-2">
                        <div className="w-full sm:flex-1">
                            <input
                                id="leftUsername"
                                type="text"
                                value={leftUsername}
                                onChange={(e) => setLeftUsername(e.target.value)}
                                placeholder="Letterboxd username"
                                className="h-12 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
                                aria-invalid={Boolean(errors.leftUsername || errors.sameUsername)}
                                aria-describedby={leftAriaDescribedBy}
                            />
                            <div className={'mt-1 min-h-5 text-left ' + errors.leftUsername ? 'flex' : 'hidden'}>
                                {errors.leftUsername ? (
                                    <p
                                        id="leftUsernameError"
                                        role="alert"
                                        aria-live="polite"
                                        className="animate-fade-in inline-flex rounded-full border border-red-300/40 bg-red-400/10 px-2.5 py-0.5 text-xs font-medium text-red-200"
                                    >
                                        {errors.leftUsername}
                                    </p>
                                ) : (
                                    <span aria-hidden="true" className="inline-block h-5" />
                                )}
                            </div>
                        </div>

                        <div className="w-full sm:flex-1">
                            <input
                                id="rightUsername"
                                type="text"
                                value={rightUsername}
                                onChange={(e) => setRightUsername(e.target.value)}
                                placeholder="Letterboxd username"
                                className="h-12 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
                                aria-invalid={Boolean(errors.rightUsername || errors.sameUsername)}
                                aria-describedby={rightAriaDescribedBy}
                            />
                            <div className={'mt-1 min-h-5 text-left ' + errors.rightUsername ? 'flex' : 'hidden'}>
                                {errors.rightUsername ? (
                                    <p
                                        id="rightUsernameError"
                                        role="alert"
                                        aria-live="polite"
                                        className="animate-fade-in inline-flex rounded-full border border-red-300/40 bg-red-400/10 px-2.5 py-0.5 text-xs font-medium text-red-200"
                                    >
                                        {errors.rightUsername}
                                    </p>
                                ) : (
                                    <span aria-hidden="true" className="inline-block h-5" />
                                )}
                            </div>
                        </div>

                        <div className="w-full sm:w-auto">
                            <Button
                                type="submit"
                                variant="hero"
                                size="lg"
                                disabled={isLoading || !leftUsername.trim() || !rightUsername.trim()}
                                className="h-12 w-full whitespace-nowrap sm:w-auto"
                            >
                                {isLoading ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <Search className="h-4 w-4" />
                                )}
                                {isLoading ? 'Comparing…' : 'Compare watchlists'}
                            </Button>
                        </div>
                    </div>

                    {errors.sameUsername && (
                        <p
                            id="sameUsernameError"
                            role="alert"
                            aria-live="polite"
                            className="animate-fade-in inline-flex mt-4 md:mt-0 rounded-full border border-red-300/40 bg-red-400/10 px-2.5 py-1.5 text-left text-xs font-medium text-red-200"
                        >
                            {errors.sameUsername}
                        </p>
                    )}
                </form>

                <p className="mt-3 md:mt-2 lg:mt-1 text-[0.85rem] text-muted-foreground/70">
                    Public Letterboxd profiles only.
                </p>
            </div>
        </section>
    );
};

export default HeroForm;