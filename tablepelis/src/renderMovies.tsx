import type { ReactNode } from "react";
import type { RequestState } from "./types";

import { type MoviesPage } from "./types";

import type { ApiError } from "./types";

export function renderMovies(
  state: RequestState<MoviesPage, ApiError>,
): ReactNode {
  switch (state.status) {
    case "idle":
      return <p> {"Buscar peli..."} </p>;

    case "loading":
      return <p>{"Cargando..."}</p>;

    case "error":
      switch (state.error.kind) {
        case "network":
          return <p>{"sin conexion..."}</p>;

        case "http":
          return <p>{"error del servidor..."}</p>;
        case "invalid-data":
          return <p>{"datos inesperados..."}</p>;
      }

    case "success":
      return (
        <ul>
          {state.data.results.map((movie) => (
            <li key={movie.id}>{movie.title} </li>
          ))}
        </ul>
      );

    default:
      const def: never = state;
      throw new Error(`error ${def}`);
  }
}
