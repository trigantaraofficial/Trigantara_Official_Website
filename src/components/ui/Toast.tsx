'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
    id: string;
    type: ToastType;
    title: string;
    message?: string;
    duration?: number;
}

interface ToastProps extends Toast {
    onClose: (id: string) => void;
}

const iconMap = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertTriangle,
};

const colorMap = {
    success: 'bg-green-500/10 border-green-500/30 text-green-400',
    error: 'bg-red-500/10 border-red-500/30 text-red-400',
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
};

function ToastItem({ id, type, title, message, duration = 5000, onClose }: ToastProps) {
    const Icon = iconMap[type];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`relative flex items-start gap-3 p-4 rounded-xl border backdrop-blur-sm ${colorMap[type]}`}
            onAnimationComplete={() => {
                if (duration > 0) {
                    setTimeout(() => onClose(id), duration);
                }
            }}
        >
            <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />

            <div className="flex-1 min-w-0">
                <h4 className="font-medium text-white">{title}</h4>
                {message && (
                    <p className="mt-1 text-sm text-white/60">{message}</p>
                )}
            </div>

            <button
                onClick={() => onClose(id)}
                className="flex-shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Tutup notifikasi"
            >
                <X className="w-4 h-4" />
            </button>
        </motion.div>
    );
}

interface ToastContainerProps {
    toasts: Toast[];
    onClose: (id: string) => void;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center';
}

export function ToastContainer({
    toasts,
    onClose,
    position = 'top-right'
}: ToastContainerProps) {
    const positionClasses = {
        'top-right': 'top-4 right-4',
        'top-left': 'top-4 left-4',
        'bottom-right': 'bottom-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'top-center': 'top-4 left-1/2 -translate-x-1/2',
    };

    return (
        <div className={`fixed z-[200] ${positionClasses[position]} w-full max-w-sm space-y-2`}>
            <AnimatePresence mode="popLayout">
                {toasts.map((toast) => (
                    <ToastItem key={toast.id} {...toast} onClose={onClose} />
                ))}
            </AnimatePresence>
        </div>
    );
}

// Hook for using toasts
export function useToast() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (toast: Omit<Toast, 'id'>) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { ...toast, id }]);
        return id;
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    const success = (title: string, message?: string) =>
        addToast({ type: 'success', title, message });

    const error = (title: string, message?: string) =>
        addToast({ type: 'error', title, message });

    const info = (title: string, message?: string) =>
        addToast({ type: 'info', title, message });

    const warning = (title: string, message?: string) =>
        addToast({ type: 'warning', title, message });

    return {
        toasts,
        addToast,
        removeToast,
        success,
        error,
        info,
        warning,
        ToastContainer: () => <ToastContainer toasts={toasts} onClose={removeToast} />,
    };
}

export default ToastItem;
