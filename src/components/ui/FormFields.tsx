'use client';

import { ReactNode, forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

// Input Component
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    error,
    leftIcon,
    rightIcon,
    helperText,
    className = '',
    id,
    ...props
}, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={className}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-white/80 text-sm font-medium mb-2"
                >
                    {label}
                </label>
            )}

            <div className="relative">
                {leftIcon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                        {leftIcon}
                    </div>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    className={`
                        w-full px-4 py-3 rounded-xl
                        bg-white/5 border text-white
                        placeholder:text-white/30
                        focus:outline-none focus:ring-2 focus:ring-[#d4a017]/50
                        transition-all duration-200
                        ${leftIcon ? 'pl-12' : ''}
                        ${rightIcon ? 'pr-12' : ''}
                        ${error
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/10 hover:border-white/20 focus:border-[#d4a017]/50'
                        }
                    `}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                    {...props}
                />

                {rightIcon && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
                        {rightIcon}
                    </div>
                )}
            </div>

            {error && (
                <p id={`${inputId}-error`} className="mt-1 text-red-400 text-sm" role="alert">
                    {error}
                </p>
            )}

            {!error && helperText && (
                <p id={`${inputId}-helper`} className="mt-1 text-white/40 text-sm">
                    {helperText}
                </p>
            )}
        </div>
    );
});

Input.displayName = 'Input';

// Textarea Component
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
    label,
    error,
    helperText,
    className = '',
    id,
    rows = 4,
    ...props
}, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={className}>
            {label && (
                <label
                    htmlFor={textareaId}
                    className="block text-white/80 text-sm font-medium mb-2"
                >
                    {label}
                </label>
            )}

            <textarea
                ref={ref}
                id={textareaId}
                rows={rows}
                className={`
                    w-full px-4 py-3 rounded-xl resize-none
                    bg-white/5 border text-white
                    placeholder:text-white/30
                    focus:outline-none focus:ring-2 focus:ring-[#d4a017]/50
                    transition-all duration-200
                    ${error
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/10 hover:border-white/20 focus:border-[#d4a017]/50'
                    }
                `}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
                {...props}
            />

            {error && (
                <p id={`${textareaId}-error`} className="mt-1 text-red-400 text-sm" role="alert">
                    {error}
                </p>
            )}

            {!error && helperText && (
                <p id={`${textareaId}-helper`} className="mt-1 text-white/40 text-sm">
                    {helperText}
                </p>
            )}
        </div>
    );
});

Textarea.displayName = 'Textarea';

// Checkbox Component
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label: string;
    error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
    label,
    error,
    className = '',
    id,
    ...props
}, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={className}>
            <label
                htmlFor={checkboxId}
                className="inline-flex items-center gap-3 cursor-pointer group"
            >
                <input
                    ref={ref}
                    type="checkbox"
                    id={checkboxId}
                    className="sr-only peer"
                    {...props}
                />
                <div className={`
                    w-5 h-5 rounded border-2 flex items-center justify-center
                    transition-all duration-200
                    peer-focus:ring-2 peer-focus:ring-[#d4a017]/50 peer-focus:ring-offset-2 peer-focus:ring-offset-black
                    ${error
                        ? 'border-red-500'
                        : 'border-white/30 group-hover:border-white/50 peer-checked:border-[#d4a017] peer-checked:bg-[#d4a017]'
                    }
                `}>
                    <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100"
                        viewBox="0 0 12 12"
                    >
                        <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                    </motion.svg>
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">
                    {label}
                </span>
            </label>

            {error && (
                <p className="mt-1 text-red-400 text-sm" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
});

Checkbox.displayName = 'Checkbox';
