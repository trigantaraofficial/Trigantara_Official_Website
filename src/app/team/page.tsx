'use client';

import { AuroraBackground } from "@/components/lightswind/aurora-background";
import TeamCarousel from "@/components/lightswind/team-carousel";
import Container from "@/components/ui/Container";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { motion } from "framer-motion";
import { User, Shield, Star, Award } from 'lucide-react';
import Image from "next/image";

// Team Data - Updated with correct names
const coreTeam = [
    {
        id: "1",
        name: "Arief Fajar",
        role: "Pradana Putra",
        image: "/assets/image/background.webp",
        bio: "Bertanggung jawab memimpin Ambalan Putra dan mengkoordinasikan program kerja tahunan."
    },
    {
        id: "2",
        name: "Intan Nurhayati",
        role: "Pradana Putri",
        image: "/assets/image/background.webp",
        bio: "Bertanggung jawab memimpin Ambalan Putri dan memastikan kelancaran kegiatan keputrian."
    },
    {
        id: "3",
        name: "Angga Fahri",
        role: "Juru Adat Putra",
        image: "/assets/image/background.webp",
        bio: "Menjaga nilai-nilai adat ambalan putra dan menegakkan kedisiplinan anggota."
    },
    {
        id: "4",
        name: "Alicia Fasma Nidai",
        role: "Juru Adat Putri",
        image: "/assets/image/background.webp",
        bio: "Menjaga nilai-nilai adat ambalan putri dan menegakkan kedisiplinan anggota."
    },
];

const pembina = [
    {
        name: "Abdillah Andi Salam",
        role: "Pembina Putra",
        image: "/assets/image/background.webp"
    },
    {
        name: "Ibu Eka Sofiyati SH MM",
        role: "Pembina Putri",
        image: "/assets/image/background.webp"
    },
    {
        name: "Kak Testivan Riyadi",
        role: "Pelatih Putra",
        image: "/assets/image/background.webp"
    },
    {
        name: "Kak Sylvie",
        role: "Pelatih Putri",
        image: "/assets/image/background.webp"
    },
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
                        <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold text-white mb-6">
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

            {/* Pembina & Pelatih Section - PREMIUM REDESIGN */}
            <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent" />

                {/* Background glow */}
                <motion.div
                    animate={{ opacity: [0.03, 0.08, 0.03] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"
                />

                <Container className="relative z-10">
                    <ScrollAnimation variant="fadeUp" className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Majelis Pembimbing</h2>
                        <p className="text-white/40 text-lg">Para pembina dan pelatih yang senantiasa membimbing langkah kami</p>
                    </ScrollAnimation>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {pembina.map((item, index) => {
                            const isPelatih = item.role.includes('Pelatih');
                            const IconComponent = isPelatih ? Star : Shield;

                            return (
                                <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                                    <motion.div
                                        whileHover={{ y: -8 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="group relative rounded-2xl overflow-hidden"
                                    >
                                        {/* Gradient border effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]" />

                                        <div className="relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] group-hover:border-[#D4AF37]/20 rounded-2xl p-6 text-center transition-all duration-500">
                                            {/* Role Icon */}
                                            <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#D4AF37]/5 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                                                <IconComponent className="w-4 h-4 text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors" />
                                            </div>

                                            {/* Photo */}
                                            <div className="w-28 h-28 mx-auto rounded-full relative mb-5 p-[2px] bg-gradient-to-b from-[#D4AF37]/40 to-[#D4AF37]/10 group-hover:from-[#D4AF37] group-hover:to-[#AA8C2C] transition-all duration-500">
                                                <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0a0a0a]">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>

                                            {/* Info */}
                                            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">{item.name}</h3>
                                            <p className="text-[#D4AF37]/60 text-xs tracking-wider uppercase font-medium">{item.role}</p>
                                        </div>
                                    </motion.div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </Container>
            </section>
        </div>
    );
}
