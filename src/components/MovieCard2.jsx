import React from 'react';

const MovieCard2 = ({ movieTitle, key, moviePoster, releaseDate }) => {

  return (
    <div className="movie" key={key}>
      <div>
        <p>{releaseDate}</p>
      </div>

      <div>
        <img src={moviePoster !== "N/A" ? 'https://image.tmdb.org/t/p/w500' +moviePoster : "https://via.placeholder.com/400"} alt={movieTitle} />
      </div>

      <div>
        <span> </span>
        <h3>{movieTitle}</h3>
      </div>
    </div>
  );
}

export default MovieCard2;