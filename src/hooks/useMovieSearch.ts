import {useEffect, useState} from "react";
import {getPopularMovies, searchMovies} from "../api/movies";
import {Movie} from "../types";

function useMovieSearch(query: string) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            const getMovies = async () => {
                try {
                    const response = query
                    ? await searchMovies(query)
                        : await getPopularMovies();
                    setMovies(response.data.results);
                }
                catch (error) {
                    setError('Something went wrong');
                }
                finally {
                    setLoading(false);
                }
            }
            getMovies();
        }, 500)

        return () => clearTimeout(timer);

    }, [query]);

    return { movies, loading, error };

}

export default useMovieSearch;


