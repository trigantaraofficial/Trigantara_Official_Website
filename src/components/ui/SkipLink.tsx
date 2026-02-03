'use client';

interface SkipLinkProps {
    targetId?: string;
    className?: string;
}

/**
 * Skip to main content link for keyboard navigation accessibility
 * This component should be placed at the very top of the page layout
 */
export default function SkipLink({
    targetId = 'main-content',
    className = ''
}: SkipLinkProps) {
    return (
        <a
            href={`#${targetId}`}
            className={`
                sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999]
                focus:px-6 focus:py-3 focus:bg-[#d4a017] focus:text-black focus:rounded-lg
                focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-white focus:outline-none
                ${className}
            `}
        >
            Langsung ke konten utama
        </a>
    );
}
