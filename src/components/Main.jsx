import React from 'react';
import Home from './Home';
import MovieCard from './MovieCard';
import MovieSection from './MovieSection';
// import the MovieProvider from the MovieContext
import { MovieProvider } from '../utils/contextAPI/MovieContext';

// Rest of the code...

export default function Main() {
  return (
    <div>
      {/* Wrap the Home component with the MovieProvider */}
      <MovieProvider>  
        <MovieSection />
        {/* <MovieCard /> */}
      </MovieProvider>
    </div>
  );
}
