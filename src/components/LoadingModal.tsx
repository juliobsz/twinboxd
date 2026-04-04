"use client";

import { useState, useEffect } from 'react';

interface LoadingModalProps {
    open: boolean,
    onSubmit?: (leftUsername: string, rightUsername: string) => Promise<void>
}

export function LoadingModal({open, onSubmit}: LoadingModalProps) {
    const loadingTexts = [
        "Lighting the projector...",
        "Reading the scripts...",
        "Asking Scorsese for his opinion...",
        "Tuning the audio mix...",
        "Wait, neither of you have seen The Godfather?",
        "Rolling out the red carpet...",
        "Cutting to the chase...",
        "Finalizing the final cut..."
    ];
    const [currentText, setCurrentText] = useState(loadingTexts[0]);
    const [remainingTexts, setRemainingTexts] = useState(loadingTexts.slice(1));

    useEffect(() => {
        if (!open) return;

        setCurrentText(loadingTexts[0]);
        setRemainingTexts(loadingTexts.slice(1));

        const interval = setInterval(() => {
            setRemainingTexts((prev: string[]) => {
                if (!prev.length) return prev;

                const randomIndex = Math.floor(Math.random() * prev.length);
                const nextText = prev[randomIndex];
                setCurrentText(nextText);

                return prev.filter((_: string, idx: number) => idx !== randomIndex);
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [open]);
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-live="assertive"
            aria-label="Comparing watchlists"
        >
            <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-2xl">
                <h2 className="text-2xl font-semibold text-foreground">Comparing watchlists</h2>
                <p className="mt-4 text-base text-muted-foreground min-h-6">
                    {currentText}
                </p>
                <div className="mx-auto mt-6 flex justify-center">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-border border-t-primary"/>
                </div>
            </div>
        </div>
    );
}

