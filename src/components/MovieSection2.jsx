import { useContext } from "react";
import MovieCard from "./MovieCard.jsx";
import MovieCard2 from "./MovieCard2.jsx";
import SearchIcon from "../search.svg";
import { MovieContext } from "../utils/contextAPI/MovieContext.jsx";
import getData from "../utils/hooks/getData.js";

const MovieSection2 = () => {
  const {
    searchTerm,
    setSearchTerm,
    section,
    movies,
    setRunSearch,
  } = useContext(MovieContext);

  const handleButtonClick = () => {
    console.log(
      "hi",
      document.getElementsByName("searchTermField")[0].value
    );
    setSearchTerm(
      document.getElementsByName("searchTermField")[0].value
    );
    setRunSearch(true);
  };

  let errorMsg = getData(); 

  return (
    <div className="app">
      <h1>Movie App - {section}</h1>
      <form>
        <div className="search">
          <input
            value={searchTerm}
            name="searchTermField"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={handleButtonClick}
          />
        </div>
      </form>

      {movies ? (
        <div className="container">
          {movies.results.map((movie) => (
            <MovieCard2
              movieTitle={movie.title}
              key={movie.id}
              moviePoster={movie.poster_path}
              releaseDate={movie.release_date}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found </h2>
        </div>
      )}
    </div>
  );
};

export default MovieSection2;
