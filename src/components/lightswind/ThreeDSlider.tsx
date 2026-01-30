'use client';

import React, { useState, useEffect, useCallback, useRef, CSSProperties } from 'react';
import { cn } from "@/components/lib/utils";

// --- Type Definitions ---

export interface SliderItemData {
    title: string;
    num: string;
    imageUrl: string;
    data?: any;
}

interface ThreeDSliderProps {
    items: SliderItemData[];
    speedWheel?: number;
    speedDrag?: number;
    containerStyle?: CSSProperties;
    onItemClick?: (item: SliderItemData, index: number) => void;
}

// --- Sub-Component: SliderItem (Pure DOM, no Motion overhead) ---

interface SliderItemProps {
    item: SliderItemData;
    index: number;
    onClick: () => void;
}

// We use forwardRef to expose the DOM element to the parent for direct manipulation
const SliderItem = React.forwardRef<HTMLDivElement, SliderItemProps>(({ item, onClick }, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-1/2 cursor-pointer select-none rounded-xl 
                shadow-2xl bg-black transform-origin-[0%_100%] pointer-events-auto
                w-[var(--width)] h-[var(--height)]
                -mt-[calc(var(--height)/2)] -ml-[calc(var(--width)/2)]
                overflow-hidden will-change-transform"
            style={{
                '--width': 'clamp(150px, 30vw, 300px)',
                '--height': 'clamp(200px, 40vw, 400px)',
                transition: 'none', // Critical: handle animation purely via JS
                display: 'block', // Ensure initial visibility
            } as CSSProperties & { [key: string]: any }}
            onClick={onClick}
        >
            <div
                className="slider-item-content absolute inset-0 z-10 transition-opacity duration-300 ease-out will-change-opacity"
                style={{ opacity: 1 }} // Initial opacity
            >
                {/* Overlay for gradient effect */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent via-50% to-black/50"></div>

                {/* Title */}
                <div className="absolute z-10 text-white bottom-5 left-5 text-[clamp(20px,3vw,30px)] drop-shadow-md font-serif">
                    {item.title}
                </div>

                {/* Number */}
                <div className="absolute z-10 text-white/20 top-2.5 left-5 text-[clamp(20px,10vw,80px)] font-bold">
                    {item.num}
                </div>

                {/* Image */}
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </div>
    );
});

SliderItem.displayName = 'SliderItem';

// --- Main Component: ThreeDSlider ---

