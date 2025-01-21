import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./comps/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)", // Small shadow
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Medium shadow
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)", // Large shadow
        xl: "4px 4px 8px rgba(0, 0, 0, 0.75)", // Extra large shadow
        none: "none", // No shadow
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      // Explicitly annotate types
      const utilities: Record<string, { textShadow: string; }> = Object.entries(theme("textShadow")).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [`.text-shadow-${key}`]: { textShadow: value },
        }),
        {}
      );
      addUtilities(utilities, ["responsive", "hover"]);
    }),
  ],
} satisfies Config;
