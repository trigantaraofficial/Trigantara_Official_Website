'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
    autoPlayInterval?: number;
}

export default function Testimonials({
    testimonials,
    autoPlayInterval = 5000
}: TestimonialsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const goToNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const goToPrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    }, [testimonials.length]);

    // Auto-play
    useEffect(() => {
        if (autoPlayInterval <= 0) return;
        const timer = setInterval(goToNext, autoPlayInterval);
        return () => clearInterval(timer);
    }, [autoPlayInterval, goToNext]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
        }),
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#d4a017]/10 flex items-center justify-center">
                <Quote className="w-8 h-8 text-[#d4a017]" />
            </div>

            {/* Testimonial Content */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 pt-16 overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="text-center"
                    >
                        {/* Quote */}
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic">
                            &ldquo;{currentTestimonial.quote}&rdquo;
                        </p>

                        {/* Author */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-[#d4a017]/30">
                                <Image
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h4 className="text-white font-semibold">
                                {currentTestimonial.name}
                            </h4>
                            <p className="text-[#d4a017] text-sm">
                                {currentTestimonial.role}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {testimonials.length > 1 && (
                    <>
                        <button
                            onClick={goToPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all"
                            aria-label="Testimonial sebelumnya"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all"
                            aria-label="Testimonial selanjutnya"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </>
                )}
            </div>

            {/* Dots Indicator */}
            {testimonials.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'w-6 bg-[#d4a017]'
                                    : 'bg-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`Testimonial ${index + 1}`}
                            aria-current={index === currentIndex ? 'true' : 'false'}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
