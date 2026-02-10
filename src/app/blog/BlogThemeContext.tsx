'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type BlogTheme = 'dark' | 'light';

interface BlogThemeContextType {
    theme: BlogTheme;
    toggleTheme: () => void;
}

const BlogThemeContext = createContext<BlogThemeContextType>({
    theme: 'dark',
    toggleTheme: () => { },
});

export function useBlogTheme() {
    return useContext(BlogThemeContext);
}

export function BlogThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<BlogTheme>('dark');

    useEffect(() => {
        const saved = localStorage.getItem('blog-theme') as BlogTheme | null;
        if (saved) setTheme(saved);
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        localStorage.setItem('blog-theme', next);
    };

    return (
        <BlogThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </BlogThemeContext.Provider>
    );
}
