'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check, Loader2 } from 'lucide-react';
import { ConfettiButton } from '@/components/lightswind/confetti-button';

interface NewsletterSignupProps {
    title?: string;
    description?: string;
    className?: string;
}

export default function NewsletterSignup({
    title = "Tetap Terhubung",
    description = "Dapatkan info terbaru tentang kegiatan dan berita Pramuka Trigantara langsung di inbox Anda.",
    className = ""
}: NewsletterSignupProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setStatus('error');
            setMessage('Email tidak boleh kosong');
            return;
        }

        setStatus('loading');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Success simulation
        setStatus('success');
        setMessage('Terima kasih! Anda akan menerima update dari kami.');
        setEmail('');

        // Reset after 3 seconds
        setTimeout(() => {
            setStatus('idle');
            setMessage('');
        }, 3000);
    };

    return (
        <div className={`relative ${className}`}>
            <div className="text-center mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-6"
                >
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-[#D4AF37] text-base font-medium">Newsletter</span>
                </motion.div>
                <h3 className="text-3xl md:text-5xl font-serif text-white mb-5 tracking-wide">{title}</h3>
                <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="relative flex gap-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Masukkan email Anda..."
                        disabled={status === 'loading' || status === 'success'}
                        className="flex-1 h-[60px] px-8 rounded-full bg-white/[0.03] border border-white/[0.1] text-white text-lg placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]/50 transition-colors disabled:opacity-50"
                    />
                    <ConfettiButton
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className="h-[60px] px-8 rounded-full bg-[#D4AF37] text-[#050505] font-bold text-lg flex items-center gap-3 hover:bg-[#F4C430] transition-colors disabled:opacity-50"
                        confettiOptions={{
                            particleCount: 150,
                            spread: 60,
                            colors: ['#D4AF37', '#F4C430', '#FFFFFF']
                        }}
                    >
                        {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                        {status === 'success' && <Check className="w-5 h-5" />}
                        {status === 'idle' && <Send className="w-5 h-5" />}
                        {status === 'error' && <Send className="w-5 h-5" />}
                        <span className="hidden md:inline">
                            {status === 'success' ? 'Berhasil!' : 'Daftar'}
                        </span>
                    </ConfettiButton>
                </div>

                {message && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-sm mt-3 text-center ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}
                    >
                        {message}
                    </motion.p>
                )}
            </form>
        </div>
    );
}
