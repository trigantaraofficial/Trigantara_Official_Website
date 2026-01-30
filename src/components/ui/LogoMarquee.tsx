'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
    { name: 'Ambalan Trigantara', src: '/assets/logo/trigantara.png' },
    { name: 'SMK Marhas', src: '/assets/logo/smkmarhas.png' },
    { name: 'Mahaputra', src: '/assets/logo/mahaputra.png' },
];

export default function LogoMarquee() {
    // We don't need excessive duplication if we use the twin-container method
    // But we replicate logos inside each container to ensure they span reasonable width
    const marqueeLogos = [...logos, ...logos, ...logos];

    return (
        <div className="relative w-full py-12 overflow-hidden bg-black/20 border-y border-white/5 backdrop-blur-sm group">
            {/* Gradient Masks */}
            <div className="absolute inset-0 z-10 w-32 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

            <div className="flex overflow-hidden relative select-none">
                {/* Container 1 */}
                <motion.div
                    className="flex items-center min-w-full gap-24 shrink-0 pr-24"
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {marqueeLogos.map((logo, idx) => (
                        <div key={`c1-${idx}`} className="relative h-24 w-[180px] shrink-0 flex items-center justify-center grayscale-0 filter-none opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={150}
                                height={100}
                                className="object-contain max-h-full w-auto drop-shadow-lg"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Container 2 (Identical Copy for seamless loop) */}
                <motion.div
                    className="flex items-center min-w-full gap-24 shrink-0 pr-24"
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {marqueeLogos.map((logo, idx) => (
                        <div key={`c2-${idx}`} className="relative h-24 w-[180px] shrink-0 flex items-center justify-center grayscale-0 filter-none opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={150}
                                height={100}
                                className="object-contain max-h-full w-auto drop-shadow-lg"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
