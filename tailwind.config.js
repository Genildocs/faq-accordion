/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  important: "#root",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        whereas: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
