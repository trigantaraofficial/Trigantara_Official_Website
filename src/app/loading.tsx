export default function Loading() {
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center">
            <div className="text-center">
                {/* Animated Logo/Spinner */}
                <div className="relative w-20 h-20 mx-auto mb-8">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#d4a017]/20" />

                    {/* Spinning ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#d4a017] animate-spin" />

                    {/* Inner glow */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#d4a017]/20 to-transparent animate-pulse" />

                    {/* Center dot */}
                    <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#d4a017]" />
                </div>

                {/* Loading Text */}
                <div className="space-y-2">
                    <p className="text-white/80 text-lg font-medium">
                        Memuat...
                    </p>
                    <p className="text-white/40 text-sm">
                        Mohon tunggu sebentar
                    </p>
                </div>

                {/* Loading dots animation */}
                <div className="flex items-center justify-center gap-1.5 mt-6">
                    {[0, 1, 2].map((i) => (
                        <span
                            key={i}
                            className="w-2 h-2 rounded-full bg-[#d4a017] animate-bounce"
                            style={{
                                animationDelay: `${i * 0.15}s`,
                                animationDuration: '0.6s',
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
