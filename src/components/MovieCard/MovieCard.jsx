import NoPoster from '../../images/No_poster _image.jpg';
import {
  CardDetails,
  CardWrapper,
  DetailsWrapper,
  Image,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  console.log(movie);
  const {
    original_title,
    overview,
    release_date,
    genres,
    vote_average,
    poster_path,
  } = movie;
  const movieGenres = genres?.map(({ name }) => name + ' , ');
  const dateMovie = release_date?.slice(0, 4);
  const score = vote_average?.toFixed(1);

  return (
    <CardWrapper>
      <Image
        src={
          poster_path
            ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`
            : NoPoster
        }
        alt={original_title || 'No poster'}
      />

      <DetailsWrapper>
        <h2>
          {original_title} : {dateMovie}
        </h2>
        <CardDetails>User score: {score}</CardDetails>
        <h2>Overview</h2>
        <CardDetails>{overview}</CardDetails>
        <h2>Genres</h2>
        <CardDetails>{movieGenres} </CardDetails>
      </DetailsWrapper>
    </CardWrapper>
  );
};
