import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Play, Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Peelists() {
    const [savedItems, setSavedItems] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All'); // 'All', 'Movies', 'Food'

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('savedItems') || '[]');
        setSavedItems(items);
    }, []);

    const removeItem = (id) => {
        const newItems = savedItems.filter(item => item.id !== id);
        setSavedItems(newItems);
        localStorage.setItem('savedItems', JSON.stringify(newItems));
    };

    const filteredItems = activeFilter === 'All'
        ? savedItems
        : savedItems.filter(item => item.category === activeFilter);

    return (
        <div className="min-h-screen pt-28 pb-20 container mx-auto px-6 flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 flex-shrink-0">
                <div className="glass p-6 rounded-3xl sticky top-28">
                    <h2 className="text-xl font-display font-bold mb-6 tracking-wide text-white/90">FILTERS</h2>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => setActiveFilter('Movies')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left group ${activeFilter === 'Movies' ? 'bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/50' : 'bg-white/5 hover:bg-white/10'}`}
                        >
                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${activeFilter === 'Movies' ? 'bg-[var(--color-primary)] text-white' : 'bg-pink-500/20 text-pink-500 group-hover:bg-pink-500 group-hover:text-white'}`}>
                                🎬
                            </span>
                            <span className={`font-medium group-hover:text-white ${activeFilter === 'Movies' ? 'text-white' : 'text-white/80'}`}>Movies</span>
                        </button>
                        <button
                            onClick={() => setActiveFilter('Food')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left group ${activeFilter === 'Food' ? 'bg-[var(--color-secondary)]/20 border border-[var(--color-secondary)]/50' : 'bg-white/5 hover:bg-white/10'}`}
                        >
                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${activeFilter === 'Food' ? 'bg-[var(--color-secondary)] text-black' : 'bg-cyan-500/20 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white'}`}>
                                🍔
                            </span>
                            <span className={`font-medium group-hover:text-white ${activeFilter === 'Food' ? 'text-white' : 'text-white/80'}`}>Food</span>
                        </button>
                        <button
                            onClick={() => setActiveFilter('All')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left group ${activeFilter === 'All' ? 'bg-purple-500/20 border border-purple-500/50' : 'bg-white/5 hover:bg-white/10'}`}
                        >
                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${activeFilter === 'All' ? 'bg-purple-500 text-white' : 'bg-purple-500/20 text-purple-500 group-hover:bg-purple-500 group-hover:text-white'}`}>
                                📅
                            </span>
                            <span className={`font-medium group-hover:text-white ${activeFilter === 'All' ? 'text-white' : 'text-white/80'}`}>All Items</span>
                        </button>
                    </div>

                    <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-4 text-sm text-white/50">
                        <a href="#" className="hover:text-white">Profile</a>
                        <a href="#" className="hover:text-white">Settings</a>
                        <a href="#" className="hover:text-white">Logout</a>
                    </div>
                </div>
            </aside>


            {/* Main Content */}
            <div className="flex-1">
                {/* Page Title not needed as it's implied by context, but can add breadcrumbs i f needed */}

                {savedItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-3xl bg-white/5 h-[60vh]">
                        <p className="text-2xl text-white/40 font-display mb-4">Your Peelist is empty</p>
                        <Button variant="primary" onClick={() => window.location.href = '/match'}>
                            Find Pairings
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card rounded-3xl overflow-hidden group hover:border-[var(--color-primary)]/50 transition-colors relative"
                            >
                                {/* Pairing Header Visualization */}
                                <div className="p-4 flex gap-2 items-center justify-center h-48 relative">
                                    {/* Movie Side */}
                                    <div className="w-1/2 h-full rounded-2xl overflow-hidden relative transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10 border border-white/10 shadow-lg">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </div>

                                    {/* Plus Sign */}
                                    <div className="absolute z-20 w-8 h-8 bg-black rounded-full flex items-center justify-center border border-white/20 text-white shadow-xl">
                                        +
                                    </div>

                                    {/* Food Side (Mocked for now as we don't have explicit pairings in single item, using same image slightly altered or generic fallback if food) */}
                                    <div className="w-1/2 h-full rounded-2xl overflow-hidden relative transform rotate-3 hover:rotate-0 transition-transform duration-500 z-0 border border-white/10 shadow-lg grayscale-[50%] group-hover:grayscale-0">
                                        {/* Needs logic to find a pair, for now reusing image or placeholder */}
                                        <img src={item.category === 'Movies' ? 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800' : 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800'} alt="Pairing" className="w-full h-full object-cover" />
                                    </div>

                                    {/* Heart Icon Top Right */}
                                    <div className="absolute top-4 right-4 z-30">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); removeItem(item.id); }}
                                            className="w-8 h-8 rounded-full bg-black/50 backdrop-blur text-pink-500 flex items-center justify-center hover:bg-white transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-5 pt-2 text-center">
                                    <h3 className="text-lg font-bold font-display leading-tight mb-1">
                                        {item.title} <span className="text-[var(--color-primary)]">+</span> {item.category === 'Movies' ? 'Spicy Ramen' : 'Interstellar'}
                                    </h3>

                                    <Button variant="secondary" className="w-full mt-4 rounded-full bg-pink-500/10 hover:bg-pink-500 text-pink-200 hover:text-white border-pink-500/20 group-hover:shadow-[0_0_20px_rgba(255,0,128,0.4)] transition-all">
                                        Watch & Order <Lock className="w-3 h-3 ml-2 opacity-50" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
