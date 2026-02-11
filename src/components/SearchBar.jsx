import { Search } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';

export function SearchBar({ placeholder = "Search food or movies...", onSearch, className }) {
    const [isFocused, setIsFocused] = useState(false);
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(query);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={clsx(
                "relative w-full max-w-2xl transition-all duration-300 transform",
                isFocused ? "scale-105" : "scale-100",
                className
            )}
        >
            <div className={clsx(
                "absolute inset-0 rounded-full transition-opacity duration-300",
                isFocused ? "opacity-100 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] blur-md" : "opacity-0"
            )}></div>

            <div className="relative flex items-center bg-black/40 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden shadow-2xl">
                <div className="pl-6 text-white/50">
                    <Search className="w-6 h-6" />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    className="w-full bg-transparent text-white border-0 px-4 py-4 focus:ring-0 text-lg placeholder:text-white/30 font-medium outline-none"
                />
                <div className="pr-2">
                    <button
                        type="submit"
                        className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                    >
                        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full p-2">
                            <Search className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </form>
    );
}
