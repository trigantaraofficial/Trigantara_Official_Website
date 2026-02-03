# Contributing to Trigantara Website

Terima kasih telah berkontribusi pada proyek Trigantara! 🎉

## 📋 Prasyarat

Sebelum berkontribusi, pastikan Anda memiliki:
- Node.js versi 18.0 atau lebih tinggi
- npm versi 9.0 atau lebih tinggi
- Git

## 🚀 Memulai

1. **Fork repository ini**
2. **Clone fork Anda:**
   ```bash
   git clone https://github.com/[username]/Trigantara_Official_Website.git
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Jalankan development server:**
   ```bash
   npm run dev
   ```

## 📝 Workflow Kontribusi

### 1. Buat Branch Baru
```bash
git checkout -b feature/nama-fitur
# atau
git checkout -b fix/nama-bug
```

### 2. Naming Convention untuk Branch
| Prefix | Deskripsi |
|--------|-----------|
| `feature/` | Fitur baru |
| `fix/` | Perbaikan bug |
| `docs/` | Dokumentasi |
| `refactor/` | Refactoring kode |
| `style/` | Perubahan styling |
| `test/` | Testing |

### 3. Commit Messages
Gunakan format [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

[optional body]
```

**Types:**
- `feat`: Fitur baru
- `fix`: Perbaikan bug
- `docs`: Dokumentasi
- `style`: Formatting (tidak mengubah logic)
- `refactor`: Refactoring
- `perf`: Peningkatan performa
- `test`: Testing
- `chore`: Maintenance

**Contoh:**
```bash
git commit -m "feat(gallery): add lightbox component"
git commit -m "fix(header): resolve mobile menu z-index issue"
```

### 4. Push dan Buat Pull Request
```bash
git push origin feature/nama-fitur
```

Kemudian buat Pull Request di GitHub dengan deskripsi yang jelas.

## 🔍 Code Review Guidelines

- Pastikan semua tests passing
- Pastikan tidak ada TypeScript errors
- Pastikan ESLint tidak ada errors
- Pastikan build berhasil

## 📁 Struktur Folder

```
src/
├── app/           # Next.js App Router
├── components/
│   ├── layout/    # Header, Footer
│   ├── lightswind/# External UI components
│   └── ui/        # Custom UI components
├── hooks/         # Custom React hooks
└── lib/           # Utilities
```

## 🎨 Style Guide

### TypeScript
- Gunakan TypeScript untuk semua file
- Definisikan interface untuk props
- Hindari `any` type

### Components
- Gunakan functional components dengan hooks
- Gunakan PascalCase untuk nama component
- Export default untuk component utama

### CSS/Tailwind
- Ikuti design tokens yang sudah ada
- Gunakan CSS variables untuk colors
- Mobile-first responsive design

## 🐛 Reporting Bugs

Buat issue baru dengan:
1. Deskripsi bug
2. Steps to reproduce
3. Expected behavior
4. Screenshots (jika ada)
5. Environment (browser, OS)

## 💡 Feature Requests

Buat issue baru dengan label `enhancement`:
1. Deskripsi fitur
2. Use case
3. Mockup/desain (jika ada)

## 📬 Kontak

Jika ada pertanyaan, hubungi kami di:
- Email: trigantaraofficial@gmail.com
- Instagram: @trigantara.official

---

Terima kasih telah membantu mengembangkan Trigantara! 🙏
