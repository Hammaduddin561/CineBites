import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Star, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { RecommendationCard } from '../components/RecommendationCard';
import { mockData } from '../data/mockData';

export function HomePage() {
    const navigate = useNavigate();

    // Mock "Resume" data
    const resumeItems = [
        { id: 101, title: 'Inception', progress: 60, image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800', type: 'Movie' },
        { id: 102, title: 'Dreamy Burger', progress: 60, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', type: 'Food' },
        { id: 103, title: 'Grand Budapest Hotel', progress: 30, image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800', type: 'Movie' },
        { id: 104, title: 'Mendl\'s Courtesan', progress: 30, image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800', type: 'Food' },
    ];

    return (
        <div className="min-h-screen pb-20 pt-24 px-6 container mx-auto">

            {/* Hero Section: Cosmic Ramen Card */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-16 relative">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--color-primary)]/20 rounded-full blur-[100px] -z-10"></div>

                <div className="flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-[0_0_50px_rgba(255,0,128,0.2)] max-w-4xl w-full group hover:border-pink-500/50 transition-all duration-500">

                    {/* Visual */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800"
                            alt="Cosmic Ramen"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050011] opacity-90 md:opacity-100" />
                        {/* Centered Neon Graphic Overlay (Mock) */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-24 h-24 border-4 border-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_20px_cyan]">
                                <Play className="fill-cyan-400 text-cyan-400 w-10 h-10 ml-1" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left bg-gradient-to-b from-transparent to-black/40">
                        <div className="flex gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full border border-pink-500 text-pink-500 text-xs font-bold uppercase tracking-wider bg-pink-500/10">Food</span>
                            <span className="px-3 py-1 rounded-full border border-purple-500 text-purple-500 text-xs font-bold uppercase tracking-wider bg-purple-500/10">Sci-Fi</span>
                            <span className="px-3 py-1 rounded-full border border-cyan-500 text-cyan-500 text-xs font-bold uppercase tracking-wider bg-cyan-500/10">Quick Bite</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight text-white drop-shadow-lg">
                            COSMIC <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">RAMEN</span>
                        </h1>

                        <p className="text-white/70 mb-8 font-light leading-relaxed">
                            Embark on an interstellar dining experience where flavors transcend galaxies and every bite is an adventure.
                        </p>

                        <div className="flex gap-4">
                            <Button onClick={() => navigate('/match')} className="rounded-full w-16 h-16 flex items-center justify-center border border-red-500/50 text-red-500 bg-red-500/10 hover:bg-red-500/20">
                                <span className="sr-only">Nah</span>
                                <span className="text-xl font-bold">✕</span>
                            </Button>
                            <Button onClick={() => navigate('/match')} className="rounded-full w-16 h-16 flex items-center justify-center border border-green-500/50 text-green-400 bg-green-500/10 hover:bg-green-500/20 shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                                <span className="sr-only">Yeah</span>
                                <HeartIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Continue Your Journey */}
            <section className="mb-16">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                    Continue Your Journey <div className="h-px bg-white/10 flex-1 ml-4"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pair 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4 overflow-hidden relative group hover:border-pink-500/30 transition-colors">
                        <div className="flex-1 flex gap-px rounded-xl overflow-hidden h-32 relative">
                            <img src={resumeItems[0].image} className="w-1/2 h-full object-cover" alt="" />
                            <img src={resumeItems[1].image} className="w-1/2 h-full object-cover" alt="" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <Button size="sm" className="rounded-full bg-pink-600 hover:bg-pink-700 text-white border-none px-6">
                                    <Play className="w-4 h-4 mr-2 fill-current" /> Jump Back In
                                </Button>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                            <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 w-[60%] shadow-[0_0_10px_pink]"></div>
                        </div>
                    </div>

                    {/* Pair 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4 overflow-hidden relative group hover:border-pink-500/30 transition-colors">
                        <div className="flex-1 flex gap-px rounded-xl overflow-hidden h-32 relative">
                            <img src={resumeItems[2].image} className="w-1/2 h-full object-cover" alt="" />
                            <img src={resumeItems[3].image} className="w-1/2 h-full object-cover" alt="" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <Button size="sm" className="rounded-full bg-pink-600 hover:bg-pink-700 text-white border-none px-6">
                                    <Play className="w-4 h-4 mr-2 fill-current" /> Jump Back In
                                </Button>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                            <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 w-[30%] shadow-[0_0_10px_pink]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent History / Recommendations */}
            <section>
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                    Recent History <div className="h-px bg-white/10 flex-1 ml-4"></div>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {mockData.slice(0, 5).map(item => (
                        <div key={item.id} className="cursor-pointer">
                            <RecommendationCard item={item} />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

function HeartIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
    )
}
