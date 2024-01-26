import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("2023");
  const [section, setSection] = useState("Discover");
  const [movies, setMovies] = useState([]);

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
