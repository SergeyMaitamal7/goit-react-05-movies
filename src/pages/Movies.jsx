import { searchMovie } from 'api/api';
import { Form } from 'components/Form/Form';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    async function getMovies() {
      if (movieName === '') {
        return;
      }
      try {
        const results = await searchMovie(movieName);
        if (results.length !== 0) {
          setMovies(results);
        } else {
          Notify.failure(`Movies ${movieName} is not found`);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, [movieName]);

  const handleSubmit = query => {
    console.log(query);
    setSearchParams({ query: query });
  };
  return (
    <main>
      <Form Submit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
