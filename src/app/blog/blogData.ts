// Blog data types and placeholder data for the Trigantara blog.
// This file serves as the single source of truth for blog data structure.
// Replace placeholder data with API calls when integrating with Cloudflare backend.

export interface BlogArticle {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: BlogCategory;
    author: BlogAuthor;
    image: string;
    publishedAt: string;
    readTime: number;
    tags: string[];
    featured?: boolean;
}

export interface BlogAuthor {
    name: string;
    role: string;
    avatar: string;
}

export type BlogCategory = 'berita' | 'kegiatan' | 'artikel' | 'pengumuman';

export const CATEGORIES: { value: BlogCategory | 'semua'; label: string }[] = [
    { value: 'semua', label: 'Semua' },
    { value: 'berita', label: 'Berita' },
    { value: 'kegiatan', label: 'Kegiatan' },
    { value: 'artikel', label: 'Artikel' },
    { value: 'pengumuman', label: 'Pengumuman' },
];

export const TAGS = [
    'Perkemahan', 'Lomba', 'Latihan', 'Bakti Sosial', 'Pelantikan',
    'Penegak', 'Penggalang', 'Dewan Ambalan', 'Kwarcab', 'HUT Pramuka',
];

const authors: Record<string, BlogAuthor> = {
    arief: { name: 'Arief Fajar', role: 'Pradana Putra', avatar: '/assets/image/background.webp' },
    intan: { name: 'Intan Nurhayati', role: 'Pradana Putri', avatar: '/assets/image/background.webp' },
    admin: { name: 'Admin Trigantara', role: 'Admin Blog', avatar: '/assets/image/background.webp' },
};

