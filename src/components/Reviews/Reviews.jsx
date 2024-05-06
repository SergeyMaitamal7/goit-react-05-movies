import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsMovie } from 'api/api';
import { Author, Content, Wrapper } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    async function getRevievs() {
      const reviews = await reviewsMovie(movieId);
      if (!reviews) {
        alert('Reviews not found');
      }
      console.log(reviews);
      setMovieReviews(reviews);
    }
    getRevievs();
  }, [movieId]);
  return (
    <>
      {reviews.map(({ id, author, content }) => (
        <Wrapper key={id}>
          <Author>Author: {author}</Author>
          <Content>{content}</Content>
        </Wrapper>
      ))}
    </>
  );
};

export default Reviews;
