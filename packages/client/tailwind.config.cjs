/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        midnight: "rgb(13, 21, 134)",
      },
      height: {
        landing: "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
