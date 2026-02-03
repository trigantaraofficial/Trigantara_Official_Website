'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href: string;
}

const routeLabels: Record<string, string> = {
    about: 'Tentang',
    achievements: 'Prestasi',
    events: 'Kegiatan',
    gallery: 'Galeri',
    team: 'Tim',
    contact: 'Kontak',
    news: 'Berita',
};

export default function Breadcrumb() {
    const pathname = usePathname();

    // Don't show breadcrumb on home page
    if (pathname === '/') return null;

    const segments = pathname.split('/').filter(Boolean);

    const breadcrumbs: BreadcrumbItem[] = [
        { label: 'Beranda', href: '/' },
        ...segments.map((segment, index) => {
            const href = '/' + segments.slice(0, index + 1).join('/');
            const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
            return { label, href };
        }),
    ];

    return (
        <nav
            aria-label="Breadcrumb"
            className="py-4"
        >
            <ol className="flex items-center gap-2 text-sm">
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return (
                        <li key={item.href} className="flex items-center gap-2">
                            {index > 0 && (
                                <ChevronRight className="w-4 h-4 text-white/30" />
                            )}
                            {isLast ? (
                                <span
                                    className="text-[#d4a017] font-medium"
                                    aria-current="page"
                                >
                                    {index === 0 ? (
                                        <Home className="w-4 h-4" />
                                    ) : (
                                        item.label
                                    )}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
                                >
                                    {index === 0 ? (
                                        <Home className="w-4 h-4" />
                                    ) : (
                                        item.label
                                    )}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
