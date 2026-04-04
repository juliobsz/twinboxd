import { WatchlistResponseDto } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export class ApiClientError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiClientError';
    this.status = status;
  }
}

export function getApiBaseUrl(): string {
  if (!API_BASE_URL) throw new ApiClientError('Missing NEXT_PUBLIC_API_BASE_URL. Add it to your .env file.');

  return API_BASE_URL.replace(/\/$/, "");
}

export async function fetchWatchlist(username: string): Promise<WatchlistResponseDto> {
  const trimmedUsername = username.trim();

  if (!trimmedUsername) throw new ApiClientError('Username is required.', 400);

  const baseUrl = getApiBaseUrl();
  const endpoint = `${baseUrl}/api/watchlist/${encodeURIComponent(trimmedUsername)}`;

  const response = await fetch(endpoint, {
    headers: {
      Accept: 'application/json'
    },
    cache: 'no-store'
  });

  if (!response.ok) {
    let message: string | undefined;

    if (response.status === 404) {
      message = `Couldn't find Letterboxd user \"${trimmedUsername}\".`;
    } else if (response.status >= 500) {
      message = 'The watchlist service is unavailable right now. Please try again.';
    } else {
      message = `Failed to fetch watchlist for \"${trimmedUsername}\".`;
    }

    throw new ApiClientError(message, response.status);
  }

  return (await response.json()) as WatchlistResponseDto;
}
