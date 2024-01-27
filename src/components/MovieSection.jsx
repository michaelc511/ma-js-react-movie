import { useContext } from "react";
import MovieCard from "./MovieCard.jsx";
import "../App.css";
import SearchIcon from "../search.svg";

import { MovieContext } from "../utils/contextAPI/MovieContext";
import getData from "../utils/hooks/getData";

const MovieSection = () => {
  const { searchTerm, section, movies } = useContext(MovieContext); 

  let {error} = getData();
  
  return (
    <>
      Movie Section
      <p>Search Term: {searchTerm}</p>
      <p>Section: {section}</p>
      <p>Error: {error}</p>
    </>
  );
};

export default MovieSection;
