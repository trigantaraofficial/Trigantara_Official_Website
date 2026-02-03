'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        // You can log to an error reporting service here
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
                    <div className="max-w-md w-full text-center">
                        {/* Error Icon */}
                        <div className="mb-8">
                            <div className="w-20 h-20 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
                                <AlertTriangle className="w-10 h-10 text-red-500" />
                            </div>
                        </div>

                        {/* Error Message */}
                        <h1 className="text-2xl font-semibold text-white mb-3">
                            Terjadi Kesalahan
                        </h1>
                        <p className="text-white/60 mb-8">
                            Maaf, telah terjadi kesalahan yang tidak terduga.
                            Silakan coba lagi atau kembali ke halaman utama.
                        </p>

                        {/* Error Details (Development) */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mb-8 text-left bg-white/5 rounded-lg p-4 border border-white/10">
                                <summary className="text-white/80 cursor-pointer mb-2">
                                    Detail Error (Development)
                                </summary>
                                <pre className="text-red-400 text-xs overflow-auto">
                                    {this.state.error.message}
                                    {'\n\n'}
                                    {this.state.error.stack}
                                </pre>
                            </details>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={this.handleReset}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4a017] text-black font-medium rounded-full hover:bg-[#f0c040] transition-colors"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Coba Lagi
                            </button>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors"
                            >
                                <Home className="w-4 h-4" />
                                Ke Beranda
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
