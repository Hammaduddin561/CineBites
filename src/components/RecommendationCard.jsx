import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';
import { Badge } from './ui/Badge';

export function RecommendationCard({ item }) {
    const { title, image, category, tags, matchPercentage, rating } = item;

    return (
        <motion.div
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group w-64 h-96 flex-shrink-0 rounded-2xl overflow-hidden glass-card cursor-pointer perspective-1000"
        >
            {/* Image Background */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                    <Badge variant={category === 'Food' ? 'secondary' : 'primary'} className="mb-1 text-[10px] uppercase tracking-wider">
                        {category}
                    </Badge>
                    <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold">
                        <Star className="w-3 h-3 fill-yellow-400" /> {rating}
                    </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white leading-tight group-hover:text-[var(--color-secondary)] transition-colors">
                    {title}
                </h3>

                <div className="flex flex-wrap gap-1 mt-1">
                    {tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs text-white/60 bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Match Badge */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center border border-green-500/50 text-green-400 font-bold text-xs shadow-lg">
                {matchPercentage}%
            </div>

            {/* Floating Action */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-[-10px] group-hover:translate-y-0 duration-300">
                <button className="bg-white/10 p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors">
                    <Heart className="w-4 h-4 text-white" />
                </button>
            </div>
        </motion.div>
    );
}
