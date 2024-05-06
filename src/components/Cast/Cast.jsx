import { castMovie } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Image, Name, Wrapper } from './Cast.styled';
import NoImage from '../../images/No_image.png';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === '') return;
    async function getMovies() {
      try {
        const movieCast = await castMovie(movieId);
        setMovieCast(movieCast);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, [movieId]);
  return (
    <>
      {' '}
      {castMovie.length === 0 ? (
        <p>Cast not find</p>
      ) : (
        <Container>
          {movieCast.map(({ id, name, profile_path}) => (
            <Wrapper key={id}>
              <Image
                src={
                  profile_path
                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`
                    : NoImage
                }
                alt={name}
                width="120"
              />
              <Name>{name}</Name>
            </Wrapper>
          ))}
        </Container>
      )}
    </>
  );
};

export default Cast;

