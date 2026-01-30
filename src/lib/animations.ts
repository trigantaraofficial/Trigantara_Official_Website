// Animation configuration for consistent animations across the website
// Following the principle: ELEGANSI - simple but impactful

export const animationConfig = {
    // Standard durations
    duration: {
        fast: 0.3,
        normal: 0.5,
        slow: 0.7,
        verySlow: 1.0,
    },

    // Standard delays for staggered animations
    delay: {
        none: 0,
        short: 0.1,
        medium: 0.15,
        long: 0.2,
    },

    // Standard easing curves
    ease: {
        default: [0.25, 0.1, 0.25, 1], // Smooth ease-out
        smooth: [0.4, 0, 0.2, 1], // Material design ease
        bounce: [0.68, -0.55, 0.265, 1.55], // Subtle bounce
        sharp: [0.4, 0, 0.6, 1], // Quick ease
    },

    // Spring configurations for Framer Motion
    spring: {
        gentle: { type: "spring", stiffness: 100, damping: 20 },
        default: { type: "spring", stiffness: 200, damping: 25 },
        bouncy: { type: "spring", stiffness: 300, damping: 15 },
        stiff: { type: "spring", stiffness: 400, damping: 30 },
    },

    // Stagger configurations for lists
    stagger: {
        fast: 0.03,
        normal: 0.05,
        slow: 0.1,
    },
};

// Animation variants for consistent scroll animations
export const scrollVariants = {
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    slideUp: {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    },
};

// Hover animations for interactive elements
export const hoverVariants = {
    lift: { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } },
    scale: { scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 20 } },
    glow: { boxShadow: "0 0 30px rgba(212, 160, 23, 0.3)" },
};

// Transition presets
export const transitions = {
    default: {
        duration: animationConfig.duration.normal,
        ease: animationConfig.ease.smooth,
    },
    fast: {
        duration: animationConfig.duration.fast,
        ease: animationConfig.ease.sharp,
    },
    slow: {
        duration: animationConfig.duration.slow,
        ease: animationConfig.ease.default,
    },
};
