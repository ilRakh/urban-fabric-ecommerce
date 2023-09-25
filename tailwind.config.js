/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "uf-black": "#121212",
      "uf-background": "#151515",
      "uf-white": "#ffffff",
      "uf-gray": "#A7A7A7",
      "uf-light-gray": "#EFEFEF",
      "uf-dark-gray": "#3A3A3A",
      "uf-orange": "#FF4C00",
      "uf-red": "#E51010",
    },
    extend: {},
  },
  plugins: [],
};
