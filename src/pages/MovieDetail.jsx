import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieById } from '../api/movies.js'
import useWatchlistStore from '../store/useWatchlistStore.js'
import Spinner from "../components/Spinner.jsx";

function MovieDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addToWatched, isInWatched } = useWatchlistStore()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await getMovieById(id)
                setMovie(response.data)
            } catch (error) {
                setError('Что-то пошло не так')
            } finally {
                setLoading(false)
            }
        }
        getMovie()
    }, [id])

    if (loading) return <Spinner />
    if (error) return <div className="flex items-center justify-center h-64 text-red-400">{error}</div>

    return (
        <div className="max-w-5xl mx-auto px-8 py-10">
            <button
                onClick={() => navigate(-1)}
                className="text-white/40 hover:text-white text-sm tracking-widest uppercase mb-8 transition-colors"
            >
                ← Назад
            </button>
            <div className="flex gap-10">
                <div className="flex-shrink-0">
                    <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                        className="w-56 rounded-xl shadow-2xl"
                    />
                </div>
                <div className="flex flex-col justify-center gap-4">
                    <h1 style={{ fontFamily: 'Bebas Neue' }} className="text-5xl tracking-wide text-white">
                        {movie.title}
                    </h1>
                    <p className="text-amber-400 text-lg">⭐ {movie.vote_average.toFixed(1)}</p>
                    <p className="text-white/50 text-sm">{movie.release_date?.slice(0, 4)}</p>
                    <p className="text-white/70 leading-relaxed max-w-xl">{movie.overview}</p>
                    <button
                        onClick={() => addToWatched(movie)}
                        className={`mt-2 self-start px-6 py-2 rounded-full text-sm tracking-widest uppercase font-medium transition-all ${
                            isInWatched(movie.id)
                                ? 'bg-white/10 text-white/40 cursor-default'
                                : 'bg-amber-400 text-black hover:bg-amber-300'
                        }`}
                    >
                        {isInWatched(movie.id) ? '✓ В списке' : '+ Добавить'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail