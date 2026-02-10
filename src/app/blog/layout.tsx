import { BlogThemeProvider } from './BlogThemeContext';

export const metadata = {
    title: 'Blog — Pramuka Trigantara',
    description: 'Blog resmi Pramuka Trigantara. Berita, kegiatan, artikel, dan pengumuman seputar kepramukaan di SMK Marhas Margahayu, Bandung.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <BlogThemeProvider>
            {children}
        </BlogThemeProvider>
    );
}
