/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      red: {
        50: "#FBEAEA",
        100: "#F6D5D5",
        200: "#EDABAB",
        300: "#E48181",
        400: "#DB5757",
        500: "#D3302F",
        600: "#A82424",
        700: "#7E1B1B",
        800: "#541212",
        900: "#2A0909",
        950: "#150404",
      },
      blue: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
      gray: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#292929",
      },
    },

    fontFamily: {
      almarai: ["Almarai", "sans-serif"],
      exo: ["Exo", "sans-serif"],
    },

    fontSize: {
      "display-desktop": ["6.5rem", { lineHeight: "5.5rem" }],
      "display-mobile": ["3.9rem", { lineHeight: "3.5rem" }],
      "h1-desktop": ["4.8rem", { lineHeight: "3.75rem" }],
      "h1-mobile": ["3.5rem", { lineHeight: "3.75rem" }],
      "h2-desktop": ["4rem", { lineHeight: "3.75rem" }],
      "h2-mobile": ["2.5rem", { lineHeight: "2.5rem" }],
      "h3-desktop": ["2.3rem", { lineHeight: "2.5rem" }],
      "h3-mobile": ["2rem", { lineHeight: "2.25rem" }],
      "h4-desktop": ["1.8rem", { lineHeight: "2.25rem" }],
      "h4-mobile": ["1.4rem", { lineHeight: "1.875rem" }],
      "p-desktop": ["1.125rem", { lineHeight: "1.875rem" }],
      "p-mobile": ["1rem", { lineHeight: "1.5rem" }],
      "a-desktop": ["1.125rem", { lineHeight: "1.875rem" }],
      "a-mobile": ["1rem", { lineHeight: "1.5rem" }],
    },
    fontWeight: {
      light: "300",
      regular: "400",
      semibold: "600",
      bold: "700",
      black: "900",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    borderRadius: {
      DEFAULT: "1.25rem",
      none: "0px",
      s: "5px",
      sm: "10px",
      m: "15px",
      md: "30px",
      lg: "40px",
      full: "9999px",
    },
    boxShadow: {
      drop25: "4px 4px 4px 0 rgb(0 0 0 / 0.25)",
      drop50: "4px 4px 4px 0 rgb(0 0 0 / 0.50)",
      inner25: "0 4px 4px 0 rgb(0 0 0 / 0.25) inset",
      inner50: "0 4px 4px 0 rgb(0 0 0 / 0.50) inset",
    },

    extend: {
      spacing: {
        gap: "40px", // Keeps the 30px gap
        "mobil-bottom": "100px", // Slightly reduced bottom spacing for mobile
        "desktop-bottom": "120px", // Reduced bottom spacing for desktop
        "mobil-top": "100px", // Reduced top spacing for mobile
        "desktop-top": "120px", // Reduced top spacing for desktop
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
