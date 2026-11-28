import { useMovies } from "./useMovies";
import { renderMovies } from "./renderMovies";
import { useState } from "react";

import "./App.css";

function App() {
  const [page, setPage] = useState(1);

  const state = useMovies(page);

  return (
    <>
      {renderMovies(state)}
      <button onClick={() => setPage((p) => p - 1)}>Anterior</button>
      <p> {page}</p>
      <button onClick={() => setPage((p) => p + 1)}>Siguiente</button>
    </>
  );
}

export default App;
