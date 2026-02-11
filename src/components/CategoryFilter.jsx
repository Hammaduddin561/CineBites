import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export function CategoryFilter({ activeCategory, onSelectCategory }) {
    const categories = ['All', 'Food', 'Movies'];

    return (
        <div className="flex justify-center gap-4 my-8">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={clsx(
                        "relative px-6 py-2 rounded-full font-medium transition-colors duration-300",
                        activeCategory === category ? "text-white" : "text-white/50 hover:text-white/80"
                    )}
                >
                    {activeCategory === category && (
                        <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full -z-10 shadow-[0_0_15px_rgba(106,13,173,0.5)]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    {category}
                </button>
            ))}
        </div>
    );
}
