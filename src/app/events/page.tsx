'use client';

import Container from "@/components/ui/Container";
import ScrollAnimation, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";
import { Calendar, MapPin, Clock, ArrowRight, Flag } from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";

const upcomingEvents = [
    {
        id: 1,
        title: "Perkemahan Sabtu Minggu (PERSAMI)",
        date: "10-11 Feb 2024",
        time: "07:00 - Selesai",
        location: "Bumi Perkemahan Ranca Upas",
        category: "Wajib",
        image: "/assets/image/background.webp",
        description: "Kegiatan rutin untuk anggota baru dalam rangka pengenalan alam dan dasar kepemimpinan."
    },
    {
        id: 2,
        title: "Latihan Gabungan Kwaran Margahayu",
        date: "24 Feb 2024",
        time: "08:00 - 15:00",
        location: "SMK Marhas Margahayu",
        category: "Latgab",
        image: "/assets/image/background.webp",
        description: "Latihan bersama seluruh ambalan se-Kwartir Ranting Margahayu untuk mempererat persaudaraan."
    }
];

const pastEvents = [
    {
        id: 3,
        title: "Pelantikan Bantara 2023",
        date: "15 Des 2023",
        location: "Ciwidey",
        image: "/assets/image/background.webp"
    },
    {
        id: 4,
        title: "HUT Pramuka Ke-62",
        date: "14 Agu 2023",
        location: "Lapangan Upacara",
        image: "/assets/image/background.webp"
    },
    {
        id: 5,
        title: "Bakti Sosial Ramadhan",
        date: "10 Apr 2023",
        location: "Margahayu",
        image: "/assets/image/background.webp"
    }
];

export default function EventsPage() {
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
                                <Calendar className="w-4 h-4 text-[#d4a017]" />
                                <span className="text-[#d4a017] text-sm">Agenda Kegiatan</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
                                Jadwal <span className="bg-gradient-to-r from-[#d4a017] to-[#f0c040] bg-clip-text text-transparent">Pramuka</span>
                            </h1>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Jangan lewatkan momen seru dan mendidik bersama Trigantara.
                                Pantau terus agenda kegiatan kami di sini.
                            </p>
                        </div>
                    </ScrollAnimation>
                </Container>
            </section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent" />

            {/* Upcoming Events */}
            <section className="py-20 bg-[#0a0a0a]">
                <Container>
                    <ScrollAnimation variant="fadeUp" className="mb-12 flex items-end justify-between">
                        <div>
                            <h2 className="text-3xl font-light text-white mb-2">Akan Datang</h2>
                            <p className="text-white/40">Agenda terdekat yang wajib kamu ikuti</p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid gap-8">
                        {upcomingEvents.map((event, index) => (
                            <ScrollAnimation key={event.id} variant="fadeUp" delay={index * 0.1}>
                                <div className="group relative rounded-3xl bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:border-[#d4a017]/30 transition-all duration-500">
                                    <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8 items-center">
                                        {/* Date Badge (Mobile: Top, Desktop: Left) */}
                                        <div className="md:col-span-2 flex md:flex-col items-center gap-2 md:gap-1 text-center border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6">
                                            <span className="text-3xl md:text-4xl font-bold text-[#d4a017]">
                                                {event.date.split(' ')[0]}
                                            </span>
                                            <span className="text-sm uppercase tracking-wider text-white/60">
                                                {event.date.split(' ')[1]}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="md:col-span-7 space-y-4">
                                            <div className="flex flex-wrap items-center gap-3 text-sm text-white/40">
                                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                                                    {event.category}
                                                </span>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4" />
                                                    {event.time}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="w-4 h-4" />
                                                    {event.location}
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-light text-white group-hover:text-[#d4a017] transition-colors">
                                                {event.title}
                                            </h3>

                                            <p className="text-white/50 leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>

                                        {/* Action */}
                                        <div className="md:col-span-3 flex justify-end">
                                            <button className="px-6 py-3 rounded-full bg-white/[0.05] hover:bg-[#d4a017] text-white hover:text-black transition-all duration-300 flex items-center gap-2 font-medium">
                                                Detail Kegiatan
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#d4a017]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Past Events Gallery */}
            <section className="py-20 bg-[#0a0a0a] border-t border-white/[0.05]">
                <Container>
                    <ScrollAnimation variant="fadeUp" className="mb-12">
                        <h2 className="text-3xl font-light text-white mb-2">Riwayat Kegiatan</h2>
                        <p className="text-white/40">Dokumentasi kegiatan yang telah terlaksana</p>
                    </ScrollAnimation>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pastEvents.map((event) => (
                            <StaggerItem key={event.id}>
                                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />

                                    <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="text-[#d4a017] text-sm font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex items-center gap-2">
                                            <Flag className="w-3 h-3" />
                                            Selesai
                                        </div>
                                        <h3 className="text-lg font-medium text-white mb-2">{event.title}</h3>
                                        <div className="flex items-center gap-4 text-xs text-white/50">
                                            <span>{event.date}</span>
                                            <span>•</span>
                                            <span>{event.location}</span>
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
