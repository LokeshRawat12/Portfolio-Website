/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1117",
        panel: "#171A24",
        panel2: "#1B1E2B",
        line: "#282C3D",
        paper: "#ECEDF2",
        muted: "#8B90A3",
        amber: "#F2A94F",
        amberdim: "#8A6A3B",
        teal: "#5EEAD4",
        rose: "#F2789F",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(242,169,79,0.15), 0 8px 30px rgba(0,0,0,0.45)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        rise: "rise 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};
