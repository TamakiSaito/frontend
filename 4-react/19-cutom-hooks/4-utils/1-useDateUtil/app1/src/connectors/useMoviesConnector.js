import { useState, useEffect } from "react";

export default function useMoviesConnector() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    // Loading中のフラグ
    setIsLoading(true);
    try {
      const response = await fetch("https://yts.mx/api/v2/list_movies.json");
      const json = await response.json();
      setMovies(json.data.movies);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // mounted
  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, isLoading, error, fetchMovies };
}
