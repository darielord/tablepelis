import { useMovies } from "./useMovies";
import { renderMovies } from "./renderMovies";
import { useState } from "react";

import "./App.css";

function App() {
  const [page, setPage] = useState(1);

  const state = useMovies(page);

  const totalpages =
    state.status === "success" ? Math.min(state.data.total_pages, 500) : null;

  return (
    <>
      {renderMovies(state)}
      <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
        Anterior
      </button>
      <p> Pagina {page}</p>
      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={totalpages === null || page >= totalpages}
      >
        Siguiente
      </button>
    </>
  );
}

export default App;
