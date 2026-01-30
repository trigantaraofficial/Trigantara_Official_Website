'use client';

import { AuroraBackground } from "@/components/lightswind/aurora-background";
import TeamCarousel from "@/components/lightswind/team-carousel";
import Container from "@/components/ui/Container";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { motion } from "framer-motion";
import { User, Shield, Star, Award } from 'lucide-react';
import Image from "next/image";

// Sample Team Data
const coreTeam = [
    {
        id: "1",
        name: "Rizky Firmansyah",
        role: "Pradana Putra",
        image: "/assets/image/background.webp", // Placeholder
        bio: "Bertanggung jawab memimpin Ambalan Putra dan mengkoordinasikan program kerja tahunan."
    },
    {
        id: "2",
        name: "Siti Nurhaliza",
        role: "Pradani Putri",
        image: "/assets/image/background.webp",
        bio: "Bertanggung jawab memimpin Ambalan Putri dan memastikan kelancaran kegiatan keputrian."
    },
    {
        id: "3",
        name: "Ahmad Dani",
        role: "Kerani (Sekretaris)",
        image: "/assets/image/background.webp",
        bio: "Mengelola administrasi dan surat-menyurat ambalan serta dokumentasi kegiatan."
    },
    {
        id: "4",
        name: "Dewi Sartika",
        role: "Juru Uang (Bendahara)",
        image: "/assets/image/background.webp",
        bio: "Mengelola keuangan ambalan, pembukuan, dan pelaporan anggaran kegiatan."
    },
    {
        id: "5",
        name: "Budi Santoso",
        role: "Pemangku Adat",
        image: "/assets/image/background.webp",
        bio: "Menjaga nilai-nilai adat ambalan dan menegakkan kedisiplinan anggota."
    }
];

const pembina = [
    {
        name: "Kak Budi Setiawan",
        role: "Ka. Mabigus",
        image: "/assets/image/background.webp"
    },
    {
        name: "Kak Siti Aminah",
        role: "Pembina Putra",
        image: "/assets/image/background.webp"
    },
    {
        name: "Kak Rina Wati",
        role: "Pembina Putri",
        image: "/assets/image/background.webp"
    }
];

export default function TeamPage() {
    return (
        <div className="pt-20 bg-[#0a0a0a] min-h-screen">
            {/* Hero Section with Aurora Background */}
            <section className="relative h-[60vh] overflow-hidden">
                <AuroraBackground className="h-full bg-[#0a0a0a]">
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative z-10 text-center px-4"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 mx-auto backdrop-blur-sm">
                            <Shield className="w-4 h-4 text-[#d4a017]" />
                            <span className="text-[#d4a017] text-sm font-medium">Struktur Organisasi</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                            Dewan <span className="text-[#d4a017]">Ambalan</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Mengenal lebih dekat para pengurus yang berdedikasi untuk memajukan
                            Pramuka Trigantara masa bakti 2024/2025.
                        </p>
                    </motion.div>
                </AuroraBackground>
            </section>

            {/* Core Team Carousel */}
            <section className="py-20 bg-[#0a0a0a] relative z-10 -mt-20">
                <Container>
                    <ScrollAnimation variant="fadeUp" className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-4">Pengurus Inti</h2>
                        <div className="h-1 w-20 bg-[#d4a017] rounded-full mx-auto md:mx-0" />
                    </ScrollAnimation>

                    {/* Using the 3D Team Carousel Component */}
                    <div className="relative h-[600px] w-full">
                        <TeamCarousel
                            members={coreTeam}
                            title=""
                            cardWidth={300}
                            cardHeight={450}
                            autoPlay={3000}
                            background="transparent"
                            infoPosition="bottom"
                            infoTextColor="#ffffff"
                            titleColor="#d4a017"
                            sideCardScale={0.85}
                            sideCardOpacity={0.4}
                            className="h-full min-h-0"
                            cardClassName="border border-[#d4a017]/20 shadow-[0_0_50px_-12px_rgba(212,160,23,0.25)]"
                        />
                    </div>
                </Container>
            </section>

            {/* Pembina Section */}
            <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent" />

                <Container>
                    <ScrollAnimation variant="fadeUp" className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Majelis Pembimbing</h2>
                        <p className="text-white/40">Para pembina yang senantiasa membimbing langkah kami</p>
                    </ScrollAnimation>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pembina.map((item, index) => (
                            <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                                <div className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 text-center hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2">
                                    <div className="w-32 h-32 mx-auto rounded-full relative mb-6 p-1 border-2 border-[#d4a017]/30 group-hover:border-[#d4a017] transition-colors">
                                        <div className="w-full h-full rounded-full overflow-hidden relative">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-medium text-white mb-1">{item.name}</h3>
                                    <p className="text-[#d4a017] text-sm">{item.role}</p>

                                    {/* Decoration */}
                                    <div className="absolute top-4 right-4 text-white/5 group-hover:text-[#d4a017]/10 transition-colors">
                                        <Award className="w-8 h-8" />
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
