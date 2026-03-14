import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from "./components/Navbar.jsx"
import Spinner from "./components/Spinner.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const Home = lazy(() => import('./pages/Home'))
const MovieDetail = lazy(() => import('./pages/MovieDetail'))
const Watchlist = lazy(() => import('./pages/Watchlist'))

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                    <Route path="/watchlist" element={<ProtectedRoute>
                        <Watchlist />
                    </ProtectedRoute>} />

                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App