import api  from "./axios";
import {Movie} from "../types";

export  const getPopularMovies = () =>
    api.get<{results: Movie[]}>('/movie/popular');

export const searchMovies = (query: string) =>
    api.get<{results: Movie[]}>('/search/movie', { params: {query} });

export const getMovieById = (id: string) =>
    api.get<Movie>(`/movie/${id}`);