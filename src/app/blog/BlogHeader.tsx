'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { useBlogTheme } from './BlogThemeContext';
import { Sun, Moon, Menu, X, ArrowLeft, ChevronDown, Home, Newspaper, CalendarDays, FileText, Megaphone, Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Category definitions with sub-categories ─────────────────── */
const categories = [
    {
        id: 'beranda',
        label: 'Beranda',
        href: '/blog',
        icon: Home,
        exact: true,
    },
    {
        id: 'berita',
        label: 'Berita',
        href: '/blog?category=berita',
        icon: Newspaper,
        subCategories: [
            { label: 'Berita Terkini', href: '/blog?category=berita&sub=terkini' },
            { label: 'Liputan Kegiatan', href: '/blog?category=berita&sub=liputan' },
            { label: 'Prestasi', href: '/blog?category=berita&sub=prestasi' },
        ],
    },
    {
        id: 'kegiatan',
        label: 'Kegiatan',
        href: '/blog?category=kegiatan',
        icon: CalendarDays,
        subCategories: [
            { label: 'Perkemahan', href: '/blog?category=kegiatan&sub=perkemahan' },
            { label: 'Latihan Rutin', href: '/blog?category=kegiatan&sub=latihan' },
            { label: 'Bakti Sosial', href: '/blog?category=kegiatan&sub=baksos' },
            { label: 'Upacara', href: '/blog?category=kegiatan&sub=upacara' },
        ],
    },
    {
        id: 'artikel',
        label: 'Artikel',
        href: '/blog?category=artikel',
        icon: FileText,
        subCategories: [
            { label: 'Edukasi', href: '/blog?category=artikel&sub=edukasi' },
            { label: 'Tips & Trik', href: '/blog?category=artikel&sub=tips' },
            { label: 'Sejarah Pramuka', href: '/blog?category=artikel&sub=sejarah' },
        ],
    },
    {
        id: 'pengumuman',
        label: 'Pengumuman',
        href: '/blog?category=pengumuman',
        icon: Megaphone,
        subCategories: [
            { label: 'Pendaftaran', href: '/blog?category=pengumuman&sub=pendaftaran' },
            { label: 'Jadwal', href: '/blog?category=pengumuman&sub=jadwal' },
            { label: 'Informasi Umum', href: '/blog?category=pengumuman&sub=info' },
        ],
    },
];

/* ── Dropdown Category Item ───────────────────────────────────── */
function CategoryDropdown({ cat, isDark, textMuted }: {
    cat: typeof categories[0];
    isDark: boolean;
    textMuted: string;
}) {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setOpen(false), 200);
    };

    useEffect(() => {
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }, []);

    const hasSubs = cat.subCategories && cat.subCategories.length > 0;

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                href={cat.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${textMuted} ${isDark ? 'hover:text-white hover:bg-white/5' : 'hover:text-[#1a1a1a] hover:bg-black/5'}`}
            >
                {cat.label}
                {hasSubs && <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />}
            </Link>

            {/* Dropdown */}
            <AnimatePresence>
                {open && hasSubs && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full left-0 mt-1 min-w-[200px] rounded-xl border py-2 z-50 shadow-xl
                            ${isDark
                                ? 'bg-[#111] border-white/[0.08]'
                                : 'bg-white border-[#1a1a1a]/[0.08]'
                            }`}
                    >
                        {cat.subCategories!.map((sub) => (
                            <Link
                                key={sub.href}
                                href={sub.href}
                                className={`block px-4 py-2.5 text-sm transition-colors
                                    ${isDark
                                        ? 'text-white/50 hover:text-[#D4AF37] hover:bg-white/[0.03]'
                                        : 'text-[#1a1a1a]/50 hover:text-[#AA8C2C] hover:bg-black/[0.03]'
                                    }`}
                            >
                                {sub.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ── Blog Header with Logo + Category Nav ─────────────────────── */
export default function BlogHeader() {
    const { theme, toggleTheme } = useBlogTheme();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);
    const isDark = theme === 'dark';

    const bgClass = isDark ? 'bg-[#0a0a0a]/95' : 'bg-[#FAFAF5]/95';
    const textClass = isDark ? 'text-white' : 'text-[#1a1a1a]';
    const textMutedClass = isDark ? 'text-white/50' : 'text-[#1a1a1a]/50';
    const borderClass = isDark ? 'border-white/[0.08]' : 'border-[#1a1a1a]/[0.08]';

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 ${bgClass} backdrop-blur-xl border-b ${borderClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Bar: Logo + Actions */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo with Trigantara image */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            className={`p-1.5 rounded-lg ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-colors`}
                            title="Kembali ke Website Utama"
                        >
                            <ArrowLeft className={`w-4 h-4 ${textMutedClass}`} />
                        </Link>
                        <Link href="/blog" className="flex items-center gap-2.5">
                            <div className="relative w-9 h-9">
                                <Image
                                    src="/assets/logo/trigantara.png"
                                    alt="Trigantara"
                                    fill
                                    className="object-contain"
                                    sizes="36px"
                                />
                            </div>
                            <div>
                                <span className={`text-lg font-bold ${textClass} leading-none`}>Trigantara</span>
                                <span className={`text-[10px] ${isDark ? 'text-[#D4AF37]/60' : 'text-[#AA8C2C]/60'} block leading-none mt-0.5 tracking-wider uppercase`}>Pramuka SMK Marhas</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop: Category Navigation */}
                    <nav className="hidden lg:flex items-center gap-0.5">
                        {categories.map((cat) => (
                            <CategoryDropdown
                                key={cat.id}
                                cat={cat}
                                isDark={isDark}
                                textMuted={textMutedClass}
                            />
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={toggleTheme}
                            className={`p-2.5 rounded-lg ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-colors cursor-pointer`}
                            title={isDark ? 'Mode Terang' : 'Mode Gelap'}
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-[#D4AF37]" />
                            ) : (
                                <Moon className="w-5 h-5 text-[#AA8C2C]" />
                            )}
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2.5 rounded-lg lg:hidden ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-colors cursor-pointer`}
                        >
                            {mobileMenuOpen ? (
                                <X className={`w-5 h-5 ${textClass}`} />
                            ) : (
                                <Menu className={`w-5 h-5 ${textClass}`} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`lg:hidden border-t ${borderClass} ${bgClass} overflow-hidden`}
                    >
                        <nav className="px-4 py-3 space-y-1">
                            {categories.map((cat) => {
                                const hasSubs = cat.subCategories && cat.subCategories.length > 0;
                                const isExpanded = mobileExpandedCategory === cat.id;

                                return (
                                    <div key={cat.id}>
                                        <div className="flex items-center">
                                            <Link
                                                href={cat.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium ${textMutedClass} ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-colors`}
                                            >
                                                <cat.icon className="w-4 h-4" />
                                                {cat.label}
                                            </Link>
                                            {hasSubs && (
                                                <button
                                                    onClick={() => setMobileExpandedCategory(isExpanded ? null : cat.id)}
                                                    className={`p-2 rounded-lg ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-colors cursor-pointer`}
                                                >
                                                    <ChevronDown className={`w-4 h-4 ${textMutedClass} transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Sub-categories */}
                                        <AnimatePresence>
                                            {isExpanded && hasSubs && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="ml-8 space-y-0.5 overflow-hidden"
                                                >
                                                    {cat.subCategories!.map((sub) => (
                                                        <Link
                                                            key={sub.href}
                                                            href={sub.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className={`block px-4 py-2.5 rounded-lg text-sm ${isDark
                                                                ? 'text-white/40 hover:text-[#D4AF37] hover:bg-white/[0.03]'
                                                                : 'text-[#1a1a1a]/40 hover:text-[#AA8C2C] hover:bg-black/[0.03]'
                                                                } transition-colors`}
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}

                            {/* Divider & Back to main site */}
                            <div className={`border-t ${borderClass} mt-2 pt-2`}>
                                <Link
                                    href="/"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[#D4AF37] ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-colors`}
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Website Utama
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
