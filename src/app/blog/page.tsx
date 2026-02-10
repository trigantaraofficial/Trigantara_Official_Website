'use client';

import { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight, Calendar, Tag, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useBlogTheme } from './BlogThemeContext';
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';
import {
    ARTICLES, CATEGORIES, TAGS,
    type BlogArticle,
    getFeaturedArticles, getRecentArticles, searchArticles,
} from './blogData';

const ARTICLES_PER_PAGE = 4;

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('id-ID', {
        day: 'numeric', month: 'long', year: 'numeric',
    });
}

/* ── Featured Article Banner ───────────────────────────────────── */
function FeaturedBanner({ article, isDark }: { article: BlogArticle; isDark: boolean }) {
    return (
        <Link href={`/blog/${article.slug}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${isDark ? 'bg-[#111]' : 'bg-[#F0EDE4]'
                    }`}
            >
                <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px]">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 ${isDark
                                ? 'bg-gradient-to-r from-transparent to-[#111]'
                                : 'bg-gradient-to-r from-transparent to-[#F0EDE4]'
                            } hidden md:block`} />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                                Featured
                            </span>
                            <span className={`text-xs ${isDark ? 'text-white/40' : 'text-[#1a1a1a]/40'}`}>
                                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                            </span>
                        </div>
                        <h2 className={`text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors ${isDark ? 'text-white' : 'text-[#1a1a1a]'
                            }`}>
                            {article.title}
                        </h2>
                        <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-white/50' : 'text-[#1a1a1a]/50'}`}>
                            {article.excerpt}
                        </p>
                        <div className={`flex items-center gap-4 text-xs ${isDark ? 'text-white/40' : 'text-[#1a1a1a]/40'}`}>
                            <span className="flex items-center gap-1.5">
                                <User className="w-3.5 h-3.5" /> {article.author.name}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" /> {formatDate(article.publishedAt)}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" /> {article.readTime} menit
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

