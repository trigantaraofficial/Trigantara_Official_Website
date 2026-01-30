'use client';

// Skip Link Component for Accessibility
export function SkipLink() {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#D4AF37] focus:text-[#050505] focus:rounded-md focus:font-medium focus:outline-none"
        >
            Lewati ke konten utama
        </a>
    );
}

// Screen Reader Only Text
export function SrOnly({ children }: { children: React.ReactNode }) {
    return <span className="sr-only">{children}</span>;
}

// Focus Trap for Modals (simplified)
export function FocusTrap({ children, isActive }: { children: React.ReactNode; isActive: boolean }) {
    if (!isActive) return <>{children}</>;

    return (
        <div role="dialog" aria-modal="true">
            {children}
        </div>
    );
}

// Accessible Icon Button
interface IconButtonProps {
    label: string;
    onClick: () => void;
    icon: React.ReactNode;
    className?: string;
}

export function IconButton({ label, onClick, icon, className = '' }: IconButtonProps) {
    return (
        <button
            onClick={onClick}
            aria-label={label}
            className={`focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#050505] transition-all ${className}`}
        >
            {icon}
            <span className="sr-only">{label}</span>
        </button>
    );
}

// Reduced Motion Wrapper
export function ReducedMotionNotice() {
    return (
        <noscript>
            <style>{`
                *, *::before, *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            `}</style>
        </noscript>
    );
}
