'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Mail, Phone } from 'lucide-react';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio?: string;
    instagram?: string;
    email?: string;
    phone?: string;
}

interface TeamModalProps {
    member: TeamMember | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && member && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 max-w-lg w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            aria-label="Tutup"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Member Image */}
                        <div className="relative h-64 w-full">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover rounded-t-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>

                        {/* Member Info */}
                        <div className="p-6 -mt-16 relative">
                            <h3 className="text-2xl font-serif font-medium text-white mb-1">
                                {member.name}
                            </h3>
                            <p className="text-[#d4a017] font-medium mb-4">
                                {member.role}
                            </p>

                            {member.bio && (
                                <p className="text-white/70 leading-relaxed mb-6">
                                    {member.bio}
                                </p>
                            )}

                            {/* Social Links */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                {member.instagram && (
                                    <a
                                        href={`https://instagram.com/${member.instagram}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-white/5 text-white/60 hover:text-[#d4a017] hover:bg-white/10 transition-all"
                                        aria-label={`Instagram ${member.name}`}
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                )}
                                {member.email && (
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="p-3 rounded-full bg-white/5 text-white/60 hover:text-[#d4a017] hover:bg-white/10 transition-all"
                                        aria-label={`Email ${member.name}`}
                                    >
                                        <Mail className="w-5 h-5" />
                                    </a>
                                )}
                                {member.phone && (
                                    <a
                                        href={`tel:${member.phone}`}
                                        className="p-3 rounded-full bg-white/5 text-white/60 hover:text-[#d4a017] hover:bg-white/10 transition-all"
                                        aria-label={`Telepon ${member.name}`}
                                    >
                                        <Phone className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
