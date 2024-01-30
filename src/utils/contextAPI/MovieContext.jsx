import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  // state variables 
  const [searchTerm, setSearchTerm] = useState("2024");
  const [section, setSection] = useState("Top Movies");
  const [movies, setMovies] = useState([]);

  // functions to update the state variables
  const setSearchTermHandler = (term) => {
    setSearchTerm(term);
  };

  const setSectionHandler = (section) => {
    setSection(section);
  };

  const setMoviesHandler = (movies) => {
    setMovies(movies);
  };

  return (
    <MovieContext.Provider
      value={{
        searchTerm,
        section,
        movies,
        setSearchTerm: setSearchTermHandler,
        setSection: setSectionHandler,
        setMovies: setMoviesHandler,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
