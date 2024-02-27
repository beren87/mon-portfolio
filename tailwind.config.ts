import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#111110",
        foreground: "hsl(var(--foreground))",
        svg: "0BD8B6",
        svgdark: "#14121f",
        svgbutton: "#0BD8B6",
        // light mode
        lightAccent: "#EEEEF0", // background
        lightPrimary: "#111110", // h1 + h2 + paragraph + navbar
        lightSecondary: "#0D2D2A", // border button + text button + svg button
        lightForeground: "#B8EAE0", // hover button + hover text navbar + separator
        lightPopover: "#3E7949", // disponible
        primary: {
          DEFAULT: "#EEEEF0", // h1 + h2 + paragraph + navbar
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#0BD8B6", // border button + text button + svg button
          foreground: "#145750", // hover button + hover text navbar + separator
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#111110", // background
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "#2CFF0A", // disponible
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
