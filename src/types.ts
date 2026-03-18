export interface Movie {
    id: number
    title: string
    overview: string
    poster_path: string
    backdrop_path: string
    release_date: string
    vote_average: number
    vote_count: number
    runtime?: number
    tagline?: string
    genres: Genre[]
}

export interface Genre {
    id: number
    name: string
}