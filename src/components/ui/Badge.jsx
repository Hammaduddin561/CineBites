
import { twMerge } from 'tailwind-merge';

export function Badge({ children, variant = 'default', className }) {
    const variants = {
        default: 'bg-white/10 border border-white/10 text-white/80',
        primary: 'bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/50 text-white',
        secondary: 'bg-[var(--color-secondary)]/20 border border-[var(--color-secondary)]/50 text-white',
        success: 'bg-green-500/20 border border-green-500/50 text-green-200',
        outline: 'border border-white/30 text-white/70 bg-transparent'
    };

    return (
        <span className={twMerge(
            'px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm',
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
}
