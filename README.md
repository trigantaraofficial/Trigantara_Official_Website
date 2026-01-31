# Trigantara Official Website

Website resmi untuk Ambalan Trigantara, dibangun dengan teknologi web modern untuk menyajikan informasi yang informatif dan pengalaman visual yang menarik.

## 🚀 Deskripsi Proyek

Project ini adalah frontend dari ekosistem digital Trigantara. Website ini berfungsi sebagai wajah publik yang menampilkan profil, kegiatan, berita, dan galeri Ambalan. Dibangun menggunakan **Next.js 16** dengan fokus pada performa, SEO, dan estetika desain yang premium.

### Stack Teknologi
*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
*   **Bahasa**: [TypeScript](https://www.typescriptlang.org/) untuk keamanan tipe yang ketat.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) untuk utility-first CSS.
*   **Animasi**: [Framer Motion](https://www.framer.com/motion/) dan [GSAP](https://greensock.com/gsap/) untuk interaksi yang halus dan kompleks.
*   **Komponen UI**:
    *   [Shadcn UI](https://ui.shadcn.com/) sebagai basis komponen.
    *   [Lucide React](https://lucide.dev/) untuk ikonografi.
    *   Custom components (`lightswind`) untuk efek visual unik (glitch, glowing cards, particles, dll).

## ✨ Fitur Utama

*   **Desain Responsif & Modern**: Tampilan yang menyesuaikan dengan berbagai perangkat (Desktop, Tablet, Mobile) dengan tema yang elegan.
*   **Animasi Tingkat Lanjut**:
    *   *Scroll Animations*: Elemen muncul saat di-scroll.
    *   *Interactive Backgrounds*: Efek latar belakang dinamis (Particles, Waves, Gradients).
    *   *Micro-interactions*: Hover effects, smooth transitions, dan custom cursor.
*   **Optimasi SEO**: Struktur HTML semantik, metadata dinamis, dan performa tinggi (Core Web Vitals).
*   **Komponen Modular**: Arsitektur komponen yang rapi memudahkan pengembangan dan maintenance.

## 🛠️ Pengembangan & Perbaikan Terkini

Kami telah melakukan serangkaian perbaikan besar untuk memastikan stabilitas build produksi:

1.  **Refactor TypeScript**: Memperbaiki ratusan error tipe yang ketat (strict mode), terutama pada spread props dan penggunaan `RefObject`.
2.  **Optimasi Build**: Menyelesaikan masalah kompatibilitas library (`react-resizable-panels`, `framer-motion`) untuk build yang sukses di lingkungan Cloud (Railway/Vercel).
3.  **Kestabilan Komponen**: Memperbaiki potensi bug pada komponen interaktif seperti `Select`, `ScrollCarousel`, dan `TypewriterInput`.

## 📦 Cara Menjalankan

### Prasyarat
*   Node.js 18+
*   npm atau yarn

### Instalasi
```bash
# Clone repository
git clone https://github.com/trigantaraofficial/Trigantara_Official_Website.git

# Masuk ke direktori
cd Trigantara_Official_Website

# Install dependensi
npm install
```

### Development Server
```bash
npm run dev
# Buka http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

## 🤝 Kontribusi

Silakan buat *Pull Request* untuk fitur baru atau perbaikan bug. Pastikan tidak ada error *linting* atau *build* sebelum commit.

---
&copy; 2024 - 2026 Trigantara Official. All Rights Reserved.
