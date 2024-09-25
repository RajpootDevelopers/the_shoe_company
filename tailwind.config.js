/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        media560: "560px",
        media440: "440px",
      },
      backgroundImage: {
        "testimonial-section":
          "url('./images/testimonial-section-background.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("open-menu", ".open-menu &");
    }),
    plugin(function ({ addVariant }) {
      addVariant("active", ".active&");
    }),
  ],
};
