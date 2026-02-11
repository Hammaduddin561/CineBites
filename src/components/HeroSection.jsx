import { motion } from 'framer-motion';
import { SearchBar } from './SearchBar';
import { Badge } from './ui/Badge';

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--color-primary)]/30 rounded-full blur-[120px] -z-10 animate-pulse-glow"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/20 rounded-full blur-[100px] -z-10"></div>

            {/* Floating Icons (Animated) */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-[10%] text-6xl opacity-80 drop-shadow-lg filter blur-[1px]"
            >
                🍔
            </motion.div>
            <motion.div
                animate={{ y: [0, 25, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-[10%] text-6xl opacity-80 drop-shadow-lg filter blur-[1px]"
            >
                🎬
            </motion.div>
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/3 right-[20%] text-4xl opacity-60 drop-shadow-md"
            >
                🍿
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-1/3 left-[15%] text-4xl opacity-60 drop-shadow-md"
            >
                🍕
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full z-10 flex flex-col items-center"
            >
                <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm uppercase tracking-wider border-pink-500/50 text-pink-200">
                    Discover The Perfect Match
                </Badge>

                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                    Crave it. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)]">Watch it.</span>
                    <br />
                    <span className="text-white/40 text-4xl md:text-5xl font-light">Experience the mix.</span>
                </h1>

                <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl font-light">
                    The ultimate recommendation engine for your movie night. Find the perfect meal to pair with your favorite film.
                </p>

                <SearchBar className="w-full" />

                <div className="mt-12 flex gap-4 text-sm text-white/40">
                    <span>Trending:</span>
                    <span className="text-white hover:text-[var(--color-secondary)] cursor-pointer transition-colors">Interstellar</span>
                    <span>•</span>
                    <span className="text-white hover:text-[var(--color-secondary)] cursor-pointer transition-colors">Sushi</span>
                    <span>•</span>
                    <span className="text-white hover:text-[var(--color-secondary)] cursor-pointer transition-colors">Inception</span>
                </div>
            </motion.div>
        </section>
    );
}
