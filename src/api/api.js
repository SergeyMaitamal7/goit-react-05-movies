import axios from 'axios';

const KEY = '022c68239ef1f98dfe9e02a4549079c6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/all/week?api_key=${KEY}`);
  return response.data.results;
};

export const searchMovie = async query => {
  // const response = await axios.get(
  //   `search/movie/?api_key=${KEY}&query=${query}&language=en-US`
  // );
  // console.log(response.json())
  const movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&language=en-US` 
  );
  const response = await movies.json();
  return response.results;
};

export const movieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  return response.data;
};

export const castMovie = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
  console.log(response.data.cast);
  return response.data.cast;
};


export const reviewsMovie = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
  console.log(response.data.results);
  return response.data.results;
};
