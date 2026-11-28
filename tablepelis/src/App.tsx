import { useMovies } from "./useMovies";
import { renderMovies } from "./renderMovies";

import "./App.css";

function App() {
  const state = useMovies(1);

  return <>{renderMovies(state)}</>;
}

export default App;
