'use client';

import { useEffect, useRef } from 'react';

interface GoldParticlesProps {
    className?: string;
    count?: number;
}

export default function GoldParticles({ className = "", count = 50 }: GoldParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: {
            x: number;
            y: number;
            size: number;
            speedY: number;
            speedX: number;
            opacity: number;
            fadeSpeed: number;
        }[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2,
                    speedY: Math.random() * 0.5 + 0.1,
                    speedX: (Math.random() - 0.5) * 0.2,
                    opacity: Math.random() * 0.5 + 0.1,
                    fadeSpeed: Math.random() * 0.005 + 0.002
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                // Update position
                p.y -= p.speedY; // Float up
                p.x += p.speedX;

                // Update opacity (twinkle)
                p.opacity -= p.fadeSpeed;
                if (p.opacity <= 0 || p.opacity >= 0.8) {
                    p.fadeSpeed = -p.fadeSpeed;
                }

                // Reset if out of bounds
                if (p.y < 0) {
                    p.y = canvas.height;
                    p.x = Math.random() * canvas.width;
                }

                // Draw
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`; // Gold color
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        resizeCanvas();
        createParticles();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [count]);

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none absolute inset-0 z-10 ${className}`}
        />
    );
}
