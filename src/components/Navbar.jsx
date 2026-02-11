import { Search, Menu, X, User, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-1 cursor-pointer group">
                    <span className="text-3xl font-display font-bold text-white tracking-tight group-hover:text-shadow-neon transition-all">
                        CINE<span className="text-[var(--color-primary)]">BITES</span>
                    </span>
                </Link>

                {/* Center Search Bar (Desktop) */}
                <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
                    <input
                        type="text"
                        placeholder="Search for any anime..."
                        className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-[var(--color-primary)]/50 focus:bg-white/10 transition-all"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
                    <Link to="/" className={`text-sm font-medium transition-colors relative ${isActive('/') ? 'text-white' : 'text-white/60 hover:text-white'}`}>
                        Home
                        {isActive('/') && <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)] rounded-full"></span>}
                    </Link>
                    <Link to="/resume" className={`text-sm font-medium transition-colors relative ${isActive('/resume') ? 'text-white' : 'text-white/60 hover:text-white'}`}>Resume</Link>
                    <Link to="/movies" className={`text-sm font-medium transition-colors relative ${isActive('/movies') ? 'text-white' : 'text-white/60 hover:text-white'}`}>Movies</Link>
                    <Link to="/peelists" className={`text-sm font-medium transition-colors relative ${isActive('/peelists') ? 'text-white' : 'text-white/60 hover:text-white'}`}>
                        Peelists
                        {isActive('/peelists') && <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)] rounded-full"></span>}
                    </Link>

                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4 ml-8">
                    <span className="text-sm font-medium text-white/80 cursor-pointer hover:text-white transition-colors">Log in</span>
                    <Button variant="primary" size="sm" className="rounded-full px-6 shadow-[0_0_15px_rgba(255,0,128,0.5)]">
                        Sign Up
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass absolute top-full left-0 right-0 p-6 flex flex-col gap-4 animate-slide-up border-t border-white/10 z-50">
                    <Link to="/" className="text-white/90 hover:text-[var(--color-primary)] font-medium">Home</Link>
                    <Link to="/peelists" className="text-white/90 hover:text-[var(--color-primary)] font-medium">Peelists</Link>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 text-sm text-white"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-white/80 font-medium">Log in</span>
                        <Button variant="primary" size="sm">Sign Up</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
