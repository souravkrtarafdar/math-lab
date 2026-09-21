/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core "lab" palette — deep space canvas with a laser-cyan
        // primary accent and a warm amber secondary accent used sparingly
        // for interactive affordances (sliders, draggable points).
        lab: {
          bg: "#0A0E1A",
          surface: "#111729",
          surfaceRaised: "#161D33",
          border: "#232B45",
          muted: "#8993AD",
          text: "#E9EDF7",
        },
        signal: {
          cyan: "#5FE3E0",
          cyanDim: "#2C9E9C",
          amber: "#F2B84B",
          violet: "#9B8CFF",
          rose: "#F26D8D",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(95,227,224,0.08), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
