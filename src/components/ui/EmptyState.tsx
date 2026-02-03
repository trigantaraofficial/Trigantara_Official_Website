'use client';

import { motion } from 'framer-motion';
import { FileText, Image, Calendar, Users, Search, FolderOpen, LucideIcon } from 'lucide-react';

interface EmptyStateProps {
    type?: 'default' | 'gallery' | 'events' | 'team' | 'search' | 'error';
    title?: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    className?: string;
}

const iconMap: Record<string, LucideIcon> = {
    default: FolderOpen,
    gallery: Image,
    events: Calendar,
    team: Users,
    search: Search,
    error: FileText,
};

const defaultMessages: Record<string, { title: string; description: string }> = {
    default: {
        title: 'Tidak Ada Data',
        description: 'Belum ada data untuk ditampilkan saat ini.',
    },
    gallery: {
        title: 'Galeri Kosong',
        description: 'Belum ada foto untuk ditampilkan di galeri ini.',
    },
    events: {
        title: 'Tidak Ada Kegiatan',
        description: 'Belum ada kegiatan yang dijadwalkan.',
    },
    team: {
        title: 'Tidak Ada Anggota',
        description: 'Belum ada anggota yang terdaftar.',
    },
    search: {
        title: 'Tidak Ditemukan',
        description: 'Tidak ada hasil yang cocok dengan pencarian Anda.',
    },
    error: {
        title: 'Terjadi Kesalahan',
        description: 'Maaf, terjadi kesalahan saat memuat data.',
    },
};

export default function EmptyState({
    type = 'default',
    title,
    description,
    action,
    className = '',
}: EmptyStateProps) {
    const Icon = iconMap[type] || iconMap.default;
    const defaultMessage = defaultMessages[type] || defaultMessages.default;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}
        >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Icon className="w-10 h-10 text-white/20" />
            </div>

            <h3 className="text-xl font-medium text-white/80 mb-2">
                {title || defaultMessage.title}
            </h3>

            <p className="text-white/40 max-w-sm mb-6">
                {description || defaultMessage.description}
            </p>

            {action && (
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={action.onClick}
                    className="px-6 py-3 bg-[#d4a017] text-black font-medium rounded-full hover:bg-[#f0c040] transition-colors"
                >
                    {action.label}
                </motion.button>
            )}
        </motion.div>
    );
}
