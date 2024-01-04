import { useEffect } from 'react';

// 287dadeb

const App = () => {

  const API_URL = 'http://www.omdbapi.com/?apikey=';

  const searchMovies = async (title) => {
    const url = `${API_URL}${import.meta.env.VITE_OMDB_API_KEY}&s=${title}`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

  }
  const searchMovies2 = (title) => {
    const url = `${API_URL}${import.meta.env.VITE_OMDB_API_KEY}&s=${title}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log('Error:', e);
      })
  }
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <>
      hi
    </>
  )
}

export default App