const ThreeDSlider: React.FC<ThreeDSliderProps> = ({
    items,
    speedWheel = 0.05,
    speedDrag = -0.15,
    containerStyle = {},
    onItemClick,
}) => {
    // Refs for state that updates 60fps without re-renders
    const progressRef = useRef(50);
    const targetProgressRef = useRef(50); // For smooth damping (optional, or direct mapping)
    const isDownRef = useRef(false);
    const startXRef = useRef(0);
    const isHoveringRef = useRef(false); // Ref for immediate access in loop
    const rafRef = useRef<number | null>(null);

    // Array of refs to children elements
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const numItems = items.length;

    // React state only for mounting/initialization if needed
    // We strictly avoid setState during scroll 

    // --- Animation Loop ---
    const update = useCallback(() => {
        if (!itemRefs.current.length) return;

        const progress = progressRef.current;
        const clamped = Math.max(0, Math.min(progress, 100));

        // Continuous index
        const activeFloat = clamped / 100 * (numItems - 1);

        itemRefs.current.forEach((el, index) => {
            if (!el) return;

            // Calculate relationship to active item
            const denominator = numItems > 1 ? numItems - 1 : 1;

            // Ratio calculation:
            const ratio = (index - activeFloat) / denominator; // -1 (leftmost) to 1 (rightmost)

            const tx = ratio * 800; // was 800
            const ty = ratio * 200; // was 200
            const rot = ratio * 120; // was 120

            // discrete z-index for stacking order
            // We need a stable z-index.
            const dist = Math.abs(index - activeFloat);
            const z = numItems - dist; // continuous z? CSS z-index needs int

            // Opacity
            const opacity = (z / numItems) * 3 - 2; // fade out distant items

            // Optimize: simple matrix3d or individual properties
            // Individual is often faster for browser composition layers
            el.style.transform = `translate3d(${tx}%, ${ty}%, 0) rotate(${rot}deg)`;
            el.style.zIndex = Math.round(z * 10).toString(); // Higher precision z-index logic if allowed, or just round

            // Inner content opacity
            const inner = el.querySelector('.slider-item-content') as HTMLElement;
            if (inner) {
                inner.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
            }
        });

        rafRef.current = requestAnimationFrame(update);
    }, [numItems]);

    // Start loop
    useEffect(() => {
        rafRef.current = requestAnimationFrame(update);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [update]);


    // --- Interaction Handlers ---

    const handleWheel = useCallback((e: WheelEvent) => {
        if (!isHoveringRef.current) return;

        const wheelProgress = e.deltaY * speedWheel;
        const current = progressRef.current;
        const next = current + wheelProgress;

        // Check boundaries
        if ((next < 0 && e.deltaY < 0) || (next > 100 && e.deltaY > 0)) {
            // Let page scroll
            return;
        }

        e.preventDefault();
        e.stopPropagation();
        progressRef.current = Math.max(0, Math.min(100, next));
        // No setState here! The loop picks it up.
    }, [speedWheel]);

    const getClientX = (e: MouseEvent | TouchEvent) => {
        if ('touches' in e) return e.touches[0].clientX;
        return (e as MouseEvent).clientX;
    };

    const handleMouseDown = useCallback((e: MouseEvent | TouchEvent) => {
        isDownRef.current = true;
        const x = getClientX(e);
        if (x !== undefined) startXRef.current = x;
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent | TouchEvent) => {
        if (!isDownRef.current) return;

        const x = getClientX(e);
        if (x === undefined) return;

        const diff = (x - startXRef.current) * speedDrag;
        const current = progressRef.current;
        const next = Math.max(0, Math.min(100, current + diff));

        progressRef.current = next;
        startXRef.current = x;
    }, [speedDrag]);

    const handleMouseUp = useCallback(() => {
        isDownRef.current = false;
    }, []);

    const handleClick = useCallback((item: SliderItemData, index: number) => {
        // Smooth scroll to this item?
        // For performance, snap or simple lerp logic could be added to the loop
        // For now, instant snap to keep it simple and responsive
        const denominator = numItems > 1 ? numItems - 1 : 1;
        progressRef.current = (index / denominator) * 100;

        if (onItemClick) onItemClick(item, index);
    }, [numItems, onItemClick]);


    // --- Global Listeners ---
    useEffect(() => {
        const wheelOpts = { passive: false };
        // We attach wheel only to container via ref or ensure it's targeted correctly
        // But logic above uses global document listener when hopping?
        // Adjusted to use container events mostly, but sticking to provided logic for now
        // if user wants global wheel override while hovering.

        // Actually, let's attach to document if hovering
        document.addEventListener('wheel', handleWheel, wheelOpts as any);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchstart', handleMouseDown, { passive: true });
        document.addEventListener('touchmove', handleMouseMove, { passive: true });
        document.addEventListener('touchend', handleMouseUp);

        return () => {
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchstart', handleMouseDown);
            document.removeEventListener('touchmove', handleMouseMove);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, [handleWheel, handleMouseDown, handleMouseMove, handleMouseUp]);

    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-transparent"
            style={containerStyle}
            onMouseEnter={() => isHoveringRef.current = true}
            onMouseLeave={() => isHoveringRef.current = false}
        >
            <div className="relative z-10 h-[80vh] overflow-hidden pointer-events-none scale-[0.75] w-full">
                {items.map((item, index) => (
                    <SliderItem
                        key={`slider-item-${index}`}
                        ref={(el) => { itemRefs.current[index] = el; }}
                        item={item}
                        index={index}
                        onClick={() => handleClick(item, index)}
                    />
                ))}
            </div>
            {/* Static layout text */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-[90px] w-[1px] h-full border-r border-white/10 opacity-50"></div>
                <div className="absolute bottom-10 left-[40px] text-white/20 rotate-[-90deg] transform-origin-[0%_100%] text-[10px] uppercase tracking-[0.3em]">
                    TRIGANTARA ARCHIVES
                </div>
            </div>
        </div>
    );
};

export default ThreeDSlider;
