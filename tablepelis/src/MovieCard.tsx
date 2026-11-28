import type { Movie } from "./types";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="MovieCard">
      {movie.poster_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <p> Sin póster </p>
      )}
      <h3> {movie.title}</h3>
      <h3> {movie.release_date.slice(0, 4)}</h3>
      <h3> {movie.vote_average.toFixed(1)} </h3>
    </div>
  );
}
