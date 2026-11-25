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