export const ARTICLES: BlogArticle[] = [
    {
        slug: 'perkemahan-penegak-2024',
        title: 'Perkemahan Penegak 2024: Membangun Karakter di Alam Terbuka',
        excerpt: 'Kegiatan perkemahan tahunan yang diikuti oleh seluruh anggota penegak Trigantara. Acara ini berlangsung selama 3 hari di kawasan Lembang.',
        content: `Perkemahan Penegak 2024 menjadi salah satu momen bersejarah bagi Ambalan Trigantara. Kegiatan yang berlangsung selama tiga hari dua malam ini diikuti oleh lebih dari 80 anggota penegak dari SMK Marhas Margahayu.

## Rangkaian Kegiatan

Selama perkemahan, peserta mengikuti berbagai kegiatan yang dirancang untuk membentuk karakter dan meningkatkan keterampilan kepramukaan:

- **Pioneering**: Peserta membangun berbagai konstruksi tali-temali, termasuk menara pandang dan jembatan darurat.
- **Halang Rintang**: Uji ketahanan fisik dan mental melalui pos-pos tantangan.
- **Api Unggun**: Malam persaudaraan dengan penampilan seni dan budaya dari masing-masing regu.
- **Penjelajahan**: Navigasi alam menggunakan peta dan kompas.

## Hasil Kegiatan

Perkemahan ini berhasil mempererat hubungan antar anggota dan meningkatkan semangat kebersamaan. Beberapa anggota berprestasi mendapatkan penghargaan khusus dari pembina.

> "Perkemahan bukan sekadar tidur di tenda. Ini tentang belajar hidup mandiri dan saling membantu." — Arief Fajar, Pradana Putra`,
        category: 'kegiatan',
        author: authors.arief,
        image: '/assets/image/background.webp',
        publishedAt: '2024-12-15',
        readTime: 5,
        tags: ['Perkemahan', 'Penegak', 'Latihan'],
        featured: true,
    },
    {
        slug: 'lomba-pramuka-tingkat-kota-2024',
        title: 'Raih Juara di Lomba Pramuka Tingkat Kota Bandung 2024',
        excerpt: 'Tim Trigantara berhasil meraih juara umum dalam lomba pramuka tingkat kota yang diselenggarakan oleh Kwarcab Bandung.',
        content: `Ambalan Trigantara kembali mengukir prestasi gemilang. Dalam kompetisi lomba pramuka tingkat Kota Bandung 2024, tim kami berhasil meraih Juara Umum, mengalahkan puluhan gugus depan dari seluruh kota.

## Cabang Lomba yang Dimenangkan

| Cabang Lomba | Peringkat | Peserta |
|---|---|---|
| PBB (Baris Berbaris) | Juara 1 | Regu Putra |
| Pioneering | Juara 2 | Regu Putri |
| Cerdas Cermat | Juara 1 | Tim Campuran |
| Semaphore | Juara 3 | Regu Putra |

Semua prestasi ini merupakan hasil latihan intensif selama 3 bulan menjelang lomba.`,
        category: 'berita',
        author: authors.intan,
        image: '/assets/image/background.webp',
        publishedAt: '2024-11-20',
        readTime: 4,
        tags: ['Lomba', 'Kwarcab', 'Penegak'],
    },
    {
        slug: 'pelantikan-dewan-ambalan-2025',
        title: 'Pelantikan Dewan Ambalan Periode 2025: Era Baru Trigantara',
        excerpt: 'Pelantikan resmi pengurus baru Dewan Ambalan Trigantara untuk periode 2025 telah dilaksanakan dengan khidmat.',
        content: `Pelantikan Dewan Ambalan Trigantara periode 2025 menjadi tonggak awal kepemimpinan baru. Acara ini dilaksanakan di Aula SMK Marhas Margahayu dengan dihadiri oleh seluruh anggota, pembina, dan perwakilan pihak sekolah.

## Susunan Pengurus Baru

Pradana Putra dan Pradana Putri yang baru dilantik membawa visi segar untuk membawa Trigantara ke tingkat yang lebih tinggi.

Kami berkomitmen untuk:
1. Meningkatkan partisipasi anggota dalam kegiatan rutin
2. Memperluas jaringan dengan gugus depan lain
3. Mengoptimalkan penggunaan teknologi dalam kegiatan kepramukaan
4. Meningkatkan prestasi di berbagai ajang lomba`,
        category: 'pengumuman',
        author: authors.admin,
        image: '/assets/image/background.webp',
        publishedAt: '2025-01-10',
        readTime: 3,
        tags: ['Pelantikan', 'Dewan Ambalan'],
        featured: true,
    },
    {
        slug: 'bakti-sosial-margahayu',
        title: 'Bakti Sosial: Trigantara untuk Masyarakat Margahayu',
        excerpt: 'Kegiatan bakti sosial rutin sebagai wujud pengabdian kepada masyarakat di sekitar SMK Marhas Margahayu.',
        content: `Dalam rangka memperingati Hari Bakti Pramuka, Ambalan Trigantara menyelenggarakan kegiatan bakti sosial di lingkungan Margahayu.

## Kegiatan yang Dilaksanakan

- Bersih-bersih lingkungan dan sungai
- Pembagian sembako kepada warga kurang mampu
- Penghijauan dengan penanaman 100 pohon
- Cek kesehatan gratis bekerja sama dengan PMI

Partisipasi masyarakat sangat antusias dan kegiatan ini diharapkan menjadi agenda rutin tahunan.`,
        category: 'kegiatan',
        author: authors.arief,
        image: '/assets/image/background.webp',
        publishedAt: '2024-10-05',
        readTime: 3,
        tags: ['Bakti Sosial', 'Penegak'],
    },
    {
        slug: 'tips-persiapan-perkemahan',
        title: '7 Tips Persiapan Perkemahan untuk Pramuka Pemula',
        excerpt: 'Panduan lengkap persiapan perkemahan dari anggota senior Trigantara untuk kamu yang baru pertama kali berkemah.',
        content: `Berkemah untuk pertama kali bisa terasa menantang. Berikut tips dari kami:

## 1. Persiapkan Perlengkapan
Pastikan tenda, sleeping bag, matras, dan peralatan masak dalam kondisi baik.

## 2. Bawa Pakaian Cukup
Siapkan pakaian ganti, jas hujan, dan jaket tebal untuk malam hari.

## 3. Pelajari Tali-Temali Dasar
Minimal kuasai simpul pangkal, simpul mati, dan simpul jangkar.

## 4. Bawa P3K
Kit pertolongan pertama wajib dibawa, termasuk obat pribadi.

## 5. Koordinasi dengan Regu
Pastikan pembagian tugas sudah jelas sebelum berangkat.

## 6. Kenali Lokasi
Pelajari peta dan akses menuju lokasi perkemahan.

## 7. Jaga Kebersihan
Ingat prinsip "Leave No Trace" — tinggalkan tempat perkemahan lebih bersih dari saat kamu datang.`,
        category: 'artikel',
        author: authors.intan,
        image: '/assets/image/background.webp',
        publishedAt: '2024-09-18',
        readTime: 6,
        tags: ['Perkemahan', 'Latihan', 'Penegak'],
    },
    {
        slug: 'jadwal-latihan-semester-genap',
        title: 'Pengumuman: Jadwal Latihan Semester Genap 2024/2025',
        excerpt: 'Jadwal latihan rutin semester genap telah dirilis. Pastikan kamu hadir sesuai jadwal yang telah ditentukan.',
        content: `Dengan ini kami sampaikan jadwal latihan rutin untuk semester genap tahun ajaran 2024/2025.

## Jadwal Latihan

| Hari | Waktu | Materi |
|---|---|---|
| Sabtu | 08:00 - 12:00 | Latihan Rutin |
| Minggu (2x/bulan) | 07:00 - 11:00 | Latihan Khusus |

## Materi Latihan
- PBB dan Upacara
- Tali-temali dan Pioneering
- Semaphore dan Morse
- P3K dan Pertolongan Darurat
- Penjelajahan dan Navigasi

Kehadiran minimal 75% dari total pertemuan. Anggota yang tidak memenuhi syarat kehadiran akan dikenakan sanksi.`,
        category: 'pengumuman',
        author: authors.admin,
        image: '/assets/image/background.webp',
        publishedAt: '2025-01-22',
        readTime: 2,
        tags: ['Latihan', 'Dewan Ambalan'],
    },
];

// Utility functions for API-ready patterns
export function getArticleBySlug(slug: string): BlogArticle | undefined {
    return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: BlogCategory): BlogArticle[] {
    return ARTICLES.filter((a) => a.category === category);
}

export function getFeaturedArticles(): BlogArticle[] {
    return ARTICLES.filter((a) => a.featured);
}

export function getRecentArticles(count: number = 5): BlogArticle[] {
    return [...ARTICLES]
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, count);
}

export function searchArticles(query: string): BlogArticle[] {
    const lower = query.toLowerCase();
    return ARTICLES.filter(
        (a) =>
            a.title.toLowerCase().includes(lower) ||
            a.excerpt.toLowerCase().includes(lower) ||
            a.tags.some((t) => t.toLowerCase().includes(lower))
    );
}
