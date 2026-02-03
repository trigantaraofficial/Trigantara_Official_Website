'use client';

import { useCallback, useEffect, useRef } from 'react';

/**
 * Custom hook to trap focus within a container element
 * Used for modal dialogs, mobile menus, and other overlays
 * 
 * @param isActive - Whether the focus trap should be active
 * @returns ref to attach to the container element
 */
export function useFocusTrap<T extends HTMLElement>(isActive: boolean) {
    const containerRef = useRef<T | null>(null);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isActive || !containerRef.current) return;
        if (e.key !== 'Tab') return;

        const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }, [isActive]);

    useEffect(() => {
        if (isActive) {
            document.addEventListener('keydown', handleKeyDown);

            // Focus first focusable element
            const firstElement = containerRef.current?.querySelector<HTMLElement>(
                'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            firstElement?.focus();
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isActive, handleKeyDown]);

    return containerRef;
}

/**
 * Custom hook to handle click outside an element
 * Used for dropdowns, modals, and menus
 */
export function useClickOutside<T extends HTMLElement>(
    callback: () => void,
    isActive: boolean = true
) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        if (!isActive) return;

        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [callback, isActive]);

    return ref;
}

/**
 * Custom hook to handle escape key press
 */
export function useEscapeKey(callback: () => void, isActive: boolean = true) {
    useEffect(() => {
        if (!isActive) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                callback();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [callback, isActive]);
}

/**
 * Announce content to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.cssText = 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}
