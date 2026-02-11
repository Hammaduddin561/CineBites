import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function ResumePage() {
    // Mock data for Resume items
    const resumeItems = [
        { id: 1, title: 'Inception', progress: 60, image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800', timeLeft: '45m' },
        { id: 2, title: 'Spirited Away', progress: 30, image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800', timeLeft: '1h 20m' },
        { id: 3, title: 'Blade Runner 2049', progress: 85, image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800', timeLeft: '15m' },
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
            <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Resume Watching</h1>
                <p className="text-white/60 text-lg">Pick up right where you left off.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resumeItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[var(--color-primary)]/50 transition-colors"
                    >
                        <div className="relative aspect-video">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button size="lg" className="rounded-full w-16 h-16 flex items-center justify-center bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/80 text-white border-0 shadow-[0_0_20px_var(--color-primary)]">
                                    <Play className="w-8 h-8 fill-current ml-1" />
                                </Button>
                            </div>

                            {/* Progress Bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                                <div
                                    className="h-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]"
                                    style={{ width: `${item.progress}%` }}
                                />
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold font-display mb-2">{item.title}</h3>
                            <p className="text-white/50 text-sm mb-4">{item.timeLeft} remaining</p>
                            <Button variant="secondary" className="w-full">
                                Resume
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
