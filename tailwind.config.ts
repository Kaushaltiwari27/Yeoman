import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#063B63",
          50: "#EAF3FB",
          100: "#D4E7F7",
          500: "#063B63",
          600: "#052F4F",
          700: "#04243D",
          800: "#031B2C",
          900: "#02121E",
        },
        brandBlue: {
          DEFAULT: "#075EA8",
          light: "#1F78C6",
          dark: "#05457B",
        },
        brandGreen: {
          DEFAULT: "#39B54A",
          light: "#4ED060",
          dark: "#2C8D39",
          soft: "#E8F8EC",
        },
        charcoal: {
          DEFAULT: "#111827",
          light: "#1F2937",
          muted: "#4B5563",
        },
        surface: {
          light: "#F5F8FA",
          card: "#FFFFFF",
          muted: "#EEF3F7",
          border: "#E2E8F0",
        },
        steel: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
        }
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        'industrial-gradient': 'linear-gradient(135deg, #063B63 0%, #075EA8 100%)',
        'metallic-card': 'linear-gradient(180deg, #FFFFFF 0%, #F5F8FA 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
