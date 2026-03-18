import {create} from "zustand";
import {persist} from "zustand/middleware";
import {Movie} from "../types";

interface WatchlistStore {
    watched: Movie[];
    addToWatched: (movie: Movie) => void;
    removeFromWatched: (id: number) => void;
    isInWatched: (id: number) => boolean;
}

const useWatchlistStore = create<WatchlistStore>()(
    persist(
        (set, get) =>({
            watched: [],

            addToWatched: (movie) =>
                set((state) =>({watched: [...state.watched, movie]})),

            removeFromWatched: (id) =>
                set((state) =>({watched: state.watched.filter(m => m.id !== id)})),

            isInWatched: (id) => get().watched.some(m => m.id === id),
        }),
        {name: 'cinelog-watchlist'}
    )
)

export default useWatchlistStore;