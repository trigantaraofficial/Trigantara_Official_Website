'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertOctagon, RefreshCw, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log error to an error reporting service
        console.error('Application Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full text-center"
            >
                {/* Error Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="mb-8"
                >
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center border border-red-500/20">
                        <AlertOctagon className="w-12 h-12 text-red-500" />
                    </div>
                </motion.div>

                {/* Error Message */}
                <h1 className="text-3xl font-serif font-medium text-white mb-4">
                    Terjadi Kesalahan
                </h1>
                <p className="text-white/60 mb-8 leading-relaxed">
                    Maaf, telah terjadi kesalahan pada aplikasi.
                    Tim kami telah diberitahu dan sedang menangani masalah ini.
                </p>

                {/* Error Details (Development Only) */}
                {process.env.NODE_ENV === 'development' && (
                    <div className="mb-8 text-left bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-red-400 text-sm font-mono break-all">
                            {error.message}
                        </p>
                        {error.digest && (
                            <p className="text-white/40 text-xs mt-2">
                                Error ID: {error.digest}
                            </p>
                        )}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={reset}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4a017] text-black font-medium rounded-full hover:bg-[#f0c040] transition-colors shadow-lg shadow-[#d4a017]/20"
                    >
                        <RefreshCw className="w-5 h-5" />
                        Coba Lagi
                    </motion.button>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        Ke Beranda
                    </Link>
                </div>

                {/* Footer */}
                <p className="mt-12 text-white/30 text-sm">
                    Jika masalah berlanjut, silakan hubungi kami di{' '}
                    <a
                        href="mailto:trigantaraofficial@gmail.com"
                        className="text-[#d4a017] hover:underline"
                    >
                        trigantaraofficial@gmail.com
                    </a>
                </p>
            </motion.div>
        </div>
    );
}
