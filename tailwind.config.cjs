/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        newsreader: ["Newsreader", "serif"],
      },
      colors: {
        chalice: "#AAAAAA",
        electric: "#FDDB2A",
      },
    },
  },
  plugins: [],
};
