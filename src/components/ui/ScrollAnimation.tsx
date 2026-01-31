'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { animationConfig, scrollVariants, transitions } from '@/lib/animations';

type AnimationVariant = keyof typeof scrollVariants;

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    variant?: AnimationVariant;
    delay?: number;
    duration?: number;
    once?: boolean;
}

export default function ScrollAnimation({
    children,
    className = '',
    variant = 'fadeUp',
    delay = 0,
    duration = animationConfig.duration.normal,
    once = true,
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={scrollVariants[variant]}
            transition={{
                duration,
                delay,
                ease: animationConfig.ease.smooth as any,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for animating lists of items
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: animationConfig.stagger.normal,
            delayChildren: 0.1,
        },
    },
};

export function StaggerContainer({
    children,
    className = '',
    delay = 0,
    staggerDelay = animationConfig.stagger.normal,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger item for use inside StaggerContainer
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: animationConfig.duration.normal,
            ease: animationConfig.ease.smooth as any,
        },
    },
};

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}

// Parallax effect wrapper
interface ParallaxProps {
    children: ReactNode;
    className?: string;
    offset?: number;
}

export function Parallax({ children, className = '', offset = 50 }: ParallaxProps) {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            initial={{ y: offset }}
            whileInView={{ y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{
                duration: animationConfig.duration.slow,
                ease: animationConfig.ease.smooth as any,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Reduced motion wrapper - respects user's motion preferences
interface ReducedMotionWrapperProps {
    children: ReactNode;
    className?: string;
}

export function ReducedMotionWrapper({ children, className = '' }: ReducedMotionWrapperProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}
