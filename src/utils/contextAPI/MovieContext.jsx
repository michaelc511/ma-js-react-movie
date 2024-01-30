import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  // state variables 
  const [searchTerm, setSearchTerm] = useState("2024");
  const [section, setSection] = useState("Top Movies");
  const [movies, setMovies] = useState([]);
  const [runSearch, setRunSearch] = useState(true);

  // functions to update the state variables
  // const setSearchTermHandler = (term) => {
  //   setSearchTerm(term);
  // };

  // const setSectionHandler = (section) => {
  //   setSection(section);
  // };

  // const setMoviesHandler = (movies) => {
  //   setMovies(movies);
  // };

  return (
    <MovieContext.Provider
      value={{
        searchTerm,
        section,
        movies,
        runSearch,
        setSearchTerm,
        setSection,
        setMovies,
        setRunSearch
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
