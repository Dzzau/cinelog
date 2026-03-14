import { NavLink } from 'react-router-dom'
import {useState} from "react";

function Navbar() {


    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("isAuth"));
const handleAuth = () =>{ if (isAuth) {
    localStorage.removeItem('isAuth');
    setIsAuth(false);
} else {
    localStorage.setItem('isAuth', 'true');
    setIsAuth(true);
}}

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/10 backdrop-blur-md bg-black/40">
            <span style={{ fontFamily: 'Bebas Neue' }} className="text-3xl tracking-widest text-amber-400">
                CINELOG
            </span>
            <div className="flex items-center gap-8">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-sm tracking-widest uppercase transition-colors ${isActive ? 'text-amber-400' : 'text-white/60 hover:text-white'}`
                    }
                >
                    Главная
                </NavLink>
                <NavLink
                    to="/watchlist"
                    className={({ isActive }) =>
                        `text-sm tracking-widest uppercase transition-colors ${isActive ? 'text-amber-400' : 'text-white/60 hover:text-white'}`
                    }
                >
                    Мой список
                </NavLink>
                <button
                    onClick={handleAuth}
                    className={`text-sm tracking-widest uppercase px-4 py-1.5 rounded-full border transition-all ${
                        isAuth
                            ? 'border-white/20 text-white/60 hover:border-red-400/50 hover:text-red-400'
                            : 'border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black'
                    }`}
                >
                    {isAuth ? 'Выйти' : 'Войти'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar