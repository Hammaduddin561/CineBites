import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

export function Carousel({ title, children }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="py-8 w-full">
            <div className="flex items-center justify-between mb-6 px-4 md:px-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white neon-text">{title}</h2>
                <div className="flex gap-2">
                    <Button variant="secondary" size="icon" onClick={() => scroll('left')} className="rounded-full">
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button variant="secondary" size="icon" onClick={() => scroll('right')} className="rounded-full">
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto px-4 md:px-12 pb-8 scrollbar-hide snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {children}
            </div>
        </div>
    );
}
