import { useEffect, useState } from "react";
import type { RequestState } from "./types";
import type { MoviesPage } from "./types";
import type { ApiError } from "./types";
import { fetchPopularMovies } from "./fetchPopularMovies";

export function useMovies(page: number): RequestState<MoviesPage, ApiError> {
  const [state, setState] = useState<RequestState<MoviesPage, ApiError>>({
    status: "loading",
  });

  useEffect(() => {
    setState({ status: "loading" });
    const controller = new AbortController();

    fetchPopularMovies(page, controller.signal).then((result) => {
      if (controller.signal.aborted) {
        return;
      } else if (result.ok) {
        setState({ status: "success", data: result.data });
      } else {
        setState({ status: "error", error: result.error });
      }
    });

    return () => {
      controller.abort();
    };
  }, [page]);

  return state;
}
