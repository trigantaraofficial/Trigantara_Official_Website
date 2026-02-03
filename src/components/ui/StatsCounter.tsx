'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
    value: number;
    suffix?: string;
    label: string;
    duration?: number;
}

function StatItem({ value, suffix = '', label, duration = 2000 }: StatItemProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true;

            const startTime = Date.now();
            const endTime = startTime + duration;

            const updateCount = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);

                // Easing function for smooth animation
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentCount = Math.floor(easeOut * value);

                setCount(currentCount);

                if (now < endTime) {
                    requestAnimationFrame(updateCount);
                } else {
                    setCount(value);
                }
            };

            requestAnimationFrame(updateCount);
        }
    }, [isInView, value, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4a017] to-[#f0c040] mb-2">
                {count.toLocaleString('id-ID')}{suffix}
            </div>
            <div className="text-white/60 text-sm md:text-base uppercase tracking-wider">
                {label}
            </div>
        </motion.div>
    );
}

interface StatsCounterProps {
    stats: Array<{
        value: number;
        suffix?: string;
        label: string;
    }>;
    className?: string;
}

export default function StatsCounter({ stats, className = '' }: StatsCounterProps) {
    return (
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 ${className}`}>
            {stats.map((stat, index) => (
                <StatItem
                    key={index}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                />
            ))}
        </div>
    );
}
