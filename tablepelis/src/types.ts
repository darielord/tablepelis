export type Movie = {
  readonly id: number;
  readonly title: string;
  readonly release_date: string;
  readonly poster_path: string | null;
  readonly vote_average: number;
};

export type MoviesPage = {
  readonly total_pages: number;
  readonly page: number;
  readonly results: readonly Movie[];
};

export type ApiError =
  | { readonly kind: "network" }
  | { readonly kind: "http"; readonly status: number }
  | { readonly kind: "invalid-data" };

export type Result<T, E> =
  | { readonly ok: true; readonly data: T }
  | { readonly ok: false; readonly error: E };
