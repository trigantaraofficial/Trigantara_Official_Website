'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
            return;
        }

        setStatus('loading');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
            setStatus('idle');
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-white/50 mb-3">
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Masukkan nama lengkap"
                        disabled={status === 'loading' || status === 'success'}
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-3.5 px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-[#d4a017]/40 focus:bg-white/[0.05] transition-all duration-300 disabled:opacity-50"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white/50 mb-3">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@email.com"
                        disabled={status === 'loading' || status === 'success'}
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-3.5 px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-[#d4a017]/40 focus:bg-white/[0.05] transition-all duration-300 disabled:opacity-50"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-white/50 mb-3">
                    Subjek
                </label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Tentang apa pesan Anda?"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-3.5 px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-[#d4a017]/40 focus:bg-white/[0.05] transition-all duration-300 disabled:opacity-50"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-white/50 mb-3">
                    Pesan
                </label>
                <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-3.5 px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-[#d4a017]/40 focus:bg-white/[0.05] transition-all duration-300 resize-none disabled:opacity-50"
                />
            </div>

            <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full inline-flex items-center justify-center gap-2 font-medium py-4 rounded-xl transition-all duration-300 ${status === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-[#d4a017] text-black hover:bg-[#f0c040]'
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Mengirim...
                    </>
                ) : status === 'success' ? (
                    <>
                        <CheckCircle className="w-5 h-5" />
                        Pesan Terkirim!
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        Kirim Pesan
                    </>
                )}
            </motion.button>

            <AnimatePresence>
                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-2 text-red-400 text-sm justify-center"
                    >
                        <AlertCircle className="w-4 h-4" />
                        <span>Mohon lengkapi semua field yang wajib diisi.</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
}
