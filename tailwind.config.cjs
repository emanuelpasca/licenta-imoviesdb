/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",

    themes: [
      {
        mytheme: {
          primary: "#b31b1b",

          secondary: "#1E1B1B",

          accent: "#5E5E5E",

          neutral: "#4b5563",

          "base-100": "#000000",

          info: "#0CA6E9",

          success: "#2BD4BD",

          warning: "#F4C152",

          error: "#FB6F84",
        },
      },
    ],
  },
};
