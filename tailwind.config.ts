import type { Config } from "tailwindcss";

const config: Config = {
    // Specify which files Tailwind should look for class names in.
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Define our own futuristic colors
            colors: {
                dark: {
                    deep: "#050505",    // A pure black for the background
                    card: "#0a0a0a",    // A very dark gray for cards/panels
                    accent: "#1a1a1a",  // For borders or secondary elements
                },
                neon: {
                    blue: "#00f3ff",    // The classic cyan of futuristic interfaces
                    purple: "#bc13fe",  // A touch of purple for gradients
                    pink: "#ff0080",    // For alerts or attention-grabbing details
                },
            },
            // Custom animations (useful for pulse or floating effects)
            animation: {
                'glow-pulse': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(0, 243, 255, 0.2)' },
                    '100%': { boxShadow: '0 0 20px rgba(0, 243, 255, 0.6)' },
                }
            },
            // Space fonts
            fontFamily: {
                mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
            },
        },
    },
    plugins: [],
};

export default config;