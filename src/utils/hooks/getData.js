import React, { useEffect, useContext } from "react";
import { MovieContext } from "../contextAPI/MovieContext";
 
const getData = () => {
  // use context
  const { searchTerm, runSearch, setRunSearch, movies, setMovies } =
    useContext(MovieContext);
  let errorMsg = null;

  // 1. useEffect() -> searchMovies()
  useEffect(() => {
    if (runSearch) {
      console.log("Run the search");
      searchMovies();
      setRunSearch(false);
    } else {
      console.log("not run the search");
    }
  }, [searchTerm, runSearch]);
 
  // 2. SearchMovies() setMovies()
  const searchMovies = () => {
    const API_URL = "http://www.omdbapi.com/?apikey=";
    const url = `${API_URL}${
      import.meta.env.VITE_OMDB_API_KEY
    }&s=${searchTerm}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          errorMsg = data.Error;
        }
        console.log("movies suc");
      })
      .catch((err) => {
        console.log(err);
        errorMsg = err;
      });
  };

  // return the errorMsg, no need for movies as it is state
  return { errorMsg };
};

export default getData;
