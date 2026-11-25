import { type Movie } from "./types";
import type { MoviesPage } from "./types";

export function isMovie(value: unknown): value is Movie {
  return (
    value !== null &&
    typeof value === "object" &&
    "id" in value &&
    "title" in value &&
    "release_date" in value &&
    "poster_path" in value &&
    "vote_average" in value &&
    typeof value.id === "number" &&
    typeof value.title === "string" &&
    typeof value.release_date === "string" &&
    (typeof value.poster_path === "string" || value.poster_path === null) &&
    typeof value.vote_average === "number"
  );
}

export function isMoviesPage(value: unknown): value is MoviesPage {
  return (
    value !== null &&
    typeof value === "object" &&
    "page" in value &&
    "total_pages" in value &&
    "results" in value &&
    typeof value.page === "number" &&
    typeof value.total_pages === "number" &&
    Array.isArray(value.results) &&
    value.results.every(isMovie)
  );
}
