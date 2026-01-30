'use client';

import Container from "@/components/ui/Container";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { MapPin, Phone, Mail, Clock, Send, Instagram, MessageCircle, ExternalLink, ChevronDown } from 'lucide-react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ContactForm from "@/components/ui/ContactForm";

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                                <Mail className="w-4 h-4 text-[#d4a017]" />
                                <span className="text-[#d4a017] text-sm">Hubungi Kami</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
                                Mari <span className="bg-gradient-to-r from-[#d4a017] to-[#f0c040] bg-clip-text text-transparent">Terhubung</span>
                            </h1>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Punya pertanyaan atau ingin bergabung dengan Pramuka Trigantara?
                                Jangan ragu untuk menghubungi kami.
                            </p>
                        </div>
                    </ScrollAnimation>
                </Container>
            </section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent" />

            {/* Contact Section */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0c0c0c] to-[#0a0a0a]" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <ScrollAnimation variant="fadeUp">
                            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                                <h2 className="text-2xl font-light text-white mb-8">
                                    Kirim Pesan
                                </h2>
                                <ContactForm />
                            </div>
                        </ScrollAnimation>


                        {/* Contact Info */}
                        <ScrollAnimation variant="fadeUp" delay={0.15}>
                            <div className="space-y-6">
                                {/* Logo & Description */}
                                <div className="flex items-center gap-4 mb-8">
                                    <motion.div
                                        className="relative w-16 h-16"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Image
                                            src="/assets/logo/trigantara.png"
                                            alt="Trigantara Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-light text-white">Pramuka Trigantara</h3>
                                        <p className="text-white/50">SMK Marhas Margahayu</p>
                                    </div>
                                </div>

                                {/* Contact Cards */}
                                {[
                                    {
                                        icon: MapPin,
                                        title: 'Alamat',
                                        content: 'SMK Marhas Margahayu, Bandung, Jawa Barat',
                                        isLink: false,
                                    },
                                    {
                                        icon: Phone,
                                        title: 'Telepon / WhatsApp',
                                        content: '+62 851-7688-1328',
                                        href: 'tel:+6285176881328',
                                        isLink: true,
                                    },
                                    {
                                        icon: Mail,
                                        title: 'Email',
                                        content: 'trigantaraofficial@gmail.com',
                                        href: 'mailto:trigantaraofficial@gmail.com',
                                        isLink: true,
                                    },
                                    {
                                        icon: Clock,
                                        title: 'Jam Operasional',
                                        content: 'Senin - Jumat: 07.00 - 15.00 WIB',
                                        isLink: false,
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-4"
                                        whileHover={{ y: -4, borderColor: 'rgba(212, 160, 23, 0.15)' }}
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-[#d4a017]/10 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-[#d4a017]" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white mb-1">{item.title}</h4>
                                            {item.isLink ? (
                                                <a
                                                    href={item.href}
                                                    className="text-white/50 hover:text-[#d4a017] transition-colors"
                                                >
                                                    {item.content}
                                                </a>
                                            ) : (
                                                <p className="text-white/50">{item.content}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Social Links */}
                                <div className="pt-6 border-t border-white/[0.05]">
                                    <h4 className="font-medium text-white mb-4">Ikuti Kami</h4>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <motion.a
                                            href="https://www.instagram.com/trigantara_official14"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-pink-500/20 text-white/70 hover:text-white transition-all duration-300"
                                        >
                                            <Instagram className="w-5 h-5" />
                                            <span className="text-sm font-medium">Instagram</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </motion.a>

                                        <motion.a
                                            href="https://www.tiktok.com/@pramuka.smkmarhas"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/70 hover:text-white hover:border-white/20 transition-all duration-300"
                                        >
                                            <TikTokIcon className="w-5 h-5" />
                                            <span className="text-sm font-medium">TikTok</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </motion.a>

                                        <motion.a
                                            href="https://wa.me/6285176881328"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-white/70 hover:text-white transition-all duration-300"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            <span className="text-sm font-medium">WhatsApp</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </Container>
            </section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent" />

            {/* Map Section */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#0c0c0c]" />

                <Container className="relative z-10">
                    <ScrollAnimation variant="fadeUp">
                        <div className="rounded-2xl overflow-hidden border border-white/[0.05]">
                            <div className="aspect-[21/9] bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] flex items-center justify-center relative">
                                {/* Decorative grid */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{
                                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                    backgroundSize: '40px 40px',
                                }} />

                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a017]/5 via-transparent to-transparent" />

                                <div className="text-center relative z-10">
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <MapPin className="w-12 h-12 text-[#d4a017]/40 mx-auto mb-4" />
                                    </motion.div>
                                    <h3 className="text-white/60 font-medium text-lg mb-2">Peta Lokasi</h3>
                                    <p className="text-white/30 text-sm">SMK Marhas Margahayu, Bandung</p>
                                    <motion.a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20 transition-all text-sm"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span>Buka di Google Maps</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </Container>
            </section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent" />

            {/* FAQ Section */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#0a0a0a] to-black" />

                <Container className="relative z-10">
                    <ScrollAnimation variant="fadeUp">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4a017]/10 border border-[#d4a017]/20 mb-6">
                                <span className="text-[#d4a017] text-sm">FAQ</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                                Pertanyaan <span className="text-white/50">Umum</span>
                            </h2>
                        </div>
                    </ScrollAnimation>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                question: 'Bagaimana cara bergabung dengan Pramuka Trigantara?',
                                answer: 'Kamu bisa bergabung dengan mendaftar melalui kegiatan penerimaan anggota baru yang biasanya diadakan di awal tahun ajaran, atau hubungi kami langsung melalui kontak yang tersedia.',
                            },
                            {
                                question: 'Kapan latihan rutin diadakan?',
                                answer: 'Latihan rutin diadakan setiap minggu di lingkungan SMK Marhas Margahayu. Jadwal spesifik dapat ditanyakan kepada pengurus.',
                            },
                            {
                                question: 'Apa saja kegiatan yang dilakukan?',
                                answer: 'Kegiatan meliputi latihan rutin, perkemahan, lomba kepramukaan, bakti sosial, hiking, dan berbagai kegiatan pengembangan diri lainnya.',
                            },
                            {
                                question: 'Siapa saja yang bisa bergabung?',
                                answer: 'Semua siswa-siswi SMK Marhas Margahayu yang berminat dalam kegiatan kepramukaan dan ingin mengembangkan diri dapat bergabung.',
                            },
                        ].map((faq, index) => (
                            <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                                <motion.div
                                    className="rounded-xl bg-white/[0.02] border border-white/[0.05] overflow-hidden"
                                    whileHover={{ borderColor: 'rgba(212, 160, 23, 0.15)' }}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full p-6 flex items-center justify-between text-left"
                                    >
                                        <h3 className="font-medium text-white pr-4">
                                            {faq.question}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: openFaq === index ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown className="w-5 h-5 text-white/40" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="px-6 pb-6">
                                                    <p className="text-white/50 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </Container>
            </section>
        </div >
    );
}
