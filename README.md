# Trigantara Public Website (Next.js)

Wajah publik dari Ambalan Trigantara.

## 🎨 Fitur
*   **UI Modern**: Dibangun dengan Tailwind CSS dan Font Geist.
*   **SEO**: Metadata dan tag OpenGraph yang teroptimasi di `layout.tsx`.
*   **API**: Terhubung ke Backend terpusat melalui `lib/api.ts`.
*   **Performa**: Strategi optimasi font dan gambar sudah siap.

## 📦 Setup

1.  **Instalasi Dependensi**:
    ```bash
    npm install
    ```
2.  **Environment Variables**:
    Salin `.env.local.example` ke `.env.local`.
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3001
    ```
3.  **Jalankan Dev Server**:
    ```bash
    npm run dev
    ```
    Berjalan di `http://localhost:3000`.
