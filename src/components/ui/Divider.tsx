'use client';

interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'solid' | 'dashed' | 'dotted' | 'gradient';
    withText?: string;
    className?: string;
}

export default function Divider({
    orientation = 'horizontal',
    variant = 'solid',
    withText,
    className = '',
}: DividerProps) {
    if (orientation === 'vertical') {
        return (
            <div
                className={`
                    w-px self-stretch
                    ${variant === 'gradient'
                        ? 'bg-gradient-to-b from-transparent via-white/20 to-transparent'
                        : variant === 'dashed'
                            ? 'border-l border-dashed border-white/20'
                            : variant === 'dotted'
                                ? 'border-l border-dotted border-white/20'
                                : 'bg-white/10'
                    }
                    ${className}
                `}
            />
        );
    }

    if (withText) {
        return (
            <div className={`flex items-center gap-4 ${className}`}>
                <div
                    className={`
                        flex-1 h-px
                        ${variant === 'gradient'
                            ? 'bg-gradient-to-r from-transparent to-white/20'
                            : 'bg-white/10'
                        }
                    `}
                />
                <span className="text-white/40 text-sm">{withText}</span>
                <div
                    className={`
                        flex-1 h-px
                        ${variant === 'gradient'
                            ? 'bg-gradient-to-l from-transparent to-white/20'
                            : 'bg-white/10'
                        }
                    `}
                />
            </div>
        );
    }

    return (
        <div
            className={`
                h-px w-full
                ${variant === 'gradient'
                    ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
                    : variant === 'dashed'
                        ? 'border-t border-dashed border-white/20'
                        : variant === 'dotted'
                            ? 'border-t border-dotted border-white/20'
                            : 'bg-white/10'
                }
                ${className}
            `}
        />
    );
}
