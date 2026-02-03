'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
    onChange?: (tabId: string) => void;
    className?: string;
    variant?: 'default' | 'pills' | 'underline';
}

export default function Tabs({
    tabs,
    defaultTab,
    onChange,
    className = '',
    variant = 'default',
}: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<Record<string, HTMLButtonElement | null>>({});
    const containerRef = useRef<HTMLDivElement>(null);

    // Update indicator position
    useEffect(() => {
        const activeTabEl = tabsRef.current[activeTab];
        if (activeTabEl && containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const tabRect = activeTabEl.getBoundingClientRect();
            setIndicatorStyle({
                left: tabRect.left - containerRect.left,
                width: tabRect.width,
            });
        }
    }, [activeTab]);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        onChange?.(tabId);
    };

    const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

    const variantClasses = {
        default: {
            container: 'bg-white/5 rounded-xl p-1',
            tab: 'px-4 py-2 rounded-lg transition-colors',
            activeTab: 'text-white',
            inactiveTab: 'text-white/50 hover:text-white/80',
            indicator: 'bg-white/10 rounded-lg',
        },
        pills: {
            container: 'gap-2',
            tab: 'px-5 py-2.5 rounded-full transition-all',
            activeTab: 'bg-[#d4a017] text-black',
            inactiveTab: 'bg-white/5 text-white/60 hover:bg-white/10',
            indicator: '',
        },
        underline: {
            container: 'border-b border-white/10',
            tab: 'px-4 py-3 transition-colors',
            activeTab: 'text-[#d4a017]',
            inactiveTab: 'text-white/50 hover:text-white/80',
            indicator: 'bg-[#d4a017] h-0.5 -bottom-px',
        },
    };

    const styles = variantClasses[variant];

    return (
        <div className={className}>
            {/* Tab Headers */}
            <div
                ref={containerRef}
                className={`relative flex ${styles.container}`}
                role="tablist"
            >
                {/* Indicator for default and underline */}
                {variant !== 'pills' && (
                    <motion.div
                        className={`absolute ${styles.indicator}`}
                        initial={false}
                        animate={{
                            left: indicatorStyle.left,
                            width: indicatorStyle.width,
                        }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        style={{
                            top: variant === 'underline' ? 'auto' : 0,
                            bottom: variant === 'underline' ? -1 : 'auto',
                            height: variant === 'underline' ? 2 : '100%',
                        }}
                    />
                )}

                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        ref={(el) => { tabsRef.current[tab.id] = el; }}
                        onClick={() => !tab.disabled && handleTabChange(tab.id)}
                        disabled={tab.disabled}
                        className={`relative z-10 ${styles.tab} ${activeTab === tab.id
                                ? styles.activeTab
                                : styles.inactiveTab
                            } ${tab.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        aria-controls={`tabpanel-${tab.id}`}
                        tabIndex={activeTab === tab.id ? 0 : -1}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div
                id={`tabpanel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={activeTab}
                className="mt-6"
            >
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {activeTabContent}
                </motion.div>
            </div>
        </div>
    );
}
