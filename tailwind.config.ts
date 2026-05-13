import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "PingFang SC",
          "Source Han Sans SC",
          "Microsoft YaHei",
          "sans-serif"
        ]
      },
      colors: {
        sprout: {
          50: "#F4FAF2",
          100: "#E6F3DF",
          200: "#CAE6BD",
          300: "#AAD491",
          400: "#8EC16E",
          500: "#7FB069",
          600: "#638F4D",
          700: "#4F713F",
          800: "#405A36",
          900: "#354A30"
        },
        cream: "#FFF8E8",
        honey: "#F8D66D",
        coral: "#E86D6D",
        ink: "#243026"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(58, 83, 53, 0.12)",
        panel: "0 10px 30px rgba(36, 48, 38, 0.08)"
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(232, 109, 109, 0.28)" },
          "50%": { boxShadow: "0 0 0 10px rgba(232, 109, 109, 0)" }
        }
      },
      animation: {
        "pulse-soft": "pulseSoft 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: [animate]
} satisfies Config;
