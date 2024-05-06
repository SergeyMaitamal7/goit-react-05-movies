import { fetchTrendingMovies } from 'api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const movies = await fetchTrendingMovies();
      setMovies(movies);
    }
    getMovies();
  }, []);
  return (
    <main>
      {movies.length > 0 ? (
        <>

          <h2>Trending movie</h2>
          <MoviesList movies={movies} />
        </>
      ) : (
        <div>Загружаем... </div>
      )}
    </main>
  );
};
export default Home;
