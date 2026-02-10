'use client';

import Container from "@/components/ui/Container";
import ScrollAnimation, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";
import Image from "next/image";
import { Users, Target, Award, History, Compass, Shield, Heart, BookOpen } from 'lucide-react';
import { motion } from "framer-motion";
import ThreeDSlider from "@/components/lightswind/ThreeDSlider";
import { AngledSlider } from "@/components/lightswind/AngledSlider";
import GlowingCards, { GlowingCard } from "@/components/lightswind/glowing-cards";

// Placeholder data for sliders
const historyItems = [
    { title: "Pelantikan 2014", num: "01", imageUrl: "/assets/image/ki_hajar_dewantara.webp" },
    { title: "Perkemahan 2018", num: "02", imageUrl: "/assets/image/inggit.jpg" },
    { title: "Masa Kini", num: "03", imageUrl: "/assets/image/akhirbackground.webp" },
    { title: "Masa Depan", num: "04", imageUrl: "/assets/image/background.webp" },
];

const visionItems = [
    { id: 1, url: "/assets/image/background.webp", title: "Berkarakter" },
    { id: 2, url: "/assets/image/akhirbackground.webp", title: "Mandiri" },
    { id: 3, url: "/assets/image/inggit.jpg", title: "Berprestasi" },
];

