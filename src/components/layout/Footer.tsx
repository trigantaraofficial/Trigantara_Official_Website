'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '../ui/Container';
import { Instagram, Mail, MapPin, Phone, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Tentang Kami', href: '/about' },
        { name: 'Berita', href: '/news' },
        { name: 'Galeri', href: '/gallery' },
        { name: 'Kontak', href: '/contact' },
    ];

    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            href: 'https://www.instagram.com/trigantara_official14',
        },
        {
            name: 'TikTok',
            icon: TikTokIcon,
            href: 'https://www.tiktok.com/@pramuka.smkmarhas',
        },
        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:trigantaraofficial@gmail.com',
        },
    ];

    return (
        <footer className="bg-[#050505] relative overflow-hidden pt-16">
            {/* Subtle top gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            <Container className="relative z-10 py-20 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-4 mb-8 group">
                            <motion.div
                                className="relative w-12 h-12"
                                whileHover={{ scale: 1.05, rotate: 3 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                <Image
                                    src="/assets/logo/trigantara.png"
                                    alt="Trigantara Logo"
                                    fill
                                    className="object-contain"
                                    sizes="48px"
                                />
                            </motion.div>
                            <div>
                                <span className="font-medium text-lg text-white/90 group-hover:text-white transition-colors block">
                                    Pramuka Trigantara
                                </span>
                                <span className="text-white/30 text-sm">SMK Marhas Margahayu</span>
                            </div>
                        </Link>

                        <p className="text-white/35 leading-relaxed max-w-sm mb-10 text-[15px]">
                            Membangun generasi muda yang berkarakter, mandiri, dan berprestasi
                            melalui kegiatan kepramukaan.
                        </p>

                        {/* Partner Logos */}
                        <div className="flex items-center gap-5 mb-10">
                            <motion.div
                                className="relative w-12 h-12 hover:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Image
                                    src="/assets/logo/smkmarhas.png"
                                    alt="SMK Marhas"
                                    fill
                                    className="object-contain"
                                    sizes="48px"
                                />
                            </motion.div>
                            <motion.div
                                className="relative w-12 h-12 hover:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Image
                                    src="/assets/logo/mahaputra.png"
                                    alt="Mahaputra"
                                    fill
                                    className="object-contain"
                                    sizes="48px"
                                />
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-[#d4a017] hover:border-[#d4a017]/20 hover:bg-[#d4a017]/5 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white/70 font-medium mb-6 text-sm tracking-wide">Navigasi</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-white/35 hover:text-white transition-colors duration-300 text-[15px]"
                                    >
                                        {/* Underline effect */}
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4a017]/50 group-hover:w-full transition-all duration-300" />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4">
                        <h4 className="text-white/70 font-medium mb-6 text-sm tracking-wide">Kontak</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <motion.div
                                    className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center flex-shrink-0"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <MapPin className="w-3.5 h-3.5 text-white/30" />
                                </motion.div>
                                <div>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        SMK Marhas Margahayu<br />
                                        Bandung, Jawa Barat
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <motion.div
                                    className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center flex-shrink-0"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Phone className="w-3.5 h-3.5 text-white/30" />
                                </motion.div>
                                <a
                                    href="tel:+6285176881328"
                                    className="text-white/50 hover:text-[#d4a017] transition-colors text-sm"
                                >
                                    +62 851-7688-1328
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <motion.div
                                    className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center flex-shrink-0"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Mail className="w-3.5 h-3.5 text-white/30" />
                                </motion.div>
                                <a
                                    href="mailto:trigantaraofficial@gmail.com"
                                    className="text-white/50 hover:text-[#d4a017] transition-colors text-sm"
                                >
                                    trigantaraofficial@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <motion.div
                                    className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center flex-shrink-0"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Instagram className="w-3.5 h-3.5 text-white/30" />
                                </motion.div>
                                <a
                                    href="https://www.instagram.com/trigantara_official14"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/50 hover:text-[#d4a017] transition-colors text-sm inline-flex items-center gap-1"
                                >
                                    @trigantara_official14
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>

            {/* Bottom Bar */}
            <div className="border-t border-white/[0.04]">
                <Container className="py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-white/25 text-sm text-center md:text-left"
                        >
                            © {currentYear} Ambalan Trigantara. All rights reserved.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-white/20 text-xs tracking-wide"
                        >
                            <span className="text-[#d4a017]/40">Satyaku Kudharmakan</span>
                            <span className="mx-2 text-white/10">•</span>
                            <span className="text-[#d4a017]/40">Dharmaku Kubaktikan</span>
                        </motion.p>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
