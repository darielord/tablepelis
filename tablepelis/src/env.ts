const key = import.meta.env.VITE_TMDB_KEY;

if (typeof key !== "string" || key === "") {
  throw new Error("falta VITE_TMDB_KEY");
}
export const TMDB_KEY = key;
