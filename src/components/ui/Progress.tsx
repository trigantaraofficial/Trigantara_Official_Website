'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
    value: number;
    max?: number;
    size?: 'sm' | 'md' | 'lg';
    color?: 'gold' | 'green' | 'blue' | 'red';
    showValue?: boolean;
    label?: string;
    animated?: boolean;
    className?: string;
}

const sizeStyles = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
};

const colorStyles = {
    gold: 'bg-[#d4a017]',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    red: 'bg-red-500',
};

export function ProgressBar({
    value,
    max = 100,
    size = 'md',
    color = 'gold',
    showValue = false,
    label,
    animated = true,
    className = '',
}: ProgressBarProps) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div className={className}>
            {(label || showValue) && (
                <div className="flex justify-between items-center mb-2">
                    {label && <span className="text-white/60 text-sm">{label}</span>}
                    {showValue && (
                        <span className="text-white/80 text-sm font-medium">
                            {Math.round(percentage)}%
                        </span>
                    )}
                </div>
            )}
            <div className={`w-full rounded-full bg-white/10 overflow-hidden ${sizeStyles[size]}`}>
                <motion.div
                    initial={animated ? { width: 0 } : { width: `${percentage}%` }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full rounded-full ${colorStyles[color]}`}
                />
            </div>
        </div>
    );
}

// Circular Progress
interface CircularProgressProps {
    value: number;
    max?: number;
    size?: number;
    strokeWidth?: number;
    color?: 'gold' | 'green' | 'blue' | 'red';
    showValue?: boolean;
    className?: string;
}

export function CircularProgress({
    value,
    max = 100,
    size = 80,
    strokeWidth = 6,
    color = 'gold',
    showValue = true,
    className = '',
}: CircularProgressProps) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    const colorClasses = {
        gold: 'stroke-[#d4a017]',
        green: 'stroke-green-500',
        blue: 'stroke-blue-500',
        red: 'stroke-red-500',
    };

    return (
        <div className={`relative inline-flex items-center justify-center ${className}`}>
            <svg width={size} height={size} className="-rotate-90">
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    className="text-white/10"
                />
                {/* Progress circle */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    className={colorClasses[color]}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{
                        strokeDasharray: circumference,
                    }}
                />
            </svg>
            {showValue && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-medium">
                        {Math.round(percentage)}%
                    </span>
                </div>
            )}
        </div>
    );
}

export default ProgressBar;
