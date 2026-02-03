'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';

interface LightboxProps {
    images: Array<{
        src: string;
        alt: string;
        title?: string;
    }>;
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Lightbox({
    images,
    currentIndex,
    isOpen,
    onClose,
    onNext,
    onPrev,
}: LightboxProps) {
    const currentImage = images[currentIndex];
    const hasNext = currentIndex < images.length - 1;
    const hasPrev = currentIndex > 0;

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowRight':
                    if (hasNext) onNext();
                    break;
                case 'ArrowLeft':
                    if (hasPrev) onPrev();
                    break;
            }
        },
        [onClose, onNext, onPrev, hasNext, hasPrev]
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    const handleDownload = async () => {
        if (!currentImage) return;

        const response = await fetch(currentImage.src);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = currentImage.title || `image-${currentIndex + 1}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    return (
        <AnimatePresence>
            {isOpen && currentImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="Tutup"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Download Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDownload();
                        }}
                        className="absolute top-4 right-20 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="Download"
                    >
                        <Download className="w-6 h-6" />
                    </button>

                    {/* Previous Button */}
                    {hasPrev && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onPrev();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            aria-label="Sebelumnya"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                    )}

                    {/* Next Button */}
                    {hasNext && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onNext();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            aria-label="Selanjutnya"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    )}

                    {/* Image Container */}
                    <motion.div
                        key={currentIndex}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={currentImage.src}
                            alt={currentImage.alt}
                            fill
                            className="object-contain"
                            sizes="90vw"
                            priority
                        />
                    </motion.div>

                    {/* Image Info */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                        {currentImage.title && (
                            <p className="text-white font-medium mb-1">{currentImage.title}</p>
                        )}
                        <p className="text-white/60 text-sm">
                            {currentIndex + 1} / {images.length}
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
