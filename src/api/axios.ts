import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASE_URL as string,
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_TMDB_TOKEN as string}`,
    },
});

export default api;