'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import LogoMarquee from './LogoMarquee';
import GoldParticles from './GoldParticles';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-[110vh] flex flex-col justify-center overflow-hidden bg-[#050505]">
            {/* Cinematic Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y, opacity }}
            >
                {/* Dark Overlay with noise for film grain effect if desired */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505] mix-blend-multiply" />
                <div className="absolute inset-0 z-10 bg-black/40" /> {/* Dimmer */}

                <Image
                    src="/assets/image/background.webp"
                    alt="Hero Background"
                    fill
                    className="object-cover object-center scale-105"
                    priority
                    quality={100}
                    sizes="100vw"
                />
            </motion.div>

            {/* Floating Gold Particles */}
            <GoldParticles count={60} />

            {/* Artistic Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Floating Label - Elegant */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.1] backdrop-blur-md">
                            <Star className="w-3 h-3 text-[#D4AF37]" fill="#D4AF37" />
                            <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-[#E5E4E2] uppercase font-sans">
                                Ambalan Ki Hajar Dewantara - Inggit Garnasih
                            </span>
                            <Star className="w-3 h-3 text-[#D4AF37]" fill="#D4AF37" />
                        </div>
                    </motion.div>

                    {/* Main Title - Majestic Cinzel Font */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display font-medium text-white mb-6 leading-none relative"
                    >
                        <span className="block text-4xl md:text-6xl mb-2 tracking-widest font-serif italic text-white/80">Pramuka</span>
                        <span className="block text-6xl md:text-8xl lg:text-[7rem] bg-clip-text text-transparent bg-gradient-to-b from-[#F4C430] via-[#D4AF37] to-[#AA8C2C] pb-4 drop-shadow-2xl filter">
                            TRIGANTARA
                        </span>
                    </motion.h1>

                    {/* Subtitle - Elegant Serif */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-[#E5E4E2]/80 max-w-2xl mx-auto font-serif italic leading-relaxed mb-12"
                    >
                        "Membangun karakter generasi emas dengan semangat kepramukaan yang berkelas, berintegritas, dan tak terbatas."
                    </motion.p>

                    {/* CTAs - Luxurious Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6 relative"
                    >
                        {/* Primary Button */}
                        <Link href="/about" className="btn-primary group">
                            <span className="relative z-10 flex items-center gap-2">
                                Jelajahi Kami
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>

                        {/* Secondary Button */}
                        <Link href="/contact" className="btn-secondary group">
                            Hubungi Kami
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Fade Gradient for seamless transition */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-10" />
        </section>
    );
}
