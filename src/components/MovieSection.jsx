import { useContext } from "react";
import MovieCard from "./MovieCard.jsx";
import SearchIcon from "../search.svg";
import { MovieContext } from "../utils/contextAPI/MovieContext";
import getData from "../utils/hooks/getData";

const MovieSection = () => {
  const { searchTerm, setSearchTerm, section, movies, setRunSearch } =
    useContext(MovieContext);

  const handleButtonClick = () => {
    console.log('hi', document.getElementsByName("searchTermField")[0].value);
    setSearchTerm(document.getElementsByName("searchTermField")[0].value);
    setRunSearch(true);
  };

  let errorMsg = getData();

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <form>
        <div className="search">
          <input
            value={searchTerm}
            name="searchTermField"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img src={SearchIcon} alt="search" onClick={handleButtonClick} />
        </div>
      </form>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found {movies?.Search}</h2>
        </div>
      )}
    </div>
  );
};

export default MovieSection;
