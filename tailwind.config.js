/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#eef4ff",
          100: "#d9e6ff",
          200: "#bcd2ff",
          300: "#8eb3ff",
          400: "#5a8bff",
          500: "#2f63f5",
          600: "#1b48d6",
          700: "#1739aa",
          800: "#163385",
          900: "#142d68",
          950: "#0b1a3f",
        },
        cameroon: {
          green: "#007a5e",
          red:   "#ce1126",
          yellow:"#fcd116",
        },
        accent: {
          DEFAULT: "#ce1126",
          dark: "#a30d1d",
        },
        ink: {
          50:  "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e2",
          300: "#b1b8c8",
          400: "#8690a8",
          500: "#67728e",
          600: "#525a74",
          700: "#43495d",
          800: "#3a3e4f",
          900: "#1f2230",
          950: "#0d0f18",
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Source Serif Pro"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,.05)",
        card: "0 4px 12px -4px rgba(15,23,42,.10)",
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'slide-down': { '0%': { opacity: '0', transform: 'translateY(-8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        'fade-up': 'fade-up .6s ease-out forwards',
        'fade-in': 'fade-in .5s ease-out forwards',
        'slide-down': 'slide-down .25s ease-out forwards',
      },
    },
  },
  plugins: [],
};
