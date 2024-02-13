import { useContext } from "react";
import MovieCard from "./MovieCard.jsx";
import SearchIcon from "../search.svg";
import { MovieContext } from "../utils/contextAPI/MovieContext.jsx";
import getData from "../utils/hooks/getData.js";

const MoviePage = () => {
  const {
    searchTerm,
    setSearchTerm,
    section,
    movies,
    setRunSearch,
    setSection,
  } = useContext(MovieContext);

  const handleButtonClick = () => {
    console.log(
      document.getElementsByName("searchTermField")[0].value
    );
    setSearchTerm(
      document.getElementsByName("searchTermField")[0].value
    );
    setRunSearch(true);
  };

  const changeSection = (section) => {
    // alert("section: " + section);
    setRunSearch(true);
    setSection(section);
  };

  let errorMsg = getData();

  return (
    <div className="app">
      <h1>Movie App</h1><h2>{section}</h2>
      <div className="container">
        <h3  className={section === 'Discover' ? 'h3-selected' : ''} onClick={(e) => changeSection("Discover")}>
          Discover
        </h3> |
        <h3 className={section === 'Top Rated' ? 'h3-selected' : ''} onClick={(e) => changeSection("Top Rated")}>
          Top Rated
        </h3>
        | <h3 className={section === 'Upcoming' ? 'h3-selected' : ''} onClick={(e) => changeSection("Upcoming")}>Upcoming</h3>
      </div>
      {/* <form>
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
      </form> */}

      {movies ? (
        <div className="container">
          {movies.results.map((movie) => (
            <MovieCard
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

export default MoviePage;
