'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface TimelineProps {
    items: TimelineItem[];
    className?: string;
}

export default function Timeline({ items, className = '' }: TimelineProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <div ref={ref} className={`relative ${className}`}>
            {/* Center line */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4a017]/50 to-transparent"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ originY: 0 }}
            />

            <div className="space-y-12">
                {items.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            {/* Content */}
                            <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                <span className="inline-block px-3 py-1 bg-[#d4a017]/10 text-[#d4a017] text-sm font-medium rounded-full mb-2">
                                    {item.year}
                                </span>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Center dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.3, type: 'spring' }}
                                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d4a017] ring-4 ring-[#d4a017]/20 z-10"
                            />

                            {/* Icon (if provided) */}
                            {item.icon && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-8 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#d4a017]"
                                >
                                    {item.icon}
                                </motion.div>
                            )}

                            {/* Empty space for the other side */}
                            <div className="w-1/2" />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
