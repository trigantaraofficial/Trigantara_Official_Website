'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    className?: string;
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`space-y-3 ${className}`}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/5"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <span className="text-white font-medium text-lg">
                                {item.question}
                            </span>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4a017]/10 flex items-center justify-center"
                            >
                                {isOpen ? (
                                    <Minus className="w-4 h-4 text-[#d4a017]" />
                                ) : (
                                    <Plus className="w-4 h-4 text-[#d4a017]" />
                                )}
                            </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    id={`faq-answer-${index}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-5 pb-5 pt-0 text-white/70 leading-relaxed border-t border-white/5">
                                        <div className="pt-4">
                                            {item.answer}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
