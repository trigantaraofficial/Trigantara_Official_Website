/**
 * Structured Data Schema types and utilities for SEO
 * These generate JSON-LD structured data for search engines
 */

interface PostalAddress {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
}

interface ContactPoint {
    '@type': 'ContactPoint';
    email: string;
    contactType: string;
    availableLanguage: string;
}

interface Organization {
    '@context': 'https://schema.org';
    '@type': 'Organization';
    name: string;
    alternateName?: string;
    description: string;
    url: string;
    logo: string;
    sameAs: string[];
    address: PostalAddress;
    contactPoint: ContactPoint;
}

interface ListItem {
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
}

interface BreadcrumbList {
    '@context': 'https://schema.org';
    '@type': 'BreadcrumbList';
    itemListElement: ListItem[];
}

/**
 * Organization structured data for SEO
 */
export const organizationSchema: Organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ambalan Trigantara',
    alternateName: 'Pramuka Trigantara',
    description: 'Ambalan Pramuka Penegak dari SMK Marhas Margahayu yang berdedikasi untuk membangun karakter generasi emas melalui kepramukaan.',
    url: 'https://trigantara.com',
    logo: 'https://trigantara.com/assets/logo/trigantara.png',
    sameAs: [
        'https://www.instagram.com/trigantara.official',
        'https://www.tiktok.com/@trigantara.official',
    ],
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Margahayu Raya No.26',
        addressLocality: 'Bandung',
        addressRegion: 'Jawa Barat',
        postalCode: '40286',
        addressCountry: 'ID',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'trigantaraofficial@gmail.com',
        contactType: 'customer service',
        availableLanguage: 'Indonesian',
    },
};

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]): BreadcrumbList {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/**
 * Render structured data as JSON-LD script tag content
 */
export function renderStructuredData<T>(data: T): string {
    return JSON.stringify(data);
}
