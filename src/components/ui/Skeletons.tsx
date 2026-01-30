'use client';

import { motion } from 'framer-motion';

// Skeleton for Card
export function CardSkeleton() {
    return (
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] overflow-hidden animate-pulse">
            <div className="aspect-[16/10] bg-white/[0.05]" />
            <div className="p-6 space-y-4">
                <div className="h-4 bg-white/[0.05] rounded w-3/4" />
                <div className="h-3 bg-white/[0.05] rounded w-full" />
                <div className="h-3 bg-white/[0.05] rounded w-2/3" />
            </div>
        </div>
    );
}

// Skeleton for Text
export function TextSkeleton({ lines = 3, className = '' }: { lines?: number; className?: string }) {
    return (
        <div className={`space-y-3 animate-pulse ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
                <div
                    key={i}
                    className="h-4 bg-white/[0.05] rounded"
                    style={{ width: `${Math.random() * 40 + 60}%` }}
                />
            ))}
        </div>
    );
}

// Skeleton for Image
export function ImageSkeleton({ aspectRatio = '16/9' }: { aspectRatio?: string }) {
    return (
        <div
            className="bg-white/[0.05] animate-pulse rounded-xl overflow-hidden"
            style={{ aspectRatio }}
        >
            <div className="w-full h-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </div>
    );
}

// Skeleton for Stat Counter
export function StatSkeleton() {
    return (
        <div className="text-center animate-pulse">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/[0.05]" />
            <div className="h-10 bg-white/[0.05] rounded w-20 mx-auto mb-2" />
            <div className="h-4 bg-white/[0.05] rounded w-24 mx-auto" />
        </div>
    );
}

// Page Loading Overlay
export function PageLoadingOverlay() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505] flex items-center justify-center"
        >
            <div className="flex flex-col items-center gap-4">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-12 h-12 border-2 border-[#D4AF37] border-t-transparent rounded-full"
                />
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-white/60 text-sm tracking-wide"
                >
                    Memuat...
                </motion.p>
            </div>
        </motion.div>
    );
}

// Grid Skeleton
export function GridSkeleton({ count = 6, columns = 3 }: { count?: number; columns?: number }) {
    return (
        <div className={`grid md:grid-cols-${columns} gap-6`}>
            {Array.from({ length: count }).map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
    );
}
