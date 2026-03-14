import {useEffect, useRef} from "react";

function SearchBar({ value, onChange }) {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    },[])
    return (
        <div className="relative max-w-xl mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-lg">🔍</span>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Найти фильм..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder-white/30 outline-none focus:border-amber-400/50 focus:bg-white/8 transition-all"
            />
        </div>
    )
}

export default SearchBar