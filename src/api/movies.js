import api  from "./axios.js";

export  const getPopularMovies = () => api.get('/movie/popular');

export const searchMovies = (query) => api.get('/search/movie', { params: {query} });

export const getMovieById = (id) => api.get(`/movie/${id}`);