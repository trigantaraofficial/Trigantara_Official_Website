'use client';

import Container from "@/components/ui/Container";
import ScrollAnimation, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";
import { Calendar, Tag, ArrowRight, Search, Clock, User } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// Sample News Data
const newsItems = [
    {
        id: 1,
        title: "Pelantikan Bantara & Laksana Ambalan 2024",
        excerpt: "Kegiatan pelantikan anggota baru penegak Bantara dan Laksana yang dilaksanakan di Bumi Perkemahan Ranca Upas.",
        category: "Kegiatan",
        date: "25 Januari 2024",
        author: "Admin",
        image: "/assets/image/background.webp",
        readTime: "5 menit baca"
    },
    {
        id: 2,
        title: "Juara Umum Lomba Keagamaan Pramuka Se-Jawa Barat",
        excerpt: "Pramuka Trigantara berhasil meraih predikat Juara Umum pada perhelatan lomba tingkat provinsi.",
        category: "Prestasi",
        date: "12 Januari 2024",
        author: "Humas",
        image: "/assets/image/background.webp",
        readTime: "3 menit baca"
    },
    {
        id: 3,
        title: "Bakti Sosial: Berbagi Bersama di Bulan Ramadhan",
        excerpt: "Kegiatan berbagi takjil dan santunan anak yatim yang dilaksanakan oleh seluruh anggota Ambalan.",
        category: "Kegiatan",
        date: "15 Maret 2024",
        author: "Admin",
        image: "/assets/image/background.webp",
        readTime: "4 menit baca"
    },
    {
        id: 4,
        title: "Open Recruitment Anggota Baru Angkatan 2024/2025",
        excerpt: "Pendaftaran anggota baru Pramuka Trigantara telah dibuka. Segera daftarkan dirimu dan jadilah bagian dari kami!",
        category: "Pengumuman",
        date: "01 Juli 2024",
        author: "Panitia",
        image: "/assets/image/background.webp",
        readTime: "2 menit baca"
    },
    {
        id: 5,
        title: "Latihan Gabungan se-Wilayah Bandung Selatan",
        excerpt: "Meningkatkan persaudaraan dan skill kepramukaan melalui latihan gabungan bersama sekolah-sekolah lain.",
        category: "Kegiatan",
        date: "20 Mei 2024",
        author: "Admin",
        image: "/assets/image/background.webp",
        readTime: "6 menit baca"
    },
    {
        id: 6,
        title: "Musyawarah Ambalan (MUSAM) 2024",
        excerpt: "Laporan pertanggungjawaban pengurus masa bakti 2023/2024 dan pemilihan Pradana/Pradani baru.",
        category: "Kegiatan",
        date: "10 Desember 2023",
        author: "Admin",
        image: "/assets/image/background.webp",
        readTime: "8 menit baca"
    }
];

const categories = ['Semua', 'Kegiatan', 'Prestasi', 'Pengumuman', 'Opini'];

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredNews = newsItems.filter(item => {
        const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a]" />
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#d4a017]/10 rounded-full blur-[200px]"
                    />
                </div>

                <Container className="relative z-10">
                    <ScrollAnimation variant="fadeUp">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4a017]/10 border border-[#d4a017]/20 mb-6">
                                <Calendar className="w-4 h-4 text-[#d4a017]" />
                                <span className="text-[#d4a017] text-sm">Berita & Kegiatan</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
                                Kabar <span className="bg-gradient-to-r from-[#d4a017] to-[#f0c040] bg-clip-text text-transparent">Terbaru</span>
                            </h1>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Ikuti perkembangan terkini, prestasi, dan cerita inspiratif
                                dari perjalanan Pramuka Trigantara.
                            </p>
                        </div>
                    </ScrollAnimation>
                </Container>
            </section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent" />

            {/* Search & Filter */}
            <section className="py-8 bg-[#0a0a0a] sticky top-20 z-40 backdrop-blur-xl border-b border-white/[0.05]">
                <Container>
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-96 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#d4a017] transition-colors" />
                            <input
                                type="text"
                                placeholder="Cari berita..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full py-3.5 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4a017]/50 focus:bg-white/[0.05] transition-all duration-300"
                            />
                        </div>

                        {/* Filter Tags */}
                        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-end overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeCategory === category
                                            ? 'bg-[#d4a017] text-black'
                                            : 'bg-white/[0.03] text-white/60 border border-white/[0.08] hover:text-white hover:border-white/20'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* News Grid */}
            <section className="py-20 bg-[#0a0a0a] min-h-[60vh]">
                <Container>
                    {filteredNews.length > 0 ? (
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredNews.map((item) => (
                                <StaggerItem key={item.id}>
                                    <Link href="#" className="group block h-full">
                                        <article className="h-full rounded-2xl bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:border-[#d4a017]/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(212,160,23,0.1)] flex flex-col">
                                            {/* Image */}
                                            <div className="aspect-[16/10] relative overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />

                                                {/* Category Badge */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white flex items-center gap-1.5">
                                                        <Tag className="w-3 h-3 text-[#d4a017]" />
                                                        {item.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {item.date}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {item.readTime}
                                                    </div>
                                                </div>

                                                <h2 className="text-xl font-medium text-white mb-3 line-clamp-2 group-hover:text-[#d4a017] transition-colors">
                                                    {item.title}
                                                </h2>

                                                <p className="text-white/50 text-sm line-clamp-3 mb-6 flex-grow">
                                                    {item.excerpt}
                                                </p>

                                                <div className="flex items-center justify-between pt-6 border-t border-white/[0.05] mt-auto">
                                                    <div className="flex items-center gap-2 text-sm text-white/60">
                                                        <div className="w-6 h-6 rounded-full bg-[#d4a017]/20 flex items-center justify-center">
                                                            <User className="w-3 h-3 text-[#d4a017]" />
                                                        </div>
                                                        {item.author}
                                                    </div>
                                                    <span className="inline-flex items-center gap-1 text-[#d4a017] text-sm font-medium group-hover:gap-2 transition-all">
                                                        Baca
                                                        <ArrowRight className="w-4 h-4" />
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 rounded-full bg-white/[0.03] flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-white/20" />
                            </div>
                            <h3 className="text-white font-medium mb-1">Tidak ada berita ditemukan</h3>
                            <p className="text-white/40">Coba cari dengan kata kunci lain</p>
                        </div>
                    )}

                    {/* Pagination (Visual Only) */}
                    {filteredNews.length > 0 && (
                        <ScrollAnimation variant="fadeUp" className="mt-16 text-center">
                            <div className="inline-flex items-center gap-2 p-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                                <button className="w-10 h-10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors">
                                    1
                                </button>
                                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#d4a017] text-black font-medium">
                                    2
                                </button>
                                <button className="w-10 h-10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors">
                                    3
                                </button>
                            </div>
                        </ScrollAnimation>
                    )}
                </Container>
            </section>
        </div>
    );
}
