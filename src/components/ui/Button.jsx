
import { twMerge } from 'tailwind-merge';

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}) {
    const variants = {
        primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white hover:opacity-90 shadow-lg shadow-purple-500/30 border border-white/10',
        secondary: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40',
        ghost: 'bg-transparent hover:bg-white/5 text-white/80 hover:text-white',
        neon: 'bg-transparent border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white shadow-[0_0_10px_rgba(255,79,216,0.3)] hover:shadow-[0_0_20px_rgba(255,79,216,0.6)] transition-all duration-300'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg font-semibold',
        icon: 'p-2'
    };

    return (
        <button
            className={twMerge(
                'rounded-full transition-all duration-300 font-display flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
