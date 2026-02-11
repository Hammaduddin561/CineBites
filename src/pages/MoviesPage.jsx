import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../data/mockData';
import { RecommendationCard } from '../components/RecommendationCard';
import { CategoryFilter } from '../components/CategoryFilter';

export function MoviesPage() {
    // Filter only movies from mockData
    const movies = mockData.filter(item => item.category === 'Movies');

    return (
        <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
            <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Movies</h1>
                    <p className="text-white/60 text-lg">Explore our curated collection of cinema.</p>
                </div>

                {/* Could add more granular filters here later */}
            </header>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {movies.map((movie, index) => (
                    <motion.div
                        key={movie.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <RecommendationCard item={movie} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
