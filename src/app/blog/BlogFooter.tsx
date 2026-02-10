'use client';

import Link from 'next/link';
import { useBlogTheme } from './BlogThemeContext';

export default function BlogFooter() {
    const { theme } = useBlogTheme();
    const isDark = theme === 'dark';

    const bgClass = isDark ? 'bg-[#050505]' : 'bg-[#F0EDE4]';
    const textClass = isDark ? 'text-white/40' : 'text-[#1a1a1a]/40';
    const borderClass = isDark ? 'border-white/[0.05]' : 'border-[#1a1a1a]/[0.08]';
    const linkClass = isDark ? 'text-white/60 hover:text-[#D4AF37]' : 'text-[#1a1a1a]/60 hover:text-[#AA8C2C]';

    return (
        <footer className={`${bgClass} border-t ${borderClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#AA8C2C] flex items-center justify-center">
                                <span className="text-black font-bold text-sm">T</span>
                            </div>
                            <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
                                Trigantara Blog
                            </span>
                        </div>
                        <p className={`text-sm ${textClass} leading-relaxed`}>
                            Blog resmi Pramuka Trigantara — SMK Marhas Margahayu, Bandung.
                            Berita, kegiatan, dan artikel seputar kepramukaan.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white/70' : 'text-[#1a1a1a]/70'}`}>
                            Tautan Cepat
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { href: '/', label: 'Website Utama' },
                                { href: '/blog', label: 'Blog Beranda' },
                                { href: '/about', label: 'Tentang Kami' },
                                { href: '/contact', label: 'Kontak' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={`text-sm ${linkClass} transition-colors`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kategori */}
                    <div>
                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white/70' : 'text-[#1a1a1a]/70'}`}>
                            Kategori
                        </h4>
                        <ul className="space-y-2">
                            {['Berita', 'Kegiatan', 'Artikel', 'Pengumuman'].map((cat) => (
                                <li key={cat}>
                                    <Link
                                        href={`/blog?category=${cat.toLowerCase()}`}
                                        className={`text-sm ${linkClass} transition-colors`}
                                    >
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={`mt-10 pt-6 border-t ${borderClass} flex flex-col sm:flex-row items-center justify-between gap-4`}>
                    <p className={`text-xs ${textClass}`}>
                        © {new Date().getFullYear()} Pramuka Trigantara. All rights reserved.
                    </p>
                    <Link
                        href="/"
                        className={`text-xs ${linkClass} transition-colors`}
                    >
                        ← Kembali ke Website Utama
                    </Link>
                </div>
            </div>
        </footer>
    );
}
