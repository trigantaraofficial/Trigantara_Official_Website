'use client';

import { usePathname } from 'next/navigation';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/Accessibility";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import BackToTop from "@/components/ui/BackToTop";

export function LayoutShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isBlog = pathname.startsWith('/blog');

    if (isBlog) {
        // Blog has its own header/footer — only render children
        return (
            <ErrorBoundary>
                <main id="main-content" className="flex-grow">
                    {children}
                </main>
            </ErrorBoundary>
        );
    }

    // Main site layout
    return (
        <ErrorBoundary>
            <SmoothScroll>
                <SkipLink />
                <Header />
                <main id="main-content" className="flex-grow">
                    {children}
                </main>
                <Footer />
                <BackToTop />
            </SmoothScroll>
        </ErrorBoundary>
    );
}