/* ── Article Card ──────────────────────────────────────────────── */
function ArticleCard({ article, isDark, index }: { article: BlogArticle; isDark: boolean; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
        >
            <Link href={`/blog/${article.slug}`}>
                <div className={`group rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${isDark
                        ? 'bg-[#111] border-white/[0.06] hover:border-[#D4AF37]/20'
                        : 'bg-white border-[#1a1a1a]/[0.06] hover:border-[#AA8C2C]/20 hover:shadow-lg'
                    }`}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 ${isDark
                                ? 'bg-gradient-to-t from-[#111] via-transparent to-transparent'
                                : 'bg-gradient-to-t from-white via-transparent to-transparent'
                            }`} />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-medium backdrop-blur-sm">
                            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                        </span>
                    </div>
                    <div className="p-5">
                        <h3 className={`font-semibold text-lg mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-[#1a1a1a]'
                            }`}>
                            {article.title}
                        </h3>
                        <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-white/45' : 'text-[#1a1a1a]/45'}`}>
                            {article.excerpt}
                        </p>
                        <div className={`flex items-center justify-between text-xs ${isDark ? 'text-white/35' : 'text-[#1a1a1a]/35'}`}>
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> {formatDate(article.publishedAt)}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {article.readTime}m
                                </span>
                            </div>
                            <ArrowRight className={`w-4 h-4 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all ${isDark ? 'text-white/20' : 'text-[#1a1a1a]/20'
                                }`} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

/* ── Sidebar ───────────────────────────────────────────────────── */
function Sidebar({
    isDark,
    activeCategory,
    onCategoryChange,
}: {
    isDark: boolean;
    activeCategory: string;
    onCategoryChange: (cat: string) => void;
}) {
    const recentArticles = useMemo(() => getRecentArticles(3), []);

    const cardBg = isDark
        ? 'bg-[#111] border-white/[0.06]'
        : 'bg-white border-[#1a1a1a]/[0.06]';
    const headingClass = isDark ? 'text-white' : 'text-[#1a1a1a]';
    const textMuted = isDark ? 'text-white/45' : 'text-[#1a1a1a]/45';

    return (
        <aside className="space-y-6">
            {/* Categories */}
            <div className={`rounded-xl border p-5 ${cardBg}`}>
                <h3 className={`font-semibold text-sm mb-4 ${headingClass}`}>Kategori</h3>
                <div className="space-y-1.5">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => onCategoryChange(cat.value)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${activeCategory === cat.value
                                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-medium'
                                    : `${textMuted} ${isDark ? 'hover:bg-white/5 hover:text-white' : 'hover:bg-black/5 hover:text-[#1a1a1a]'}`
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Recent Articles */}
            <div className={`rounded-xl border p-5 ${cardBg}`}>
                <h3 className={`font-semibold text-sm mb-4 ${headingClass}`}>Artikel Terbaru</h3>
                <div className="space-y-4">
                    {recentArticles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="group flex gap-3"
                        >
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`text-sm font-medium line-clamp-2 group-hover:text-[#D4AF37] transition-colors ${headingClass}`}>
                                    {article.title}
                                </h4>
                                <p className={`text-xs mt-1 ${textMuted}`}>
                                    {formatDate(article.publishedAt)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div className={`rounded-xl border p-5 ${cardBg}`}>
                <h3 className={`font-semibold text-sm mb-4 ${headingClass}`}>Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {TAGS.map((tag) => (
                        <span
                            key={tag}
                            className={`px-2.5 py-1 rounded-full text-xs cursor-pointer transition-colors ${isDark
                                    ? 'bg-white/[0.04] text-white/50 hover:bg-[#D4AF37]/15 hover:text-[#D4AF37]'
                                    : 'bg-black/[0.04] text-[#1a1a1a]/50 hover:bg-[#D4AF37]/15 hover:text-[#AA8C2C]'
                                }`}
                        >
                            <Tag className="w-3 h-3 inline mr-1" />{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Join  */}
            <div className="rounded-xl overflow-hidden border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 to-[#AA8C2C]/5 p-6">
                <h3 className={`font-bold text-lg mb-2 ${headingClass}`}>
                    Bergabung dengan Kami
                </h3>
                <p className={`text-sm mb-5 ${textMuted}`}>
                    Jadilah bagian dari keluarga besar Pramuka Trigantara.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Nama lengkap"
                        className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[#D4AF37]/50 transition-colors ${isDark
                                ? 'bg-black/30 border-white/10 text-white placeholder:text-white/30'
                                : 'bg-white/50 border-[#1a1a1a]/10 text-[#1a1a1a] placeholder:text-[#1a1a1a]/30'
                            }`}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[#D4AF37]/50 transition-colors ${isDark
                                ? 'bg-black/30 border-white/10 text-white placeholder:text-white/30'
                                : 'bg-white/50 border-[#1a1a1a]/10 text-[#1a1a1a] placeholder:text-[#1a1a1a]/30'
                            }`}
                    />
                    <button
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-[#D4AF37] text-black font-semibold text-sm hover:bg-[#F4C430] transition-colors cursor-pointer"
                    >
                        Daftar Sekarang
                    </button>
                </form>
            </div>
        </aside>
    );
}

/* ── Main Blog Page (inner, uses useSearchParams) ──────────────── */
function BlogPageContent() {
    const { theme } = useBlogTheme();
    const searchParams = useSearchParams();
    const isDark = theme === 'dark';

    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string>(
        searchParams.get('category') || 'semua'
    );
    const [currentPage, setCurrentPage] = useState(1);

    const filteredArticles = useMemo(() => {
        let result = [...ARTICLES];

        if (activeCategory !== 'semua') {
            result = result.filter((a) => a.category === activeCategory);
        }

        if (searchQuery.trim()) {
            const searched = searchArticles(searchQuery);
            result = searched.filter((a) =>
                activeCategory === 'semua' ? true : a.category === activeCategory
            );
        }

        return result.sort(
            (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
    }, [activeCategory, searchQuery]);

    const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
    const paginatedArticles = filteredArticles.slice(
        (currentPage - 1) * ARTICLES_PER_PAGE,
        currentPage * ARTICLES_PER_PAGE
    );

    const featured = getFeaturedArticles()[0];

    const bgClass = isDark ? 'bg-[#0a0a0a]' : 'bg-[#FAFAF5]';
    const textMuted = isDark ? 'text-white/50' : 'text-[#1a1a1a]/50';

    return (
        <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
            <BlogHeader />

            <main className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-10"
                    >
                        <div className="relative max-w-2xl mx-auto">
                            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-white/30' : 'text-[#1a1a1a]/30'
                                }`} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                placeholder="Cari artikel, berita, kegiatan..."
                                className={`w-full pl-12 pr-6 py-4 rounded-xl text-base border focus:outline-none transition-colors ${isDark
                                        ? 'bg-[#111] border-white/[0.08] text-white placeholder:text-white/30 focus:border-[#D4AF37]/30'
                                        : 'bg-white border-[#1a1a1a]/[0.08] text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-[#AA8C2C]/30'
                                    }`}
                            />
                        </div>
                    </motion.div>

                    {/* Featured Article */}
                    {featured && activeCategory === 'semua' && !searchQuery && (
                        <div className="mb-12">
                            <FeaturedBanner article={featured} isDark={isDark} />
                        </div>
                    )}

                    {/* Main Grid: Articles + Sidebar */}
                    <div className="grid lg:grid-cols-[1fr_320px] gap-10">
                        {/* Articles */}
                        <div>
                            {/* Category pills */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.value}
                                        onClick={() => {
                                            setActiveCategory(cat.value);
                                            setCurrentPage(1);
                                        }}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${activeCategory === cat.value
                                                ? 'bg-[#D4AF37] text-black'
                                                : isDark
                                                    ? 'bg-white/[0.04] text-white/50 hover:text-white hover:bg-white/[0.08]'
                                                    : 'bg-black/[0.04] text-[#1a1a1a]/50 hover:text-[#1a1a1a] hover:bg-black/[0.08]'
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>

                            {/* Article Grid */}
                            {paginatedArticles.length > 0 ? (
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {paginatedArticles.map((article, i) => (
                                        <ArticleCard
                                            key={article.slug}
                                            article={article}
                                            isDark={isDark}
                                            index={i}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <Search className={`w-12 h-12 mx-auto mb-4 ${isDark ? 'text-white/15' : 'text-[#1a1a1a]/15'
                                        }`} />
                                    <p className={`text-lg ${textMuted}`}>
                                        {searchQuery
                                            ? `Tidak ada hasil untuk "${searchQuery}"`
                                            : 'Belum ada artikel di kategori ini'}
                                    </p>
                                </div>
                            )}

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-10">
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className={`p-2.5 rounded-lg transition-colors disabled:opacity-30 cursor-pointer ${isDark
                                                ? 'hover:bg-white/5 text-white/60'
                                                : 'hover:bg-black/5 text-[#1a1a1a]/60'
                                            }`}
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                        (page) => (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all cursor-pointer ${currentPage === page
                                                        ? 'bg-[#D4AF37] text-black'
                                                        : isDark
                                                            ? 'text-white/50 hover:bg-white/5 hover:text-white'
                                                            : 'text-[#1a1a1a]/50 hover:bg-black/5 hover:text-[#1a1a1a]'
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        )
                                    )}

                                    <button
                                        onClick={() =>
                                            setCurrentPage((p) => Math.min(totalPages, p + 1))
                                        }
                                        disabled={currentPage === totalPages}
                                        className={`p-2.5 rounded-lg transition-colors disabled:opacity-30 cursor-pointer ${isDark
                                                ? 'hover:bg-white/5 text-white/60'
                                                : 'hover:bg-black/5 text-[#1a1a1a]/60'
                                            }`}
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <Sidebar
                            isDark={isDark}
                            activeCategory={activeCategory}
                            onCategoryChange={(cat) => {
                                setActiveCategory(cat);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>
            </main>

            <BlogFooter />
        </div>
    );
}

/* ── Export with Suspense wrapper ────────────────────────────────── */
export default function BlogPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
            <BlogPageContent />
        </Suspense>
    );
}
