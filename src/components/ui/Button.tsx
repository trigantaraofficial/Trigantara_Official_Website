'use client';

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
    asChild?: boolean;
    href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[#d4a017] text-black hover:bg-[#f0c040] shadow-[0_0_20px_-5px_rgba(212,160,23,0.3)]',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/10',
    outline: 'bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40',
    ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
    danger: 'bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    href,
    className = '',
    disabled,
    ...props
}, ref) => {
    const baseStyles = `
        inline-flex items-center justify-center gap-2
        font-medium rounded-full
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-[#d4a017]/50 focus:ring-offset-2 focus:ring-offset-black
        disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const combinedStyles = `
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
    `;

    const content = (
        <>
            {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
            ) : leftIcon}
            {children}
            {!isLoading && rightIcon}
        </>
    );

    if (href && !disabled) {
        return (
            <Link href={href} className={combinedStyles}>
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            ref={ref}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            className={combinedStyles}
            disabled={disabled || isLoading}
            {...props}
        >
            {content}
        </motion.button>
    );
});

Button.displayName = 'Button';

export default Button;

// Icon Button variant
interface IconButtonProps extends Omit<ButtonProps, 'children' | 'leftIcon' | 'rightIcon'> {
    icon: ReactNode;
    'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
    icon,
    variant = 'ghost',
    size = 'md',
    className = '',
    ...props
}, ref) => {
    const sizeMap = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
    };

    return (
        <Button
            ref={ref}
            variant={variant}
            className={`${sizeMap[size]} p-0 rounded-lg ${className}`}
            {...props}
        >
            {icon}
        </Button>
    );
});

IconButton.displayName = 'IconButton';

// Button Group
interface ButtonGroupProps {
    children: ReactNode;
    className?: string;
}

export function ButtonGroup({ children, className = '' }: ButtonGroupProps) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {children}
        </div>
    );
}
