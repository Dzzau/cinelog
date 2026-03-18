import { useState } from "react"
import MovieCard from "../components/MovieCard"
import SearchBar from "../components/SearchBar"
import useMovieSearch from "../hooks/useMovieSearch"
import Spinner from "../components/Spinner";

function Home() {
    const [query, setQuery] = useState("")
    const { movies, loading, error } = useMovieSearch(query)

    if (loading) return (
        <Spinner />
    )
    if (error) return (
        <div className="flex items-center justify-center h-64 text-red-400">
            {error}
        </div>
    )

    return (
        <div className="px-8 py-8 max-w-7xl mx-auto">
            <div className="mb-10">
                <h1 style={{ fontFamily: 'Bebas Neue' }} className="text-5xl tracking-widest text-white mb-2">
                    {query ? `Результаты: ${query}` : 'Популярное'}
                </h1>
                <div className="mt-6">
                    <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Home