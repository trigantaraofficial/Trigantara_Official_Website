'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navigation = [
        { name: 'Beranda', href: '/' },
        { name: 'Tentang', href: '/about' },
        { name: 'Prestasi', href: '/achievements' },
        { name: 'Kegiatan', href: '/events' },
        { name: 'Galeri', href: '/gallery' },
        { name: 'Tim', href: '/team' },
        { name: 'Kontak', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';

            // Add escape key handler
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    setIsMenuOpen(false);
                }
            };

            document.addEventListener('keydown', handleEscape);
            return () => {
                document.body.style.overflow = 'unset';
                document.removeEventListener('keydown', handleEscape);
            };
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled ? 'py-3' : 'py-5'
                    }`}
            >
                <Container>
                    <div className="flex items-center justify-between">
                        {/* Logo - Always visible */}
                        <Link href="/" className="flex items-center gap-3 group relative z-10">
                            <motion.div
                                className="relative w-10 h-10 md:w-11 md:h-11"
                                whileHover={{ scale: 1.05, rotate: 3 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-[#d4a017]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <Image
                                    src="/assets/logo/trigantara.png"
                                    alt="Trigantara Logo"
                                    fill
                                    className="object-contain relative z-10"
                                    priority
                                />
                            </motion.div>
                            <span className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors duration-300">
                                Trigantara
                            </span>
                        </Link>

                        {/* Center Navigation - Desktop with Floating Pill */}
                        <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
                            <motion.div
                                className="flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-500"
                                animate={{
                                    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0)',
                                    backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
                                    boxShadow: isScrolled
                                        ? '0 4px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                                        : '0 0 0 rgba(0, 0, 0, 0)',
                                    border: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0)',
                                }}
                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                style={{
                                    WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
                                }}
                            >
                                {navigation.map((item) => {
                                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`relative px-5 py-2.5 text-base font-medium transition-all duration-300 group rounded-full ${isActive
                                                ? 'text-[#d4a017] bg-white/5'
                                                : 'text-white/80 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {item.name}
                                            <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#d4a017]/0 via-[#d4a017] to-[#d4a017]/0 transition-all duration-300 ease-out rounded-full ${isActive ? 'w-2/3' : 'w-0 group-hover:w-2/3'
                                                }`} />
                                        </Link>
                                    );
                                })}
                            </motion.div>
                        </nav>

                        {/* Right Side - Bergabung Button */}
                        <div className="hidden lg:flex items-center relative z-10">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center gap-2 bg-[#d4a017] text-black font-medium px-6 py-2.5 rounded-full overflow-hidden transition-all duration-300"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-[#f0c040] to-[#d4a017] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <span className="absolute -inset-1 bg-[#d4a017]/30 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                                    <span className="relative z-10 text-sm">Bergabung</span>
                                    <ChevronRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden relative z-50 p-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                    >
                                        <X className="w-6 h-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                    >
                                        <Menu className="w-6 h-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </Container>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'tween',
                                duration: 0.35,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#0a0a0a] z-40 lg:hidden"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                            <div className="flex flex-col h-full pt-24 pb-8 px-6">
                                <nav className="flex-1">
                                    <ul className="space-y-1">
                                        {navigation.map((item, index) => {
                                            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                                            return (
                                                <motion.li
                                                    key={item.name}
                                                    initial={{ opacity: 0, x: 30 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        delay: 0.1 + index * 0.05,
                                                        duration: 0.3,
                                                        ease: [0.4, 0, 0.2, 1]
                                                    }}
                                                >
                                                    <Link
                                                        href={item.href}
                                                        className={`flex items-center justify-between py-4 px-4 text-lg rounded-xl transition-all duration-200 group ${isActive
                                                            ? 'text-[#d4a017] bg-[#d4a017]/10'
                                                            : 'text-white/70 hover:text-white hover:bg-white/5'
                                                            }`}
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <span>{item.name}</span>
                                                        <ChevronRight className={`w-5 h-5 transition-all ${isActive
                                                            ? 'text-[#d4a017]'
                                                            : 'text-white/30 group-hover:text-[#d4a017] group-hover:translate-x-1'
                                                            }`} />
                                                    </Link>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>
                                </nav>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.35, duration: 0.3 }}
                                    className="pt-6 border-t border-white/5"
                                >
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center gap-2 w-full bg-[#d4a017] text-black font-medium py-4 rounded-xl transition-all duration-300 hover:bg-[#f0c040]"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Bergabung
                                        <ChevronRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.3 }}
                                    className="text-center text-white/30 text-sm mt-6"
                                >
                                    SMK Marhas Margahayu
                                </motion.p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
