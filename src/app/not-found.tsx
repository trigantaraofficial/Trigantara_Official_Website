'use client';

import Link from 'next/link';
import { Compass, Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
            <div className="max-w-lg w-full text-center">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-[10rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#d4a017] via-[#f0c040] to-[#d4a017]/50 font-display tracking-wider">
                        404
                    </h1>
                </div>

                {/* Icon */}
                <div className="mb-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#d4a017]/10 flex items-center justify-center">
                        <Compass className="w-8 h-8 text-[#d4a017]" />
                    </div>
                </div>

                {/* Message */}
                <h2 className="text-2xl font-serif font-medium text-white mb-4">
                    Halaman Tidak Ditemukan
                </h2>
                <p className="text-white/60 mb-10 leading-relaxed max-w-md mx-auto">
                    Maaf, halaman yang Anda cari tidak dapat ditemukan.
                    Mungkin halaman telah dipindahkan atau alamat URL salah.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4a017] text-black font-medium rounded-full hover:bg-[#f0c040] transition-colors shadow-lg shadow-[#d4a017]/20"
                    >
                        <Home className="w-5 h-5" />
                        Ke Beranda
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors"
                    >
                        <Search className="w-5 h-5" />
                        Hubungi Kami
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="border-t border-white/10 pt-8">
                    <p className="text-white/40 text-sm mb-4">Halaman Populer:</p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {[
                            { name: 'Tentang', href: '/about' },
                            { name: 'Galeri', href: '/gallery' },
                            { name: 'Kegiatan', href: '/events' },
                            { name: 'Tim', href: '/team' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm text-white/60 hover:text-[#d4a017] bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Back Link */}
                <button
                    onClick={() => window.history.back()}
                    className="mt-8 inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke halaman sebelumnya
                </button>
            </div>
        </div>
    );
}
