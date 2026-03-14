import {useEffect, useState} from "react";
import {getPopularMovies, searchMovies} from "../api/movies.js";

function useMovieSearch(query) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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


