import React from "react";
import Home from "./Home";
import MovieSection from "./MovieSection";
import MovieSection2 from "./MovieSection2";
// import the MovieProvider from the MovieContext
import { MovieProvider } from "../utils/contextAPI/MovieContext";

// Rest of the code...

export default function Main() {
  let source = "moviedb"; // moviedb or omdbapi

  return (
    <div>
      {/* Wrap the Home component with the MovieProvider */}
      <MovieProvider> 
        {source === "moviedb" ? (
          <MovieSection2 />
        ) : (
          <MovieSection />
        )}
      </MovieProvider>
    </div>
  );
}
