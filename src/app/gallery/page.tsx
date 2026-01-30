'use client';

import Container from "@/components/ui/Container";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Camera, ImageIcon, FolderOpen } from 'lucide-react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = ['Semua', 'Latihan', 'Perkemahan', 'Kegiatan', 'Prestasi'];

// Placeholder images - replace with actual images
const photos = [
    { id: 1, src: '/assets/image/background.webp', category: 'Latihan', alt: 'Latihan Rutin' },
    { id: 2, src: '/assets/image/background.webp', category: 'Perkemahan', alt: 'Perkemahan' },
    { id: 3, src: '/assets/image/background.webp', category: 'Kegiatan', alt: 'Kegiatan Bakti' },
    { id: 4, src: '/assets/image/background.webp', category: 'Prestasi', alt: 'Prestasi Lomba' },
    { id: 5, src: '/assets/image/background.webp', category: 'Latihan', alt: 'PBB' },
    { id: 6, src: '/assets/image/background.webp', category: 'Perkemahan', alt: 'Camping' },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [selectedImage, setSelectedImage] = useState<typeof photos[0] | null>(null);

    const filteredPhotos = activeCategory === 'Semua'
        ? photos
        : photos.filter(p => p.category === activeCategory);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a]" />
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#d4a017]/10 rounded-full blur-[200px]"
                    />
                </div>

                <Container className="relative z-10">
                    <ScrollAnimation variant="fadeUp">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4a017]/10 border border-[#d4a017]/20 mb-6">
                                <Camera className="w-4 h-4 text-[#d4a017]" />
                                <span className="text-[#d4a017] text-sm">Galeri Foto</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
                                Momen <span className="bg-gradient-to-r from-[#d4a017] to-[#f0c040] bg-clip-text text-transparent">Berharga</span>
                            </h1>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Dokumentasi perjalanan dan kegiatan Pramuka Trigantara
                                dalam membangun generasi muda berkarakter.
                            </p>
                        </div>
                    </ScrollAnimation>
                </Container>
            </section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent" />

            {/* Gallery Section */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0c0c0c] to-[#0a0a0a]" />

                <Container className="relative z-10">
                    {/* Category Filter */}
                    <ScrollAnimation variant="fadeUp">
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                            ? 'bg-[#d4a017] text-black'
                                            : 'bg-white/[0.03] text-white/60 border border-white/[0.08] hover:text-white hover:border-white/20'
                                        }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </ScrollAnimation>

                    {/* Photo Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredPhotos.map((photo, index) => (
                                <motion.div
                                    key={photo.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    onClick={() => setSelectedImage(photo)}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/[0.02] border border-white/[0.05]">
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                                        {/* Info */}
                                        <div className="absolute inset-x-0 bottom-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="inline-block px-2 py-1 rounded-full bg-[#d4a017]/20 text-[#d4a017] text-xs mb-2">
                                                {photo.category}
                                            </span>
                                            <h3 className="text-white font-medium">{photo.alt}</h3>
                                        </div>

                                        {/* Zoom Icon */}
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                                                <ImageIcon className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty State */}
                    {filteredPhotos.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <ImageIcon className="w-16 h-16 text-white/20 mx-auto mb-4" />
                            <p className="text-white/40">Belum ada foto untuk kategori ini</p>
                        </motion.div>
                    )}
                </Container>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#d4a017]/20 text-[#d4a017] text-sm mb-2">
                                    {selectedImage.category}
                                </span>
                                <h3 className="text-xl font-light text-white">{selectedImage.alt}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent" />

            {/* Albums Section */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-black" />

                <Container className="relative z-10">
                    <ScrollAnimation variant="fadeUp">
                        <div className="text-center mb-16">
                            <p className="text-[#d4a017]/80 text-xs tracking-[0.35em] uppercase mb-6">
                                Koleksi
                            </p>
                            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                                Album <span className="text-white/50">Kegiatan</span>
                            </h2>
                        </div>
                    </ScrollAnimation>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { name: 'Kemah Penegak 2024', count: 24, year: '2024' },
                            { name: 'Pelantikan DA', count: 18, year: '2024' },
                            { name: 'Latihan Rutin', count: 45, year: '2024' },
                        ].map((album, index) => (
                            <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] cursor-pointer overflow-hidden relative"
                                >
                                    {/* Background Image Preview */}
                                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                        <Image
                                            src="/assets/image/background.webp"
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-[#d4a017]/10 flex items-center justify-center mb-5 group-hover:bg-[#d4a017]/20 transition-colors">
                                            <FolderOpen className="w-6 h-6 text-[#d4a017]" />
                                        </div>

                                        <h3 className="text-lg font-light text-white mb-2 group-hover:text-white transition-colors">
                                            {album.name}
                                        </h3>

                                        <div className="flex items-center gap-3 text-white/40 text-sm">
                                            <span>{album.count} foto</span>
                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                            <span>{album.year}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
