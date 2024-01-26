import { useContext } from "react";
import MovieCard from "./MovieCard.jsx";
import "../App.css";
import SearchIcon from "../search.svg";
import { MovieContext } from "../utils/contextAPI/MovieContext";

const MovieSection = () => {
  const { searchTerm, section, movies } = useContext(MovieContext); 

  return (
    <>
      Movie Section
      <p>Search Term: {searchTerm}</p>
      <p>Section: {section}</p>
    </>
  );
};

export default MovieSection;
