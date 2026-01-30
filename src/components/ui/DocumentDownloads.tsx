'use client';

import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Calendar } from 'lucide-react';
import Container from './Container';
import ScrollAnimation, { StaggerContainer, StaggerItem } from './ScrollAnimation';

interface Document {
    id: string;
    title: string;
    description: string;
    fileType: string;
    fileSize: string;
    downloadUrl: string;
    date: string;
}

const documents: Document[] = [
    {
        id: '1',
        title: 'Formulir Pendaftaran Anggota',
        description: 'Formulir untuk mendaftar menjadi anggota Pramuka Trigantara',
        fileType: 'PDF',
        fileSize: '250 KB',
        downloadUrl: '/documents/formulir-pendaftaran.pdf',
        date: '2024-01-15'
    },
    {
        id: '2',
        title: 'Jadwal Latihan Semester Genap',
        description: 'Jadwal kegiatan latihan rutin semester genap 2024',
        fileType: 'PDF',
        fileSize: '180 KB',
        downloadUrl: '/documents/jadwal-latihan.pdf',
        date: '2024-01-01'
    },
    {
        id: '3',
        title: 'Panduan Seragam Pramuka',
        description: 'Ketentuan dan tata cara penggunaan seragam pramuka',
        fileType: 'PDF',
        fileSize: '1.2 MB',
        downloadUrl: '/documents/panduan-seragam.pdf',
        date: '2023-08-17'
    },
    {
        id: '4',
        title: 'Materi Teknik Kepramukaan',
        description: 'Modul pembelajaran teknik dasar kepramukaan',
        fileType: 'PDF',
        fileSize: '3.5 MB',
        downloadUrl: '/documents/materi-tki.pdf',
        date: '2023-09-01'
    }
];

export default function DocumentDownloads() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#050505] to-black relative">
            <Container>
                <ScrollAnimation variant="fadeUp" className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-4">
                        <FileText className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-sm font-medium">Dokumen</span>
                    </div>
                    <h2 className="text-3xl font-serif text-white mb-3">Unduh Dokumen</h2>
                    <p className="text-white/50 max-w-md mx-auto">
                        Akses formulir, jadwal, dan materi kepramukaan yang Anda butuhkan
                    </p>
                </ScrollAnimation>

                <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {documents.map((doc) => (
                        <StaggerItem key={doc.id}>
                            <motion.a
                                href={doc.downloadUrl}
                                download
                                whileHover={{ y: -4 }}
                                className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#D4AF37]/30 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                                        <FileText className="w-5 h-5 text-[#D4AF37]" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-white font-medium mb-1 group-hover:text-[#D4AF37] transition-colors truncate">
                                            {doc.title}
                                        </h3>
                                        <p className="text-white/40 text-sm mb-3 line-clamp-2">
                                            {doc.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-white/30">
                                            <span className="px-2 py-1 rounded bg-white/[0.05]">{doc.fileType}</span>
                                            <span>{doc.fileSize}</span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(doc.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </span>
                                        </div>
                                    </div>
                                    <Download className="w-5 h-5 text-white/20 group-hover:text-[#D4AF37] transition-colors" />
                                </div>
                            </motion.a>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    );
}
