'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { GlowingCards, GlowingCard } from '@/components/lightswind/glowing-cards';
import { ArrowRight, X, Users, BookOpen, Award } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface BergabungModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BergabungModal({ isOpen, onClose }: BergabungModalProps) {
    const router = useRouter();

    const handleConfirm = () => {
        onClose();
        router.push('/blog');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 30 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center p-4"
                    >
                        <div className="relative max-w-lg w-full bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl">
                            {/* Gold accent line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all z-10 cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8 pt-10">
                                {/* Logo */}
                                <div className="flex justify-center mb-6">
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                        className="relative w-20 h-20"
                                    >
                                        <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-xl" />
                                        <Image
                                            src="/assets/logo/trigantara.png"
                                            alt="Trigantara"
                                            fill
                                            className="object-contain relative z-10"
                                        />
                                    </motion.div>
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
                                    Siap Bergabung?
                                </h2>
                                <p className="text-white/50 text-center mb-8 text-sm">
                                    Masuk ke halaman utama Pramuka Trigantara untuk melihat berita, kegiatan, dan informasi terbaru.
                                </p>

                                {/* Feature Cards with Glowing Effect */}
                                <GlowingCards
                                    enableGlow={true}
                                    glowRadius={15}
                                    gap="0.75rem"
                                    padding="0"
                                    customTheme={{
                                        cardBg: 'rgba(255,255,255,0.02)',
                                        cardBorder: 'rgba(255,255,255,0.06)',
                                    }}
                                >
                                    <GlowingCard glowColor="#D4AF37" className="!min-w-0 !p-4 !rounded-xl !bg-white/[0.02] !border-white/[0.06]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                                <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white text-sm font-semibold">Berita & Artikel</h4>
                                                <p className="text-white/40 text-xs">Update kegiatan terbaru</p>
                                            </div>
                                        </div>
                                    </GlowingCard>

                                    <GlowingCard glowColor="#D4AF37" className="!min-w-0 !p-4 !rounded-xl !bg-white/[0.02] !border-white/[0.06]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                                <Users className="w-5 h-5 text-[#D4AF37]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white text-sm font-semibold">Komunitas</h4>
                                                <p className="text-white/40 text-xs">Bergabung dengan anggota</p>
                                            </div>
                                        </div>
                                    </GlowingCard>

                                    <GlowingCard glowColor="#D4AF37" className="!min-w-0 !p-4 !rounded-xl !bg-white/[0.02] !border-white/[0.06]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                                <Award className="w-5 h-5 text-[#D4AF37]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white text-sm font-semibold">Pengumuman</h4>
                                                <p className="text-white/40 text-xs">Info penting & agenda</p>
                                            </div>
                                        </div>
                                    </GlowingCard>
                                </GlowingCards>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-8">
                                    <button
                                        onClick={onClose}
                                        className="flex-1 py-3.5 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all text-sm font-medium cursor-pointer"
                                    >
                                        Kembali
                                    </button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleConfirm}
                                        className="flex-1 py-3.5 rounded-xl bg-[#D4AF37] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#F4C430] transition-colors cursor-pointer"
                                    >
                                        Masuk Sekarang
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
