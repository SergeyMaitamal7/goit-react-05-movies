import { Link, useLocation } from 'react-router-dom';
import { CardWrapper, Container, Image, MoviesName } from './MoviesList.styled';
import NoPoster from '../../images/No_poster _image.jpg';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies &&
        movies.map(({ id, original_title, original_name, poster_path }) => (
          <CardWrapper>
            <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
              <Image
                src={
                  poster_path
                    ? `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
                    : NoPoster
                }
                alt={original_title}
              />
              <MoviesName>{original_title || original_name}</MoviesName>
            </Link>
          </CardWrapper>
        ))}
    </Container>
  );
};
