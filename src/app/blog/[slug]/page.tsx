'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag, ChevronRight } from 'lucide-react';
import { useBlogTheme } from '../BlogThemeContext';
import BlogHeader from '../BlogHeader';
import BlogFooter from '../BlogFooter';
import { getArticleBySlug, ARTICLES, type BlogArticle } from '../blogData';
import { useState } from 'react';

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

/* ── Simple markdown-like content renderer ─────────────────────── */
function ContentRenderer({ content, isDark }: { content: string; isDark: boolean }) {
    const textClass = isDark ? 'text-white/70' : 'text-[#1a1a1a]/70';
    const headingClass = isDark ? 'text-white' : 'text-[#1a1a1a]';
    const quoteClass = isDark
        ? 'border-[#D4AF37]/40 bg-[#D4AF37]/5 text-white/60'
        : 'border-[#AA8C2C]/40 bg-[#AA8C2C]/5 text-[#1a1a1a]/60';

    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];

        // Empty line
        if (line.trim() === '') {
            i++;
            continue;
        }

        // Heading ##
        if (line.startsWith('## ')) {
            elements.push(
                <h2 key={`h-${i}`} className={`text-2xl font-bold mt-10 mb-4 ${headingClass}`}>
                    {line.slice(3)}
                </h2>
            );
            i++;
            continue;
        }

        // Blockquote
        if (line.startsWith('> ')) {
            elements.push(
                <blockquote key={`q-${i}`} className={`border-l-4 pl-4 py-3 my-6 italic rounded-r-lg ${quoteClass}`}>
                    {line.slice(2)}
                </blockquote>
            );
            i++;
            continue;
        }

        // Table
        if (line.startsWith('|') && line.endsWith('|')) {
            const rows: string[][] = [];
            while (i < lines.length && lines[i].startsWith('|') && lines[i].endsWith('|')) {
                const row = lines[i];
                if (!row.includes('---')) {
                    rows.push(row.split('|').filter(Boolean).map((c) => c.trim()));
                }
                i++;
            }
            if (rows.length > 0) {
                const headers = rows[0];
                const dataRows = rows.slice(1);
                elements.push(
                    <div key={`t-${i}`} className="overflow-x-auto mb-6 rounded-lg">
                        <table className={`w-full text-sm ${textClass}`}>
                            <thead>
                                <tr className={`border-b ${isDark ? 'border-white/10' : 'border-[#1a1a1a]/10'}`}>
                                    {headers.map((h, j) => (
                                        <th key={j} className={`py-3 px-4 text-left font-semibold ${headingClass}`}>
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {dataRows.map((row, ri) => (
                                    <tr key={ri} className={`border-b ${isDark ? 'border-white/5' : 'border-[#1a1a1a]/5'}`}>
                                        {row.map((cell, ci) => (
                                            <td key={ci} className="py-3 px-4">{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            }
            continue;
        }

        // Unordered list
        if (line.startsWith('- ')) {
            const items: string[] = [];
            while (i < lines.length && lines[i].startsWith('- ')) {
                items.push(lines[i].slice(2));
                i++;
            }
            elements.push(
                <ul key={`ul-${i}`} className={`list-disc pl-6 space-y-2 mb-6 ${textClass}`}>
                    {items.map((item, j) => {
                        const boldMatch = item.match(/\*\*(.*?)\*\*/);
                        return (
                            <li key={j} className="leading-relaxed">
                                {boldMatch ? (
                                    <span>
                                        <strong className={headingClass}>{boldMatch[1]}</strong>
                                        {item.replace(/\*\*.*?\*\*/, '')}
                                    </span>
                                ) : (
                                    item
                                )}
                            </li>
                        );
                    })}
                </ul>
            );
            continue;
        }

        // Ordered list
        if (/^\d+\.\s/.test(line)) {
            const items: string[] = [];
            while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
                items.push(lines[i].replace(/^\d+\.\s/, ''));
                i++;
            }
            elements.push(
                <ol key={`ol-${i}`} className={`list-decimal pl-6 space-y-2 mb-6 ${textClass}`}>
                    {items.map((item, j) => (
                        <li key={j} className="leading-relaxed">{item}</li>
                    ))}
                </ol>
            );
            continue;
        }

        // Paragraph
        elements.push(
            <p key={`p-${i}`} className={`text-base leading-relaxed mb-4 ${textClass}`}>
                {line}
            </p>
        );
        i++;
    }

    return <>{elements}</>;
}

/* ── Related Articles ──────────────────────────────────────────── */
function RelatedArticles({ current, isDark }: { current: BlogArticle; isDark: boolean }) {
    const related = ARTICLES.filter(
        (a) =>
            a.slug !== current.slug &&
            (a.category === current.category || a.tags.some((t) => current.tags.includes(t)))
    ).slice(0, 3);

    if (related.length === 0) return null;

    return (
        <section className="mt-16">
            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
                Artikel Terkait
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
                {related.map((article) => (
                    <Link key={article.slug} href={`/blog/${article.slug}`}>
                        <div className={`group rounded-xl overflow-hidden border transition-all hover:-translate-y-1 ${isDark
                                ? 'bg-[#111] border-white/[0.06] hover:border-[#D4AF37]/20'
                                : 'bg-white border-[#1a1a1a]/[0.06] hover:border-[#AA8C2C]/20'
                            }`}>
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4">
                                <span className={`text-xs ${isDark ? 'text-[#D4AF37]' : 'text-[#AA8C2C]'}`}>
                                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                                </span>
                                <h3 className={`font-semibold mt-1 line-clamp-2 group-hover:text-[#D4AF37] transition-colors ${isDark ? 'text-white' : 'text-[#1a1a1a]'
                                    }`}>
                                    {article.title}
                                </h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

/* ── Article Detail Page ───────────────────────────────────────── */
export default function ArticlePage() {
    const params = useParams();
    const { theme } = useBlogTheme();
    const isDark = theme === 'dark';
    const [copied, setCopied] = useState(false);

    const slug = params.slug as string;
    const article = getArticleBySlug(slug);

    const bgClass = isDark ? 'bg-[#0a0a0a]' : 'bg-[#FAFAF5]';
    const textClass = isDark ? 'text-white' : 'text-[#1a1a1a]';
    const textMuted = isDark ? 'text-white/45' : 'text-[#1a1a1a]/45';
    const cardBg = isDark ? 'bg-[#111] border-white/[0.06]' : 'bg-white border-[#1a1a1a]/[0.06]';

    // 404 state
    if (!article) {
        return (
            <div className={`min-h-screen ${bgClass}`}>
                <BlogHeader />
                <div className="flex items-center justify-center min-h-screen pt-16">
                    <div className="text-center">
                        <h1 className={`text-6xl font-bold mb-4 ${textClass}`}>404</h1>
                        <p className={`mb-6 ${textMuted}`}>Artikel tidak ditemukan</p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D4AF37] text-black font-semibold hover:bg-[#F4C430] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Kembali ke Blog
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard not available
        }
    };

    const handleShareWhatsApp = () => {
        const url = window.location.href;
        window.open(
            `https://wa.me/?text=${encodeURIComponent(article.title + ' — ' + url)}`,
            '_blank'
        );
    };

    return (
        <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
            <BlogHeader />

            <main className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`flex items-center gap-2 text-sm mb-8 ${textMuted}`}
                    >
                        <Link
                            href="/blog"
                            className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
                        >
                            <ArrowLeft className="w-4 h-4" /> Blog
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="text-[#D4AF37]">
                            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                        </span>
                    </motion.nav>

                    {/* Article Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
                            {article.category}
                        </span>
                        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${textClass}`}>
                            {article.title}
                        </h1>

                        {/* Meta */}
                        <div className={`flex flex-wrap items-center gap-5 mb-8 ${textMuted}`}>
                            <div className="flex items-center gap-2">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                    <Image
                                        src={article.author.avatar}
                                        alt={article.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <span className={`text-sm font-medium ${textClass}`}>
                                        {article.author.name}
                                    </span>
                                    <span className="text-xs block">{article.author.role}</span>
                                </div>
                            </div>
                            <span className="flex items-center gap-1.5 text-sm">
                                <Calendar className="w-4 h-4" /> {formatDate(article.publishedAt)}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm">
                                <Clock className="w-4 h-4" /> {article.readTime} menit baca
                            </span>
                        </div>

                        {/* Hero Image */}
                        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-10">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Article Content */}
                    <motion.article
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <ContentRenderer content={article.content} isDark={isDark} />
                    </motion.article>

                    {/* Tags */}
                    <div className={`flex flex-wrap items-center gap-2 mt-10 pt-8 border-t ${isDark ? 'border-white/[0.06]' : 'border-[#1a1a1a]/[0.06]'
                        }`}>
                        <Tag className={`w-4 h-4 ${textMuted}`} />
                        {article.tags.map((tag) => (
                            <span
                                key={tag}
                                className={`px-3 py-1 rounded-full text-xs ${isDark
                                        ? 'bg-white/[0.04] text-white/50'
                                        : 'bg-black/[0.04] text-[#1a1a1a]/50'
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Share Buttons */}
                    <div className={`flex items-center gap-3 mt-6 pt-6 border-t ${isDark ? 'border-white/[0.06]' : 'border-[#1a1a1a]/[0.06]'
                        }`}>
                        <span className={`text-sm ${textMuted}`}>Bagikan:</span>
                        <button
                            onClick={handleShareWhatsApp}
                            className={`px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${isDark
                                    ? 'bg-white/5 text-white/60 hover:bg-white/10'
                                    : 'bg-black/5 text-[#1a1a1a]/60 hover:bg-black/10'
                                }`}
                        >
                            WhatsApp
                        </button>
                        <button
                            onClick={handleCopyLink}
                            className={`px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 cursor-pointer ${isDark
                                    ? 'bg-white/5 text-white/60 hover:bg-white/10'
                                    : 'bg-black/5 text-[#1a1a1a]/60 hover:bg-black/10'
                                }`}
                        >
                            <Share2 className="w-4 h-4" />
                            {copied ? 'Tersalin!' : 'Salin Link'}
                        </button>
                    </div>

                    {/* Author Card */}
                    <div className={`mt-10 rounded-xl border p-6 flex gap-5 items-start ${cardBg}`}>
                        <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={article.author.avatar}
                                alt={article.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className={`font-semibold ${textClass}`}>{article.author.name}</h3>
                            <p className={`text-sm ${textMuted}`}>
                                {article.author.role} — Pramuka Trigantara
                            </p>
                            <p className={`text-sm mt-2 ${isDark ? 'text-white/50' : 'text-[#1a1a1a]/50'}`}>
                                Anggota aktif Pramuka Trigantara di SMK Marhas Margahayu, Bandung.
                                Berkontribusi dalam kegiatan kepramukaan dan pengembangan generasi muda.
                            </p>
                        </div>
                    </div>

                    {/* Related Articles */}
                    <RelatedArticles current={article} isDark={isDark} />

                    {/* Back to blog CTA */}
                    <div className="mt-16 text-center">
                        <Link
                            href="/blog"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-colors ${isDark
                                    ? 'border-white/10 text-white/60 hover:border-[#D4AF37]/30 hover:text-[#D4AF37]'
                                    : 'border-[#1a1a1a]/10 text-[#1a1a1a]/60 hover:border-[#AA8C2C]/30 hover:text-[#AA8C2C]'
                                }`}
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Kembali ke semua artikel
                        </Link>
                    </div>
                </div>
            </main>

            <BlogFooter />
        </div>
    );
}
