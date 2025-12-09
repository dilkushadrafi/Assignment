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
                        blue: "#002D62", // Deep Navy Blue (Primary)
                        light: "#00AEEF", // Bright Cyan (Action/Highlight)
                        dark: "#001B3A", // Darker Variant for Footer/Backgrounds
                        gray: "#F9F9F9", // Light Gray for Section Backgrounds
                    }
                }
            }
        },
    },
    plugins: [],
};
export default config;
