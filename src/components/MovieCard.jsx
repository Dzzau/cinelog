import { Link } from 'react-router-dom'
import { memo } from 'react'

const MovieCard = memo(function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`} className="group block">
            <div className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10 transition-all duration-300 group-hover:border-amber-400/40 group-hover:scale-105">
                <div className="aspect-[2/3] overflow-hidden">
                    <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                    <h2 className="text-sm font-medium text-white line-clamp-1">{movie.title}</h2>
                    <p className="text-amber-400 text-xs mt-1">⭐ {movie.vote_average.toFixed(1)}</p>
                </div>
            </div>
        </Link>
    )
})

export default MovieCard