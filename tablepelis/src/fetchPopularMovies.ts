import type { MoviesPage } from "./types";
import { type Result } from "./types";
import { type ApiError } from "./types";
import { fetchJson } from "./fetchJson";
import { isMoviesPage } from "./guards";
import { TMDB_KEY } from "./env";

export async function fetchPopularMovies(
  page: number,
  signal: AbortSignal,
): Promise<Result<MoviesPage, ApiError>> {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&page=${page}`;

  return fetchJson(url, signal, isMoviesPage);
}
