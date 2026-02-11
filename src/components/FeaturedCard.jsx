import { motion } from 'framer-motion';
import { Star, Flame, Share2, Heart } from 'lucide-react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

export function FeaturedCard({ item, onClose }) {
    if (!item) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-full max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
        >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <Badge variant={item.category === 'Food' ? 'secondary' : 'primary'} className="text-sm px-3 py-1">
                        {item.category}
                    </Badge>
                    <div className="flex gap-2">
                        <Button variant="secondary" size="icon" className="backdrop-blur-md">
                            <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="secondary" size="icon" className="backdrop-blur-md text-pink-500">
                            <Heart className="w-4 h-4 fill-pink-500" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between bg-black/40 backdrop-blur-xl">
                <div>
                    <div className="flex items-center gap-2 mb-2 text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className={`w-4 h-4 ${star <= Math.round(item.rating || 4) ? 'fill-yellow-400' : 'text-gray-600'}`} />
                        ))}
                        <span className="text-white/60 text-sm ml-2">({item.reviews || '2.4k'})</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                        {item.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="border-white/20 text-white/70">
                                #{tag}
                            </Badge>
                        ))}
                    </div>

                    <p className="text-white/80 text-lg leading-relaxed mb-6 font-light">
                        {item.description || "A wonderful experience waiting for you. Dive into the details and find your perfect match."}
                    </p>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center min-w-[80px]">
                            <span className="text-xs text-white/50 uppercase">Match</span>
                            <span className="text-2xl font-bold text-green-400">{item.matchPercentage}%</span>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center min-w-[80px]">
                            <span className="text-xs text-white/50 uppercase">Popularity</span>
                            <div className="flex items-center gap-1 text-orange-500 font-bold text-lg">
                                <Flame className="w-4 h-4 fill-orange-500" />
                                High
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    {item.category === 'Food' ? (
                        <Button variant="primary" size="lg" className="w-full shadow-lg shadow-purple-500/20">
                            Order Now
                        </Button>
                    ) : (
                        <Button variant="primary" size="lg" className="w-full shadow-lg shadow-purple-500/20">
                            Watch Trailer
                        </Button>
                    )}
                    <Button variant="ghost" onClick={onClose} className="px-6 border border-white/20">
                        Close
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