export default function AboutPage() {
    return (
        <div className="pt-20 bg-[#050505] min-h-screen text-white overflow-hidden">
            {/* Hero Section */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a]" />

                {/* Aurora Spot */}
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4a017]/5 rounded-full blur-[200px] pointer-events-none"
                />

                <Container className="relative z-10">
                    <ScrollAnimation variant="fadeUp">
                        <div className="text-center max-w-4xl mx-auto">
                            <p className="text-[#d4a017]/80 text-xs tracking-[0.35em] uppercase mb-6 font-medium">
                                Tentang Kami
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-cinzel)] font-bold text-white mb-8 tracking-wide">
                                Mengenal <span className="text-[#d4a017]">Trigantara</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto font-light">
                                Pramuka Trigantara adalah wadah pembinaan Pramuka Penegak di SMK Marhas Margahayu
                                yang berdedikasi untuk membentuk generasi muda berkarakter, mandiri, dan berprestasi.
                            </p>
                        </div>
                    </ScrollAnimation>
                </Container>
            </section>

            {/* History Section with ThreeDSlider */}
            <section className="py-20 relative border-y border-white/5 bg-[#080808]">
                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 h-[600px] w-full relative">
                            {/* 3D Slider Integration */}
                            <ThreeDSlider
                                items={historyItems}
                                containerStyle={{ height: '100%', width: '100%' }}
                            />
                        </div>

                        <div className="order-1 lg:order-2">
                            <ScrollAnimation variant="fadeUp">
                                <p className="text-[#d4a017]/80 text-xs tracking-[0.35em] uppercase mb-6">
                                    Sejarah & Kenangan
                                </p>
                                <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
                                    Perjalanan <span className="text-white/50">Kami</span>
                                </h2>
                                <div className="space-y-6 text-white/50 text-lg leading-relaxed font-light">
                                    <p>
                                        Pramuka Trigantara didirikan dengan semangat untuk melanjutkan
                                        estafet gerakan Pramuka di SMK Marhas Margahayu.
                                    </p>
                                    <p>
                                        Setiap foto dalam arsip kami menceritakan kisah perjuangan,
                                        persahabatan, dan dedikasi yang tak lekang oleh waktu.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-8 mt-10 border-t border-white/10 pt-8">
                                    <div>
                                        <h4 className="text-4xl font-serif text-[#d4a017] mb-2">2014</h4>
                                        <p className="text-sm text-white/40 uppercase tracking-widest">Tahun Berdiri</p>
                                    </div>
                                    <div>
                                        <h4 className="text-4xl font-serif text-[#d4a017] mb-2">50+</h4>
                                        <p className="text-sm text-white/40 uppercase tracking-widest">Anggota Aktif</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Vision & Mission with AngledSlider */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

                <Container className="relative z-10">
                    <ScrollAnimation variant="fadeUp">
                        <div className="text-center mb-20">
                            <p className="text-[#d4a017]/80 text-xs tracking-[0.35em] uppercase mb-6">
                                Visi & Misi
                            </p>
                            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">
                                Tujuan <span className="text-white/50">Besar Kami</span>
                            </h2>
                        </div>
                    </ScrollAnimation>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Angled Slider for Visual Impact */}
                        <div className="w-full relative py-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                            <AngledSlider items={visionItems} speed={30} cardWidth="280px" containerHeight="450px" />
                        </div>

                        <div className="space-y-12">
                            <GlowingCards gap="2rem" glowRadius={30} glowOpacity={0.6}>
                                <ScrollAnimation variant="fadeUp" delay={0.1}>
                                    <GlowingCard glowColor="#D4AF37" className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] mb-8">
                                        <div className="w-12 h-12 rounded-full bg-[#d4a017]/10 flex items-center justify-center mb-6">
                                            <Target className="w-6 h-6 text-[#d4a017]" />
                                        </div>
                                        <h3 className="text-2xl font-serif text-white mb-4">Visi</h3>
                                        <p className="text-white/60 leading-relaxed font-light">
                                            Menjadi wadah pembinaan Pramuka Penegak yang unggul dalam
                                            membentuk kader-kader berkarakter, berintegritas, dan
                                            berdaya saing tinggi.
                                        </p>
                                    </GlowingCard>
                                </ScrollAnimation>

                                <ScrollAnimation variant="fadeUp" delay={0.2}>
                                    <GlowingCard glowColor="#D4AF37" className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
                                        <div className="w-12 h-12 rounded-full bg-[#d4a017]/10 flex items-center justify-center mb-6">
                                            <Award className="w-6 h-6 text-[#d4a017]" />
                                        </div>
                                        <h3 className="text-2xl font-serif text-white mb-4">Misi</h3>
                                        <ul className="text-white/60 leading-relaxed space-y-4 font-light">
                                            <li className="flex items-start gap-4">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a017] mt-2.5 flex-shrink-0" />
                                                Menyelenggarakan kegiatan kepramukaan yang berkualitas dan menantang.
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a017] mt-2.5 flex-shrink-0" />
                                                Membina kemampuan kepemimpinan dan kemandirian anggota.
                                            </li>
                                        </ul>
                                    </GlowingCard>
                                </ScrollAnimation>
                            </GlowingCards>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values Section - Dasa Darma with GlowingCards */}
            <section className="py-32 relative overflow-hidden bg-[#080808]">
                <Container className="relative z-10">
                    <ScrollAnimation variant="fadeUp">
                        <div className="text-center mb-16">
                            <p className="text-[#D4AF37]/70 text-xs tracking-[0.35em] uppercase mb-6">Kode Kehormatan</p>
                            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-white tracking-wide">
                                Dasa Darma <span className="text-[#d4a017]">Pramuka</span>
                            </h2>
                        </div>
                    </ScrollAnimation>

                    <GlowingCards enableGlow={true} glowRadius={20} gap="1rem" padding="0" maxWidth="70rem">
                        {[
                            { icon: Heart, label: 'Takwa kepada Tuhan Yang Maha Esa' },
                            { icon: Compass, label: 'Cinta alam dan kasih sayang sesama manusia' },
                            { icon: Shield, label: 'Patriot yang sopan dan ksatria' },
                            { icon: Users, label: 'Patuh dan suka bermusyawarah' },
                            { icon: Heart, label: 'Rela menolong dan tabah' },
                            { icon: BookOpen, label: 'Rajin, terampil, dan gembira' },
                            { icon: Target, label: 'Hemat, cermat, dan bersahaja' },
                            { icon: Shield, label: 'Disiplin, berani, dan setia' },
                            { icon: Award, label: 'Bertanggung jawab dan dapat dipercaya' },
                            { icon: Heart, label: 'Suci dalam pikiran, perkataan, dan perbuatan' },
                        ].map((item, i) => (
                            <GlowingCard
                                key={i}
                                glowColor="#D4AF37"
                                className="!min-w-[260px] !max-w-[330px] !p-5 !rounded-xl !bg-white/[0.02] !border-white/[0.06]"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/20">
                                        <item.icon className="w-5 h-5 text-[#D4AF37]" />
                                    </span>
                                    <div>
                                        <span className="text-[#D4AF37]/40 text-xs font-mono">{String(i + 1).padStart(2, '0')}</span>
                                        <p className="text-white/80 text-sm font-light leading-snug">{item.label}</p>
                                    </div>
                                </div>
                            </GlowingCard>
                        ))}
                    </GlowingCards>
                </Container>
            </section>
        </div>
    );
}
