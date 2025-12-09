import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                colors: {
                    volatus: {
                        black: "#000000", // Main Background
                        yellow: "#FFB81C", // Brand Yellow/Gold (CTA, Accents)
                        dark: "#121212", // Secondary Background
                        gray: "#F5F5F5", // Light Backgrounds
                        text: "#333333", // Main Text
                    }
                }
            }
        },
    },
    plugins: [],
};
export default config;
