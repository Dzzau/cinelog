import useWatchlistStore from '../store/useWatchlistStore.js'
import { Link } from 'react-router-dom'

function Watchlist() {
    const { watched, removeFromWatched } = useWatchlistStore()

    if (watched.length === 0) return (
        <div className="flex flex-col items-center justify-center h-64 gap-4">
            <p className="text-white/30 text-lg">Список пуст</p>
            <Link to="/" className="text-amber-400 text-sm hover:underline">
                Найти фильмы →
            </Link>
        </div>
    )

    return (
        <div className="px-8 py-8 max-w-7xl mx-auto">
            <h1 style={{ fontFamily: 'Bebas Neue' }} className="text-5xl tracking-widest text-white mb-8">
                Мой список
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {watched.map(movie => (
                    <div key={movie.id} className="relative group">
                        <Link to={`/movie/${movie.id}`} className="block">
                            <div className="relative overflow-hidden rounded-lg border border-white/10 group-hover:border-amber-400/40 transition-all">
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                                    <p className="text-sm text-white line-clamp-1">{movie.title}</p>
                                </div>
                            </div>
                        </Link>
                        <button
                            onClick={() => removeFromWatched(movie.id)}
                            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/70 text-white/60 hover:text-red-400 hover:bg-black transition-all text-xs opacity-0 group-hover:opacity-100"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Watchlist