import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#FF2D7B",
          light: "#FF5C9A",
          dark: "#D91A63",
          glow: "rgba(255, 45, 123, 0.4)",
        },
        surface: {
          DEFAULT: "#0A0A0B",
          card: "#131316",
          elevated: "#1A1A1F",
          border: "#2A2A30",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#9999A5",
          muted: "#66666F",
        },
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-accent":
          "linear-gradient(135deg, #FF2D7B 0%, #FF6B9D 50%, #D91A63 100%)",
        "gradient-card":
          "linear-gradient(180deg, #1A1A1F 0%, #131316 100%)",
        "gradient-hero":
          "radial-gradient(ellipse at 50% 0%, rgba(255,45,123,0.15) 0%, transparent 60%)",
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;