'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
};

export function Spinner({ size = 'md', className = '' }: SpinnerProps) {
    return (
        <Loader2 className={`animate-spin text-[#d4a017] ${sizeMap[size]} ${className}`} />
    );
}

interface LoadingOverlayProps {
    message?: string;
    isVisible: boolean;
}

export function LoadingOverlay({ message = 'Memuat...', isVisible }: LoadingOverlayProps) {
    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center"
        >
            <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-[#d4a017]/20" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#d4a017] animate-spin" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#d4a017]/20 to-transparent animate-pulse" />
            </div>
            <p className="text-white/80 font-medium">{message}</p>
        </motion.div>
    );
}

interface SkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular';
    width?: string | number;
    height?: string | number;
}

export function Skeleton({
    className = '',
    variant = 'rectangular',
    width,
    height,
}: SkeletonProps) {
    const baseClasses = 'bg-white/5 animate-pulse';

    const variantClasses = {
        text: 'rounded',
        circular: 'rounded-full',
        rectangular: 'rounded-lg',
    };

    const style = {
        width: width || (variant === 'circular' ? '40px' : '100%'),
        height: height || (variant === 'text' ? '1em' : variant === 'circular' ? '40px' : '100px'),
    };

    return (
        <div
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            style={style}
        />
    );
}

interface CardSkeletonProps {
    className?: string;
}

export function CardSkeleton({ className = '' }: CardSkeletonProps) {
    return (
        <div className={`p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] ${className}`}>
            <Skeleton variant="rectangular" height="200px" className="mb-4" />
            <Skeleton variant="text" width="60%" height="1.5rem" className="mb-2" />
            <Skeleton variant="text" width="80%" height="1rem" className="mb-2" />
            <Skeleton variant="text" width="40%" height="1rem" />
        </div>
    );
}
