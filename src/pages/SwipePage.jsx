import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { X, Heart, Info, RotateCcw, Check } from 'lucide-react';
import { mockData } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export function SwipeDeck() {
    const [cards, setCards] = useState(mockData);
    const [result, setResult] = useState(null); // 'like' or 'nope'

    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-30, 30]);
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);
    const background = useTransform(
        x,
        [-200, 0, 200],
        ['rgba(255, 0, 128, 0.2)', 'rgba(0,0,0,0)', 'rgba(0, 255, 240, 0.2)']
    );

    const handleDragEnd = (_, info) => {
        if (info.offset.x > 100) {
            handleSwipe('like');
        } else if (info.offset.x < -100) {
            handleSwipe('nope');
        }
    };

    const handleSwipe = (direction) => {
        setResult(direction);
        setTimeout(() => {
            setCards((prev) => prev.slice(1));
            setResult(null);
            x.set(0);
        }, 200);

        // Save to local storage or state if 'like'
        if (direction === 'like') {
            const currentCard = cards[0];
            const savedItems = JSON.parse(localStorage.getItem('savedItems') || '[]');
            if (!savedItems.find(item => item.id === currentCard.id)) {
                localStorage.setItem('savedItems', JSON.stringify([...savedItems, currentCard]));
            }
        }
    };

    if (cards.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mb-8 p-8 bg-white/5 rounded-full border border-pink-500/30 shadow-[0_0_30px_rgba(255,0,128,0.3)]"
                >
                    <RotateCcw className="w-12 h-12 text-pink-500" />
                </motion.div>
                <h2 className="text-3xl font-display font-bold mb-4">No more cards!</h2>
                <p className="text-white/60 mb-8 max-w-md">You've explored all our current recommendations. Check back later or reset to start over.</p>
                <Button onClick={() => setCards(mockData)} variant="primary" className="shadow-[0_0_20px_rgba(255,0,128,0.5)]">
                    Start Over
                </Button>
            </div>
        );
    }

    const activeCard = cards[0];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-10">
            {/* Background effects */}
            <motion.div style={{ background }} className="absolute inset-0 z-0 pointer-events-none transition-colors duration-300" />

            {/* Neon Card Stack Effect */}
            <div className="relative w-full max-w-sm aspect-[3/4] z-10 flex items-center justify-center">
                {/* Decorative background cards */}
                <div className="absolute w-full h-full bg-[var(--color-primary)]/20 rounded-3xl transform rotate-6 scale-90 blur-sm translate-y-4 -z-10 border border-pink-500/30"></div>
                <div className="absolute w-full h-full bg-[var(--color-secondary)]/20 rounded-3xl transform -rotate-6 scale-90 blur-sm translate-y-4 -z-20 border border-cyan-500/30"></div>

                <AnimatePresence>
                    {cards.map((card, index) => {
                        const isFront = index === 0;
                        if (!isFront) return null;

                        return (
                            <motion.div
                                key={card.id}
                                style={{ x, rotate, opacity }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={handleDragEnd}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ x: result === 'like' ? 500 : -500, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="absolute inset-0 bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(121,40,202,0.3)] border border-pink-500/50 group"
                            >
                                {/* Neon Glow Border Effect */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-pink-500/50 transition-colors z-50 pointer-events-none"></div>

                                <img src={card.image} alt={card.title} className="w-full h-full object-cover pointer-events-none" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                                <div className="absolute top-6 left-0 right-0 p-6 flex justify-between items-start">
                                    <div className="flex gap-2">
                                        <Badge variant="outline" className="border-pink-500 text-pink-400 bg-pink-500/10 backdrop-blur-md">
                                            {card.category}
                                        </Badge>
                                    </div>
                                </div>


                                <div className="absolute bottom-0 left-0 right-0 p-8 pb-10 text-center">
                                    <h2 className="text-4xl font-display font-bold mb-3 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                                        {card.title}
                                    </h2>

                                    <div className="flex justify-center gap-2 mb-4">
                                        {card.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-white/60 text-sm line-clamp-3 mb-4">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Swipe Indicators */}
                                <motion.div
                                    style={{ opacity: useTransform(x, [50, 150], [0, 1]) }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[var(--color-secondary)] text-[var(--color-secondary)] rounded-2xl px-8 py-4 text-5xl font-bold uppercase -rotate-12 tracking-widest bg-black/50 backdrop-blur-xl shadow-[0_0_30px_var(--color-secondary)]"
                                >
                                    YEAH
                                </motion.div>
                                <motion.div
                                    style={{ opacity: useTransform(x, [-150, -50], [1, 0]) }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-red-500 text-red-500 rounded-2xl px-8 py-4 text-5xl font-bold uppercase rotate-12 tracking-widest bg-black/50 backdrop-blur-xl shadow-[0_0_30px_red]"
                                >
                                    NAH
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex gap-12 mt-10 z-20 items-center">
                <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full w-20 h-20 !p-0 flex items-center justify-center border-red-500/50 text-red-500 bg-red-500/10 hover:bg-red-500/30 shadow-[0_0_30px_rgba(255,0,0,0.2)] hover:shadow-[0_0_50px_rgba(255,0,0,0.5)] transition-all duration-300 group"
                    onClick={() => handleSwipe('nope')}
                >
                    <X className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    <span className="absolute -bottom-8 text-sm font-bold text-red-500/50 uppercase tracking-widest">Nah</span>
                </Button>

                <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full w-20 h-20 !p-0 flex items-center justify-center border-[var(--color-secondary)]/50 text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 hover:bg-[var(--color-secondary)]/30 shadow-[0_0_30px_rgba(0,255,240,0.2)] hover:shadow-[0_0_50px_rgba(0,255,240,0.5)] transition-all duration-300 group"
                    onClick={() => handleSwipe('like')}
                >
                    <Heart className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" />
                    <span className="absolute -bottom-8 text-sm font-bold text-[var(--color-secondary)]/50 uppercase tracking-widest">Yeah</span>
                </Button>
            </div>
        </div>
    );
}
