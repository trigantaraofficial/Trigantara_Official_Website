"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

interface ScheduleItem {
    day: string;
    time: string;
    activity: string;
    location: string;
    participants: string;
}

const schedule: ScheduleItem[] = [
    {
        day: 'Senin',
        time: '15:00 - 17:00',
        activity: 'Latihan Rutin',
        location: 'Lapangan SMK Marhas',
        participants: 'Seluruh Anggota'
    },
    {
        day: 'Rabu',
        time: '15:00 - 17:00',
        activity: 'Latihan Teknik Kepramukaan',
        location: 'Lapangan SMK Marhas',
        participants: 'Penegak & Bantara'
    },
    {
        day: 'Sabtu',
        time: '07:00 - 11:00',
        activity: 'Upacara & Materi',
        location: 'Aula Sekolah',
        participants: 'Seluruh Anggota'
    }
];

export default function JadwalLatihan() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#050505]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#050505] to-[#050505]" />

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase mb-4"
                    >
                        Jadwal Kegiatan
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif text-white mb-6"
                    >
                        Kegiatan Rutin <span className="text-gold-gradient">Mingguan</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {schedule.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            {/* Card Background */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm group-hover:border-[#D4AF37]/30 transition-colors duration-300">
                                {/* Day Badge */}
                                <div className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-6">
                                    <span className="text-[#D4AF37] text-sm font-semibold tracking-wide">{item.day}</span>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-medium text-white mb-2">{item.activity}</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white/50 text-sm">
                                        <ClockIcon className="w-4 h-4 text-[#D4AF37]" />
                                        <span>{item.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/50 text-sm">
                                        <MapPinIcon className="w-4 h-4 text-[#D4AF37]" />
                                        <span>{item.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/50 text-sm">
                                        <UsersIcon className="w-4 h-4 text-[#D4AF37]" />
                                        <span>{item.participants}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}

function MapPinIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}

function UsersIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
