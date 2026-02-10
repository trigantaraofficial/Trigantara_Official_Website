'use client';

import Container from "@/components/ui/Container";
import ScrollAnimation, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";
import { CountUp } from "@/components/lightswind/count-up";
import { Trophy, Medal, Award, Star, Calendar, MapPin, ExternalLink } from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";

// Sample Achievements Data
const achievements = [
    {
        id: 1,
        title: "Juara Umum Lomba Pramuka Se-Jabar",
        category: "Kompetisi",
        year: "2024",
        location: "Bandung",
        description: "Meraih predikat Juara Umum dalam perlombaan tingkat Provinsi Jawa Barat dengan mengumpulkan medali terbanyak.",
        image: "/assets/image/background.webp",
        medals: { gold: 5, silver: 3, bronze: 2 }
    },
    {
        id: 2,
        title: "Best Contingent Jambore Nasional",
        category: "Penghargaan",
        year: "2023",
        location: "Cibubur",
        description: "Ditetapkan sebagai kontingen terbaik dari Jawa Barat pada Jambore Nasional XI.",
        image: "/assets/image/background.webp",
        medals: null
    },
    {
        id: 3,
        title: "Juara 1 Pionering Tingkat Kwarda",
        category: "Kompetisi",
        year: "2023",
        location: "Garut",
        description: "Tim pionering Trigantara berhasil membangun menara tertinggi dengan struktur paling kokoh.",
        image: "/assets/image/background.webp",
        medals: { gold: 1, silver: 0, bronze: 0 }
    },
    {
        id: 4,
        title: "Penghargaan Ambalan Teladan",
        category: "Penghargaan",
        year: "2022",
        location: "Margahayu",
        description: "Diberikan oleh Kwartir Ranting Margahayu atas dedikasi dan kontribusi dalam pembinaan generasi muda.",
        image: "/assets/image/background.webp",
        medals: null
    }
];

const stats = [
    { label: "Medali Emas", value: 25, icon: Trophy },
    { label: "Medali Perak", value: 18, icon: Medal },
    { label: "Medali Perunggu", value: 12, icon: Award },
    { label: "Penghargaan", value: 8, icon: Star }
];

export default function AchievementsPage() {
    return (
        <div className="pt-20 bg-[#050505] min-h-screen">
            {/* Hero Section */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#050505]" />
                <motion.div
                    animate={{ opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[250px]"
                />

                <Container className="relative z-10">
                    <ScrollAnimation variant="fadeUp">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-6">
                                <Trophy className="w-4 h-4 text-[#D4AF37]" />
                                <span className="text-[#D4AF37] text-sm font-medium tracking-wide">Hall of Fame</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cinzel)] font-bold text-white mb-6 tracking-tight">
                                Prestasi <span className="text-gold-gradient">Membanggakan</span>
                            </h1>
                            <p className="text-lg text-white/60 leading-relaxed font-light">
                                Jejak keberhasilan Pramuka Trigantara dalam berbagai kompetisi
                                dan penghargaan tingkat daerah hingga nasional.
                            </p>
                        </div>
                    </ScrollAnimation>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-y border-white/[0.05]">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                                <div className="text-center group">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                                        <stat.icon className="w-7 h-7 text-[#D4AF37]" />
                                    </div>
                                    <CountUp
                                        value={stat.value}
                                        suffix="+"
                                        duration={2.5}
                                        className="text-4xl md:text-5xl font-serif text-white mb-2"
                                        animationStyle="gentle"
                                        colorScheme="custom"
                                        customColor="#ffffff"
                                    />
                                    <span className="block text-white/50 text-sm tracking-wide uppercase mt-2">{stat.label}</span>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Achievements Grid */}
            <section className="py-24">
                <Container>
                    <ScrollAnimation variant="fadeUp" className="mb-16">
                        <h2 className="text-3xl font-serif text-white mb-2">Pencapaian Terbaru</h2>
                        <p className="text-white/40">Koleksi prestasi yang telah diraih oleh ambalan kami</p>
                    </ScrollAnimation>

                    <StaggerContainer className="grid md:grid-cols-2 gap-8">
                        {achievements.map((item) => (
                            <StaggerItem key={item.id}>
                                <div className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500">
                                    {/* Image */}
                                    <div className="aspect-[16/9] relative overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 rounded-full bg-[#D4AF37] text-[#050505] text-xs font-semibold uppercase tracking-wide">
                                                {item.category}
                                            </span>
                                        </div>

                                        {/* Year Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium">
                                                {item.year}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                                            <div className="flex items-center gap-2 text-xs text-white/40">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {item.location}
                                            </div>

                                            {item.medals && (
                                                <div className="flex items-center gap-3">
                                                    {item.medals.gold > 0 && (
                                                        <span className="flex items-center gap-1 text-xs">
                                                            <span className="w-4 h-4 rounded-full bg-yellow-500" />
                                                            {item.medals.gold}
                                                        </span>
                                                    )}
                                                    {item.medals.silver > 0 && (
                                                        <span className="flex items-center gap-1 text-xs">
                                                            <span className="w-4 h-4 rounded-full bg-gray-300" />
                                                            {item.medals.silver}
                                                        </span>
                                                    )}
                                                    {item.medals.bronze > 0 && (
                                                        <span className="flex items-center gap-1 text-xs">
                                                            <span className="w-4 h-4 rounded-full bg-orange-600" />
                                                            {item.medals.bronze}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>
        </div>
    );
}
