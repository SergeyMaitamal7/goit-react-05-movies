import { movieDetails } from 'api/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from) ?? '/';

  useEffect(() => {
    if (movieId === '') return;
    async function getMovies() {
      const moviesDitails = await movieDetails(movieId);
      if (!moviesDitails) {
        alert('Not found');
      }
      setMovie(moviesDitails);
    }
    getMovies();
  }, [movieId]);

  return (
    <main>
      <Link to={backLinkHref.current}>
        <h2>Back to Movies</h2>
      </Link>
      <MovieCard movie={movie} />
      <div>
        <Link to="cast" state={{ from: location.state.from }}>
          <h3>Cast</h3>
        </Link>

        <Link to="reviews" state={{ from: location.state.from }}>
          <h3>Reviews</h3>
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
